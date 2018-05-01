'use strict'

const config = require('../src')
const { describe, it } = require('mocha')
const { expect } = require('chai')

describe('config-dburi', () => {
  describe('mongo', () => {
    it('should return mongo uri default', () => {
      delete process.env.MONGODB_URI
      expect(config.mongo()).to.eql('mongodb://localhost/test')
    })
    it('should return mongo uri from env default', () => {
      process.env.MONGODB_URI = 'mongodb://user:pass@mongo.example.com:1234'
      expect(config.mongo()).to.eql(
        'mongodb://user:pass@mongo.example.com:1234'
      )
    })
  })

  describe('redis', () => {
    it('should return redis uri default', () => {
      delete process.env.REDIS_URI
      expect(config.redis()).to.eql('redis://localhost')
    })
    it('should return redis uri from env default', () => {
      process.env.REDIS_URI = 'redis://redis:pass@redis.example.com:1234'
      expect(config.redis()).to.eql('redis://redis:pass@redis.example.com:1234')
    })
  })

  describe('postgres', () => {
    it('should return postgres uri default', () => {
      delete process.env.POSTGRES_PASSWORD
      delete process.env.POSTGRESQL_URI
      expect(config.postgres()).to.eql(
        'postgres://postgres:mysecretpassword@localhost/postgres'
      )
    })
    it('should return postgres uri default with password', () => {
      delete process.env.POSTGRES_PASSWORD
      delete process.env.POSTGRESQL_URI
      expect(config.postgres('mypass')).to.eql(
        'postgres://postgres:mypass@localhost/postgres'
      )
    })
    it('should return postgres uri from env default', () => {
      delete process.env.POSTGRES_PASSWORD
      process.env.POSTGRESQL_URI =
        'postgres://user:pass@postgres.example.com:1234'
      expect(config.postgres()).to.eql(
        'postgres://user:pass@postgres.example.com:1234'
      )
    })
  })
})
