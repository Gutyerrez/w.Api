import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class RevokeCategory extends BaseModel {

  @column()
  public name: string

  @column({ columnName: 'display_name' })
  public displayName: string

  @column()
  public description: string

  @column()
  public group: string

  @column()
  public enabled: boolean

}
