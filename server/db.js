const promise = require('bluebird')
const pg = require('pg-promise')

const environment = process.env['NODE_ENV']
const postgresURI = process.env['POSTGRES_URI']

module.exports = function initDB (logger) {
  const pgp = pg({
    promiseLib: promise
  })

  const init = pgp(postgresURI)
  const databaseName = postgresURI.split('/')

  if (environment === 'development') {
    logger.info(`Connected to database: ${databaseName[databaseName.length - 1]}`)
  }

  return init
}
