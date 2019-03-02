const _read = require('./read')
const _create = require('./create')
const _auth = require('./auth')

module.exports = {
  index: _read.index,
  fetch: _read.fetch,
  addOne: _create.addOne,
  login: _auth.login,
  currentUser: _read.currentUser
}
