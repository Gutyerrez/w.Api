import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Punishments extends BaseSchema {
  protected tableName = 'punishments'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').notNullable()
      table.integer('staffer_id').notNullable()
      table.timestamp('start_time').nullable()
      table.string('type').notNullable()
      table.string('category').notNullable()
      table.bigInteger('duration').notNullable()
      table.string('custom_reason').nullable()
      table.string('proof')
      table.integer('unban_staffer_id')
      table.timestamp('unban_time')
      table.string('unban_reason')
      table.string('unban_category')
      table.boolean('hidden').notNullable().defaultTo(false)
      table.boolean('perpetual').notNullable().defaultTo(false)
      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
