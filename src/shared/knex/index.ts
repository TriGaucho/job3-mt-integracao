import { client, database, host, password, user } from '@shared/const/ambiente'
import knex from 'knex'

export default knex({
  asyncStackTraces: true,
    client: client,
    connection: {
      host: host,
      database: database,
      user: user,
      password: password
    },
    pool: {
      min: 2,
      max: 10,
      propagateCreateError: false
    },
    migrations: {
      tableName: 'knex_migrations'
    }
})
