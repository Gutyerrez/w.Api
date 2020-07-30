import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersGroupsDue extends BaseSchema {
  protected tableName = 'users_groups_due'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('user_id').notNullable()
      table.string('group').notNullable()
      table.string('server').notNullable()
      table.timestamp('due_at').notNullable()

      table.foreign('user_id').references('id').inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table.foreign('server').references('name').inTable('servers')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table.foreign('group').references('name').inTable('groups')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
