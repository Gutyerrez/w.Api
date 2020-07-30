import { DateTime } from 'Luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class GroupDue extends BaseModel {

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

}
