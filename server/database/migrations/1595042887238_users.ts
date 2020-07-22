import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 16).notNullable().unique()
      table.uuid('unique_id').notNullable().unique()
      table.integer('cash').defaultTo(0).notNullable()
      table.bigInteger('discord_id').nullable().unique()
      table.boolean('two_factor_authentication_enabled').defaultTo(false).notNullable()
      table.string('two_factor_authentication_code', 6).nullable()
      table.string('twitter_access_token').nullable().unique()
      table.string('twitter_token_secret').nullable().unique()
      table.string('last_address').nullable()
      table.integer('last_lobby_id').nullable()
      table.timestamp('last_login').nullable()
      table.timestamp('first_login').nullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
