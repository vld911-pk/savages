const config = require('config');


module.exports = {

  development: {
    client: 'pg',
    connection: {
        host: config.HOST,
        port: config.PORT,
        user: config.USER,
        password: config.PASSWORD,
        database: config.DATABASE,
        ssl: {
            rejectUnauthorized: false
        }
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './server/migrations'
    },
    seeds: {
      directory: './server/seeds'
    }
  },

  staging: {
    client: 'pg',
    
    connection: {
        host: config.HOST,
        port: config.PORT,
        user: config.USER,
        password: config.PASSWORD,
        database: config.DATABASE,
        ssl: {
            rejectUnauthorized: false
        }
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations'
    },
    seeds: {
      directory: './server/seeds'
    }
  },

  production: {
    client: 'pg',
    connection: {
        host: config.HOST,
        port: config.PORT,
        user: config.USER,
        password: config.PASSWORD,
        database: config.DATABASE,
        ssl: {
            rejectUnauthorized: false
        }
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations'
    },
    seeds: {
      directory: './server/seeds'
    }
  }

};
