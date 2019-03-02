
const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')

module.exports = ({ logger, db, router }) => {
  const server = express()

  server.use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())
    .use(compression())

    .use('/api', (req, res, next) => {
      res.on('finish', () => {
        logger.info(`${res.statusCode} - ${req.method} - ${req.url}`)
      })

      req.db = db
      req.logger = logger
      next()
    })

    .use('/api', router)

  return server
}
