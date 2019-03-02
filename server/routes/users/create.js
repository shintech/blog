
const bcrypt = require('bcryptjs')

module.exports = {
  addOne: async ctx => {
    const { logger, db } = ctx

    let res

    const encryptedPassword = bcrypt.hashSync(ctx.body.password, bcrypt.genSaltSync(10), null)

    const attrs = {
      first_name: ctx.body.first_name,
      last_name: ctx.body.last_name,
      email: ctx.body.email,
      username: ctx.body.username,
      password: encryptedPassword
    }

    try {
      res = await db.one('insert into users( first_name, last_name, email, username, password )' + 'values( ${first_name}, ${last_name}, ${email}, ${username}, ${password} ) returning id', attrs)// eslint-disable-line
    } catch (err) {
      logger.error(err)
      ctx.status = 500
      res = err
    }

    ctx.status = 200
    ctx.body = res
  }
}
