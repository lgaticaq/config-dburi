'use strict';

const config = require('../src');
const expect = require('chai').expect;

describe('config-dburi', () => {
  describe('mongo', () => {
    it('should return mongo uri default', () => {
      delete process.env.MONGO_PORT_27017_TCP_ADDR;
      delete process.env.MONGO_PORT_27017_TCP_PORT;
      delete process.env.MONGODB_URI;
      expect(config.mongo()).to.eql('mongodb://localhost/test');
    });
    it('should return mongo uri docker default', () => {
      process.env.MONGO_PORT_27017_TCP_ADDR = '172.168.1.2';
      process.env.MONGO_PORT_27017_TCP_PORT = 27017;
      delete process.env.MONGODB_URI;
      expect(config.mongo()).to.eql('mongodb://172.168.1.2:27017/test');
    });
    it('should return mongo uri docker with dbname', () => {
      process.env.MONGO_PORT_27017_TCP_ADDR = '172.168.1.2';
      process.env.MONGO_PORT_27017_TCP_PORT = 27017;
      delete process.env.MONGODB_URI;
      expect(config.mongo('example')).to.eql('mongodb://172.168.1.2:27017/example');
    });
    it('should return mongo uri from env default', () => {
      delete process.env.MONGO_PORT_27017_TCP_ADDR;
      delete process.env.MONGO_PORT_27017_TCP_PORT;
      process.env.MONGODB_URI = 'mongodb://user:pass@mongo.example.com:1234';
      expect(config.mongo()).to.eql('mongodb://user:pass@mongo.example.com:1234');
    });
  });

  describe('redis', () => {
    it('should return redis uri default', () => {
      delete process.env.REDIS_PORT_6379_TCP_ADDR;
      delete process.env.REDIS_PORT_6379_TCP_PORT;
      delete process.env.REDIS_URI;
      expect(config.redis()).to.eql('redis://localhost');
    });
    it('should return redis uri docker default', () => {
      process.env.REDIS_PORT_6379_TCP_ADDR = '172.168.1.2';
      process.env.REDIS_PORT_6379_TCP_PORT = 6379;
      delete process.env.REDIS_URI;
      expect(config.redis()).to.eql('redis://172.168.1.2:6379');
    });
    it('should return redis uri from env default', () => {
      delete process.env.REDIS_PORT_6379_TCP_ADDR;
      delete process.env.REDIS_PORT_6379_TCP_PORT;
      process.env.REDIS_URI = 'redis://redis:pass@redis.example.com:1234';
      expect(config.redis()).to.eql('redis://redis:pass@redis.example.com:1234');
    });
  });

  describe('postgres', () => {
    it('should return postgres uri default', () => {
      delete process.env.POSTGRES_PORT_5432_TCP_ADDR;
      delete process.env.POSTGRES_PORT_5432_TCP_PORT;
      delete process.env.POSTGRES_PASSWORD;
      delete process.env.POSTGRESQL_URI;
      expect(config.postgres()).to.eql('postgres://postgres:mysecretpassword@localhost/postgres');
    });
    it('should return postgres uri default with password', () => {
      delete process.env.POSTGRES_PORT_5432_TCP_ADDR;
      delete process.env.POSTGRES_PORT_5432_TCP_PORT;
      delete process.env.POSTGRES_PASSWORD;
      delete process.env.POSTGRESQL_URI;
      expect(config.postgres('mypass')).to.eql('postgres://postgres:mypass@localhost/postgres');
    });
    it('should return postgres uri docker default', () => {
      process.env.POSTGRES_PORT_5432_TCP_ADDR = '172.168.1.2';
      process.env.POSTGRES_PORT_5432_TCP_PORT = 5432;
      process.env.POSTGRES_PASSWORD = 'mypass';
      delete process.env.POSTGRESQL_URI;
      expect(config.postgres()).to.eql('postgres://postgres:mypass@172.168.1.2:5432/postgres');
    });
    it('should return postgres uri from env default', () => {
      delete process.env.POSTGRES_PORT_5432_TCP_ADDR;
      delete process.env.POSTGRES_PORT_5432_TCP_PORT;
      delete process.env.POSTGRES_PASSWORD;
      process.env.POSTGRESQL_URI = 'postgres://user:pass@postgres.example.com:1234';
      expect(config.postgres()).to.eql('postgres://user:pass@postgres.example.com:1234');
    });
  });
});
