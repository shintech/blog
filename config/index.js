const path = require("path")
const PKG = require('../package.json')

const USERNAME = process.env['USERNAME']
const PASSWORD = process.env['PASSWORD']
const BASE_URL = process.env['BASE_URL'] || 'http://localhost:8000'
const DOMAIN = process.env['DOMAIN'] || 'example.domain'
const AUTH = 'Basic ' + Buffer.from(USERNAME + ':' + PASSWORD).toString('base64')

module.exports = { USERNAME, PASSWORD, BASE_URL, DOMAIN, AUTH }

