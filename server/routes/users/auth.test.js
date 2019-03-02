/* eslint-env jest */

import nock from 'nock'
import request from 'supertest'

console.log = jest.fn()

let loginResponse = (e, q) => {
  if (!q.username || q.username === '') { return { token: false } }
  const token = (q.password === '$2a$10$z0yU2Lr73m/hz/FcrITgn.9s3vqpXmWJGvyfoG4wupvu03eylINQG') ? 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NDA2MTExMTgsImV4cCI6MTU0MDY5NzUxOH0.OVgzl7iQL_tF48D2QGXl0h2sj2b9JtyS7cPoXxZIAXU' : false

  return {
    token
  }
}

nock(_url.users.href)
  .post('/api/users/login')
  .times(3)
  .reply(200, loginResponse)

describe('SERVER -> USERS -> api.login() - expect successful login...', () => {
  let res

  beforeAll(async () => {
    res = await request(_server).post('/api/users/login')
      .send({ username: 'username', password: '$2a$10$z0yU2Lr73m/hz/FcrITgn.9s3vqpXmWJGvyfoG4wupvu03eylINQG' })
  })

  it('expect res.body to have property token...', async () => {
    expect(res.body).toHaveProperty('token')
  })

  it('expect res.body.token to equal mock response token...', () => {
    expect(res.body.token).toEqual('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NDA2MTExMTgsImV4cCI6MTU0MDY5NzUxOH0.OVgzl7iQL_tF48D2QGXl0h2sj2b9JtyS7cPoXxZIAXU')
  })
})

describe('SERVER -> USERS -> api.login() - expect login failure with incorrect password...', () => {
  let res

  beforeAll(async () => {
    res = await request(_server).post('/api/users/login')
      .send({ username: 'username', password: 'fail' })
  })

  it('expect res.body to have property token...', async () => {
    expect(res.body).toHaveProperty('token')
  })

  it('expect res.body.token to be false', () => {
    expect(res.body.token).toBeFalsy()
  })
})

describe('SERVER -> USERS -> api.login() - expect login failure no username...', () => {
  let res

  beforeAll(async () => {
    res = await request(_server).post('/api/users/login')
      .send({ username: '', password: '$2a$10$z0yU2Lr73m/hz/FcrITgn.9s3vqpXmWJGvyfoG4wupvu03eylINQG' })
  })

  it('expect res.body to have property token...', async () => {
    expect(res.body).toHaveProperty('token')
  })

  it('expect res.body.token to be false', () => {
    expect(res.body.token).toBeFalsy()
  })
})
