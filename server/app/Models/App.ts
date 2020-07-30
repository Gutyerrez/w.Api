import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class App extends BaseModel {

  @column({ isPrimary: true })
  public name: string

  @column({ columnName: 'display_name' })
  public displayName: string

  @column()
  public description: string

  @column()
  public slots: number

  @column()
  public address: string

  @column()
  public port: number

  @column()
  public type: string

  @column()
  public server?: string

  @column({ columnName: 'restrict_join' })
  public restrictJoin?: string

}
