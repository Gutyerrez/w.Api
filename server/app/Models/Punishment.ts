import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Punishment extends BaseModel {

  @column({ isPrimary: true })
  public id: number

  @column({ columnName: 'user_id' })
  public userId: string

  @column({ columnName: 'staffer_id' })
  public stafferId: string

  @column({ columnName: 'start_time' })
  public startTime?: DateTime

  public type: string

  public category: string

  public duration: number

  @column({ columnName: 'custom_reason' })
  public customReason?: string

  public proof?: string

  @column({ columnName: 'unban_staffer_id' })
  public unbanStafferId?: string

  @column({ columnName: 'unban_time' })
  public unbanTime?: DateTime

  @column({ columnName: 'unban_reason' })
  public unbanReason?: string

  @column({ columnName: 'unban_category' })
  public unbanCategory?: string

  @column()
  public hidden: boolean

  @column()
  public perpetual: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

}
