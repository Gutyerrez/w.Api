import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Shorts extends BaseSchema {
  protected tableName = 'shorts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('user_id').notNullable()
      table.string('name').notNullable()
      table.string('original_url').notNullable()
      table.integer('clicks').notNullable().defaultTo(0)
      table.timestamps(true)

      table.foreign('user_id').references('id').inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
