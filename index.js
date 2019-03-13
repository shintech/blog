const { URL } = require('url')
const nextRoutes = require('./routes')
const LRUCache = require("lru-cache")
const Shlogger = require('shlogger')
const Server = require('./server')
const Database = require('./server/db')
const Router = require('./server/router')
const pkg = require('./package.json')

const PORT = parseInt(process.env['PORT']) || 8000
const SERVER = new URL(process.env['SERVER'] || 'http://localhost:65330')
const NODE_ENV = process.env['NODE_ENV'] || 'development'

const next = require('next')({ dev: NODE_ENV !== 'production' })
const handle = nextRoutes.getRequestHandler(next)

const ssrCache = new LRUCache({
  max: 100 * 1024 * 1024,
  length: function (n, key) {
    return n.length
  },
  maxAge: 1000 * 60 * 60 * 24 * 30
})

function getCacheKey (req) {
  return `${req.url}`
}

async function renderAndCache (req, res, pagePath, queryParams) {
  const key = getCacheKey(req)
  if (ssrCache.has(key)) {
    res.setHeader('x-cache', 'HIT')
    res.send(ssrCache.get(key))
    return
  }

  try {
    const html = await next.renderToHTML(req, res, pagePath, queryParams)

    if (res.statusCode !== 200) {
      res.send(html)
      return
    }

    ssrCache.set(key, html)

    res.setHeader('x-cache', 'MISS')
    res.send(html)
  } catch (err) {
    next.renderError(err, req, res, pagePath, queryParams)
  }
}

next.prepare()
  .then(() => {
    const logger = new Shlogger()
    const router = new Router()
    const db = new Database(logger)

    const server = Server({ logger, db, router })

    server.get('/', (req, res) => {
      renderAndCache(req, res, '/')
    })

    server.get('*', (req, res) => handle(req, res))

    logger.info(`initializing -> ${pkg.name} - version: ${pkg.version}...`)
    logger.info(`config: ${JSON.stringify({ PORT, SERVER, NODE_ENV })}...`)

    const listening = (app, port, host) => logger.info(`${app} -> listening at ${host}:${port}...`)
    const handleError = (err) => logger.error(err.message)

    server.listen(PORT)
      .on('listening', () => listening('server', PORT, '0.0.0.0'))
      .on('error', err => handleError(err))
  })
