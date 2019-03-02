/* eslint-env jest */

import nock from 'nock'
import request from 'supertest'

console.log = jest.fn()

nock(_url.users.href)
  .get('/api/users')
  .reply(200, _usersMock)

  .get(`/api/users/${_usersMock[0].id}`)
  .reply(200, _usersMock[0])

describe('SERVER -> GET /api/users -> api.fetchAll()..', () => {
  let res

  beforeAll(async () => {
    res = await request(_server).get('/api/users')
  })

  it('expect users.length to be greater than 0...', async () => {
    expect(res.body.length).toBeGreaterThan(0)
  })

  it('expect users[0] to have property id...', async () => {
    expect(res.body[0]).toHaveProperty('id')
  })

  it('expect users[0].id to equal mock.id...', async () => {
    expect(res.body[0].id).toEqual(_usersMock[0].id)
  })
})

describe('SERVER -> GET /api/users/:id -> api.fetchOne()..', () => {
  let res

  beforeAll(async () => {
    res = await request(_server).get(`/api/users/${_usersMock[0].id}`)
  })

  it('expect user to have property id...', async () => {
    expect(res.body).toHaveProperty('id')
  })

  it('expect user.id to equal mock.id...', async () => {
    expect(res.body.id).toEqual(_usersMock[0].id)
  })

  it('expect user to have property first_name...', async () => {
    expect(res.body).toHaveProperty('first_name')
  })

  it('expect user.first_name to equal mock.first_name...', async () => {
    expect(res.body.first_name).toEqual(_usersMock[0].first_name)
  })

  it('expect user to have property last_name...', async () => {
    expect(res.body).toHaveProperty('last_name')
  })

  it('expect user.last_name to equal mock.last_name...', async () => {
    expect(res.body.last_name).toEqual(_usersMock[0].last_name)
  })

  it('expect user to have property email...', async () => {
    expect(res.body).toHaveProperty('email')
  })

  it('expect user.email to equal mock.email...', async () => {
    expect(res.body.email).toEqual(_usersMock[0].email)
  })

  it('expect user to have property username...', async () => {
    expect(res.body).toHaveProperty('username')
  })

  it('expect user.username to equal mock.username...', async () => {
    expect(res.body.username).toEqual(_usersMock[0].username)
  })

  it('expect user to have property password...', async () => {
    expect(res.body).toHaveProperty('password')
  })

  it('expect user.password to equal mock.password...', async () => {
    expect(res.body.password).toEqual(_usersMock[0].password)
  })
})
