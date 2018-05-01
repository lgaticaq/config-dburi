'use strict'

const getMongodbUri = dbname => {
  dbname = dbname || 'test'
  return process.env.MONGODB_URI || `mongodb://localhost/${dbname}`
}

const getRedisUri = () => {
  return process.env.REDIS_URI || 'redis://localhost'
}

const getPostgresqlUri = password => {
  const username = process.env.POSTGRES_USER || 'postgres'
  const dbname =
    process.env.POSTGRES_DB || process.env.POSTGRES_USER || 'postgres'
  password = password || process.env.POSTGRES_PASSWORD || 'mysecretpassword'
  const uri = `postgres://${username}:${password}@localhost/${dbname}`
  return process.env.POSTGRESQL_URI || uri
}

module.exports = {
  mongo: getMongodbUri,
  redis: getRedisUri,
  postgres: getPostgresqlUri
}
