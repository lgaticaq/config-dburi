'use strict';

const getMongodbUri = dbname => {
  dbname = dbname || 'test';
  let uri = `mongodb://localhost/${dbname}`;
  if (process.env.MONGO_PORT_27017_TCP_ADDR && process.env.MONGO_PORT_27017_TCP_PORT) {
    uri = `mongodb://${process.env.MONGO_PORT_27017_TCP_ADDR}:${process.env.MONGO_PORT_27017_TCP_PORT}/${dbname}`;
  } else if (process.env.MONGODB_URI) {
    uri = process.env.MONGODB_URI;
  }
  return uri;
};

const getRedisUri = () => {
  let uri = 'redis://localhost';
  if (process.env.REDIS_PORT_6379_TCP_ADDR && process.env.REDIS_PORT_6379_TCP_PORT) {
    uri = `redis://${process.env.REDIS_PORT_6379_TCP_ADDR}:${process.env.REDIS_PORT_6379_TCP_PORT}`;
  } else if (process.env.REDIS_URI) {
    uri = process.env.REDIS_URI;
  }
  return uri;
};

const getPostgresqlUri = password => {
  const username = process.env.POSTGRES_USER || 'postgres';
  const dbname = process.env.POSTGRES_USER || 'postgres';
  password = password || process.env.POSTGRES_PASSWORD || 'mysecretpassword';
  let uri = `postgres://${username}:${password}@localhost/${dbname}`;
  if (process.env.POSTGRES_PORT_5432_TCP_ADDR && process.env.POSTGRES_PORT_5432_TCP_PORT && process.env.POSTGRES_PASSWORD) {
    uri = `postgres://${username}:${password}@${process.env.POSTGRES_PORT_5432_TCP_ADDR}:${process.env.POSTGRES_PORT_5432_TCP_PORT}/${dbname}`;
  } else if (process.env.POSTGRESQL_URI) {
    uri = process.env.POSTGRESQL_URI;
  }
  return uri;
};

module.exports = {
  mongo: getMongodbUri,
  redis: getRedisUri,
  postgres: getPostgresqlUri
};
