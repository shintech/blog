
module.exports = {
  // index: async ctx => {
  //   const { logger, db } = ctx

  //   let res

  //   try {
  //     res = await db.any('SELECT * from users ORDER BY id DESC')
  //     ctx.status = 200
  //   } catch (err) {
  //     logger.error(err)
  //     res = err.message
  //     ctx.status = 400
  //   }

  //   ctx.body = res
  // },

  fetch: async (req, res) => {
    const { logger, db } = req

    const itemId = parseInt(req.params.id)

    try {
      const json = await db.one('SELECT * FROM users WHERE id = $1', [itemId])
      return res.status(200)
        .json(json)
    } catch (err) {
      logger.error(err)

      if (err.name === 'QueryResultError') {
        return res.status(400)
          .send(err.message)
      } else {
        return res.status(500)
          .send(err.message)
      }
    }
  },

  currentUser: (req, res) => {
    return res.status(200)
      .json(req.decoded)
  }
}
