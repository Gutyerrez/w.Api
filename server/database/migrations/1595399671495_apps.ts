import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Apps extends BaseSchema {
  protected tableName = 'apps'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.string('name').primary()
      table.string('display_name').notNullable()
      table.text('description').notNullable()
      table.integer('slots').notNullable().defaultTo(10)
      table.string('address').notNullable()
      table.integer('port').notNullable()
      table.string('type').notNullable()
      table.string('server').nullable()
      table.string('restrict_join').nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
