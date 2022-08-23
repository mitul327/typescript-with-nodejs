import supertest from 'supertest'
import app from './app'

describe('app', () => {
  it('works', () => {
    supertest(app).get('/').expect('Content-type', /json/).expect(200)
  })
})
