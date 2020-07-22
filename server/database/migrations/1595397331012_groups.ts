import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Groups extends BaseSchema {
  protected tableName = 'groups'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.string('name').notNullable().primary().unique()
      table.string('display_name').notNullable()
      table.string('prefix').notNullable()
      table.string('suffix').nullable()
      table.string('color').notNullable().defaultTo('GRAY')
      table.integer('priority').notNullable().defaultTo(0)
      table.integer('tab_list_order').notNullable().defaultTo(0)
      table.bigInteger('discord_role_id').nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
