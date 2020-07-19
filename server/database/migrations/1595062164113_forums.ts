import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import Group from '../../app/Extensions/Permission/Group'

export default class Forums extends BaseSchema {
  protected tableName = 'forums'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('category_id').unsigned()
      table.integer('parent_id').unsigned().nullable()
      table.string('name').notNullable()
      table.string('description').nullable()
      table.string('slug').nullable()
      table.integer('template_thread_id').unsigned().nullable()
      table.string('restrict_read').nullable()
      table.string('restrict_write').defaultTo(Group.DEFAULT.name)
      table.string('threads_restrict_read').nullable()
      table.string('threads_restrict_write').defaultTo(Group.DEFAULT.name)
      table.string('threads_restrict_move').defaultTo(Group.MANAGER.name)
      table.string('threads_restrict_close').defaultTo(Group.MANAGER.name)
      table.string('threads_fallback_forum_id').unsigned().nullable()

      table.foreign('category_id').references('id').inTable('categories')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table.foreign('parent_id').references('id').inTable('forums')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
