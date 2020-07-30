import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

import Duration from '../../app/Extensions/Punish/Duration'

export default class PunishCategory extends BaseModel {

  @column({ isPrimary: true })
  public name: string

  @column({ columnName: 'display_name' })
  public displayName: string

  @column()
  public description?: string

  @column()
  public group: string

  @column()
  public durations: Array<Duration>

  @column()
  public enabled: boolean

}
