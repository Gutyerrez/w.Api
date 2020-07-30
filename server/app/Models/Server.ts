import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Server extends BaseModel {

  @column({ isPrimary: true })
  public name: string

  @column({ columnName: 'display_name' })
  public displayName: string

}
