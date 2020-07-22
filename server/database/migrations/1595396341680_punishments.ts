import BaseSchema from '@ioc:Adonis/Lucid/Schema'

import Type from '../../app/Extensions/Punish/Type'

export default class Punishments extends BaseSchema {
  protected tableName = 'punishments'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').notNullable()
      table.integer('staffer_id').notNullable()
      table.timestamp('start_time').nullable()
      table.enum('type', [
        Type.BAN,
        Type.TEMP_BAN,
        Type.MUTE
      ]).notNullable()
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

      table.foreign('user_id').references('id').inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table.foreign('staffer_id').references('id').inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table.foreign('category').references('name').inTable('punish_categories')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table.foreign('unban_staffer_id').references('id').inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table.foreign('unban_category').references('name').inTable('unpunish_categories')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
