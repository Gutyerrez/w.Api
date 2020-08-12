import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import Group from '../../app/Extensions/Permission/Group'

export default class Threads extends BaseSchema {
  protected tableName = 'threads'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('forum_id').notNullable()
      table.string('user_id', 36).notNullable()
      table.string('title', 255).notNullable()
      table.string('slug').nullable()
      table.boolean('promoted').notNullable().defaultTo(false)
      table.boolean('sticky').notNullable().defaultTo(false)
      table.boolean('closed').notNullable().defaultTo(false)
      table.integer('views').notNullable().defaultTo(0)
      table.integer('answers').notNullable().defaultTo(0)
      table.boolean('answered').notNullable().defaultTo(false)
      table.string('restrict_read').nullable()
      table.string('restrict_write').unsigned().defaultTo(Group.DEFAULT)
      table.timestamp('last_reply_at').nullable()
      table.timestamps(true, true)

      table.foreign('forum_id').references('id').inTable('forums')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table.foreign('user_id').references('id').inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
