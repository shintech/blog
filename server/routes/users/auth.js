const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

function generateWebToken (user) {
  let retval = {
    id: user.id,
    username: user.username
  }

  return jwt.sign(retval, process.env.JWT_SECRET, {
    expiresIn: 60 * 60 * 24
  })
}

module.exports = {
  login: async (req, res) => {
    const { logger, db } = req

    if (!req.body.username || req.body.username === '') {
      return res.status(401)
        .json({ token: false })
    }

    try {
      let query = await db.one(`SELECT id, username, password FROM users WHERE username = '${req.body.username}'`)

      let authenticated = bcrypt.compareSync(req.body.password, query.password)

      if (authenticated) {
        const token = generateWebToken(query)

        res.status(200)
          .json({ token })
      } else {
        res.status(401)
          .json({ token: false })
      }
    } catch (err) {
      logger.error(err.message)
      res.status(401)
        .json({ token: false })
    }
  }
}
