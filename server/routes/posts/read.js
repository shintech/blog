module.exports = {
  index: async (req, res) => {
    const { db } = req

    try {
      const posts = await db.query('SELECT id, title, content, description, author, created_at FROM posts ORDER by created_at desc')
      res.status(200)
        .json(posts)
    } catch (err) {
      res.status(400)
        .send(err.message)
    }
  },

  fetch: async (req, res) => {
    const { db } = req

    const id = parseInt(req.params.id)

    try {
      const post = await db.one(`SELECT id, title, content, description, author, created_at from posts where id = '${id}'`)
      res.status(200)
        .json(post)
    } catch (err) {
      res.status(400)
        .send(err.message)
    }
  }
}
