import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Group extends BaseModel {

  @column({ isPrimary: true })
  public name: string

  @column({ columnName: 'display_name' })
  public displayName: string

  @column()
  public prefix: string

  @column()
  public suffix?: string

  @column()
  public color: string

  @column()
  public priority: number

  @column({ columnName: 'tab_list_order' })
  public tabListOrder: number

  @column({ columnName: 'discord_role_id' })
  public discordRoleId?: number

}
