import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Servers extends BaseSchema {
  protected tableName = 'servers'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.string('name').primary()
      table.string('display_name').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
