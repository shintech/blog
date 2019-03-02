const { URL } = require('url')
const nextRoutes = require('./routes')
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

next.prepare()
  .then(() => {
    const logger = new Shlogger()
    const router = new Router()
    const db = new Database(logger)

    const server = Server({ logger, db, router })

    server.use((req, res) => handle(req, res))

    logger.info(`initializing -> ${pkg.name} - version: ${pkg.version}...`)
    logger.info(`config: ${JSON.stringify({ PORT, SERVER, NODE_ENV })}...`)

    const listening = (app, port, host) => logger.info(`${app} -> listening at ${host}:${port}...`)
    const handleError = (err) => logger.error(err.message)

    server.listen(PORT)
      .on('listening', () => listening('server', PORT, '0.0.0.0'))
      .on('error', err => handleError(err))
  })
