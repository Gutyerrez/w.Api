import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Post extends BaseModel {

  @column({ isPrimary: true })
  public id: number

  @column({ columnName: 'thread_id' })
  public threadId: number

  @column({ columnName: 'user_id' })
  public userId: string

  @column()
  public body: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

}
