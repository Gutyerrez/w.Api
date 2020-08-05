import { DateTime } from 'Luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'

import User from 'App/Models/User'

export default class UserGroupDue extends BaseModel {

  static table = 'users_groups_due'

  @column({ isPrimary: true })
  public id: number

  @column({ columnName: 'user_id' })
  public userId: string

  @column()
  public group: string

  @column()
  public server: string

  @column({ columnName: 'due_at' })
  public dueAt: DateTime

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

}
