import Env from '@ioc:Adonis/Core/Env'
import Database from '@ioc:Adonis/Lucid/Database'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { Discord } from '../../../misc/discord'

import jwt from 'jsonwebtoken'

export default class DiscordController {

  public async store({ request }: HttpContextContract) {
    const code = request.input('code')
    const user_id = request.input('user_id')
    const token = request.input('token')

    try {
      !jwt.verify(
        token,
        Env.get('JWT_SECRET') as string
      )
    } catch(e) {
      return {
        code: 400,
        message: 'Invalid payload token'
      }
    }

    const discordUser = await Discord.fetch(code)

    if (!discordUser) {
      return {
        code: 500,
        message: 'Internal server error'
      }
    }

    const exists = await Database.from('users')
      .select('*')
      .where('discord_id', discordUser.id)
      .first()

    if (exists) {
      return {
        code: 401,
        message: 'Your disocrd account is already synchronized'
      }
    }

    const updated = await Database.from('users')
      .select('*')
      .where('id', user_id)
      .update({
        discord_id: discordUser.id
      })

    return {
      updated
    }
  }

}
