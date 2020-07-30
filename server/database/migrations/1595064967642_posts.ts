import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Posts extends BaseSchema {
  protected tableName = 'posts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('thread_id').unsigned().notNullable()
      table.string('user_id').unsigned().notNullable()
      table.text('body').notNullable()
      table.integer('parent_id').unsigned().nullable()
      table.timestamps(true, true)

      table.foreign('thread_id').references('id').inTable('threads')
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
