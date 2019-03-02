module.exports = {
  add: async (req, res) => {
    const { logger, db } = req

    const attrs = {
      title: req.body.title,
      content: req.body.content,
      description: req.body.description,
      author: req.decoded.username
    }

    try {
      let query = await db.one('insert into posts( title, content, description, author )' + 'values( ${title}, ${content}, ${description}, ${author} ) returning id', attrs)// eslint-disable-line

      res.status(200)
      res.set({ 'Content-Type': 'application/json' })

      res.json(query)
    } catch (err) {
      logger.error(err)
      res.status(500)
        .send(err.message)
    }
  }
}
