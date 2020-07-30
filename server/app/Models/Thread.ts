import { DateTime } from 'luxon'
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm"

export default class Thread extends BaseModel {

  @column({ isPrimary: true })
  public id: number

  @column({ columnName: 'forum_id' })
  public forumId: number

  @column({ columnName: 'user_id' })
  public userId: string

  @column()
  public title: string

  @column()
  public slug?: string

  @column()
  public promoted: boolean

  @column()
  public sticky: boolean

  @column()
  public closed: boolean

  @column()
  public views: number

  @column()
  public answers: number

  @column()
  public answered: number

  @column({ columnName: 'restrict_read' })
  public restrictRead?: number;

  @column({ columnName: 'restrict_write' })
  public resitrcWirte: number;

  @column({ columnName: 'last_reply_at' })
  public lastReplyAt?: DateTime;

}
