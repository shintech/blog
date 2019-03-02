const _read = require('./read')
const _create = require('./create')

module.exports = {
  index: _read.index,
  fetch: _read.fetch,
  create: _create.add
}
