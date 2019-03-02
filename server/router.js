const express = require('express')
const posts = require('./routes/posts')
const users = require('./routes/users')
const middleware = require('./middleware/auth')

const router = express.Router()

module.exports = function (options) {
  router.get('/state', (req, res) =>
    res.status(200).json({
      status: 'ok'
    })
  )

  router.route('/posts')
    .get(posts.index)
    .post(middleware.check, posts.create)

  router.route('/posts/:id')
    .get(posts.fetch)

  router.route('/login')
    .post(users.login)

  // router.route('/users/current')
  //   .get(middleware.check, users.currentUser)

  // router.route('/users/:id')
  //   .get(users.fetch)

  // router.get('/api/users', users.index)
  // router.get('/api/users/:id', users.fetch)

  return router
}
