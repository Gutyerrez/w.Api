import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'

import User from './User'
import UserGroupDue from './UserGroupDue'

export default class Group extends BaseModel {

  @column({ isPrimary: true })
  public name: string

  @column({ columnName: 'display_name' })
  public displayName: string

  @column()
  public prefix: string

  @column()
  public suffix?: string

  @column()
  public color: string

  @column()
  public priority: number

  @column({ columnName: 'tab_list_order' })
  public tabListOrder: number

  @column({ columnName: 'discord_role_id' })
  public discordRoleId?: number

  @manyToMany(() => User, {
    localKey: 'name',
    pivotForeignKey: 'group',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'user_id',
    pivotTable: UserGroupDue.table,
    onQuery: (query) => {
      const currentTime = new Date()

      query.where('users_groups_due.due_at', '>', currentTime)
    }
  })
  public users: ManyToMany<typeof User>

}
