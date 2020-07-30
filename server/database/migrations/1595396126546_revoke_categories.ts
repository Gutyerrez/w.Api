import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UnpunishCategories extends BaseSchema {
  protected tableName = 'revoke_categories'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.string('name').primary().unique()
      table.string('display_name').notNullable()
      table.text('description').nullable()
      table.string('group').notNullable()
      table.boolean('enabled').notNullable().defaultTo(true)

      table.foreign('group').references('name').inTable('groups')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
