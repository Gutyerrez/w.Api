import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import Group from '../../app/Extensions/Permission/Group'

export default class Categories extends BaseSchema {
  protected tableName = 'categories'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.string('slug').nullable()
      table.string('restrict_read').nullable()
      table.string('restrict_write').unsigned().defaultTo(Group.DEFAULT.name)
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
