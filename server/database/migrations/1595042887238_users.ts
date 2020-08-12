import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.string('id', 36).primary()
      table.string('name', 16).notNullable().unique()
      table.bigInteger('discord_id').nullable().unique()
      table.boolean('two_factor_authentication_enabled').defaultTo(false).notNullable()
      table.string('two_factor_authentication_code', 6).nullable()
      table.string('twitter_access_token').nullable().unique()
      table.string('twitter_token_secret').nullable().unique()
      table.string('last_address').nullable()
      table.integer('last_lobby_id').nullable()
      table.timestamp('last_login').nullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
