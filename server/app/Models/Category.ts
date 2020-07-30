import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Category extends BaseModel {

  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public slug?: string

  @column({ columnName: 'restrict_read' })
  public restrictRead?: string

  @column({ columnName: 'restrict_write' })
  public restrictWrite

}
