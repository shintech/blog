/* eslint-env jest */

import nock from 'nock'
import request from 'supertest'

console.log = jest.fn()

nock(_url.users.href)
  .post('/api/users')
  .times(1)
  .reply(200, _usersMock[0])

describe('SERVER -> POST /api/users -> api.addOne()', () => {
  let res

  beforeAll(async () => {
    res = await request(_server).post('/api/users')
      .send(_usersMock[0])
  })

  it('expect res.status to equal 200...', async () => {
    expect(res.status).toBe(200)
  })

  it('expect res.body to have property id', () => {
    expect(res.body).toHaveProperty('id')
  })

  it('expect res.body.id to equal mock.id...', () => {
    expect(res.body.id).toEqual(_usersMock[0].id)
  })
})
