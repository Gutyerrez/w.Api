import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {

  @column({ isPrimary: true })
  public id: string

  @column()
  public name: string

  @column()
  public cash: number

  @column({ columnName: 'discord_id' })
  public discordId?: number

  @column({ columnName: 'two_factor_authentication_enabled' })
  public twoFactorAuthenticationEnabled?: boolean

  @column({ columnName: 'two_factor_authentication_code' })
  public twoFactorAuthenticationCode?: number

  @column({ columnName: 'twitter_access_token' })
  public twitterAccessToken?: string

  @column({ columnName: 'twitter_token_secret' })
  public twitterTokenSecret?: string

  @column({ columnName: 'last_address' })
  public lastAddress?: string

  @column({ columnName: 'last_lobby_id' })
  public lastLobbyId?: number

  @column({ columnName: 'last_login' })
  public lastLogin?: DateTime

  @column.dateTime({ columnName: 'created_at', autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ columnName: 'updated_at', autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

}
