import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PunishCategories extends BaseSchema {
  protected tableName = 'punish_categories'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable().unique()
      table.string('display_name').notNullable()
      table.text('description').nullable()
      table.string('group').notNullable()
      table.text('durations').notNullable().defaultTo('[]')
      table.boolean('enabled').notNullable().defaultTo(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
