import Env from '@ioc:Adonis/Core/Env'

import axios from 'axios'
import qs from 'querystring'

const api = axios.create({
  baseURL: 'https://discord.com/api/v6',
})

declare interface AccessTokenResponse {
  access_token: string
  token_type: string
  expires_in: Number
  refresh_token: string
  scop: string
}

declare interface DiscordUser {
  id: string
  username: string
  discriminator: string
  avatar: string
  bot?: boolean
  system?: boolean
  mfa_enabled?: boolean
  locale?: string
  verified?: boolean
  email?: string
  flags?: Number
  premium_type?: Number
  public_flags?: Number
}

export class Discord {
  protected static async exchangeCode(code: string) {
    const response = await api.post<AccessTokenResponse>(
      '/oauth2/token',
      qs.stringify({
        client_id: Env.get('CLIENT_ID') as string,
        client_secret: Env.get('CLIENT_SECRET') as string,
        grant_type: 'authorization_code',
        code,
        redirect_url: Env.get('REDIRECT_URI'),
        scope: 'identify email connections',
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    )

    return response.data
  }

  protected static async authorize({
    token_type,
    access_token,
  }: AccessTokenResponse) {
    const response = await api.get<DiscordUser>('/users/@me', {
      headers: {
        Authorization: `${token_type} ${access_token}`,
      },
    })

    return response.data
  }

  static async fetch(code: string) {
    const exchanged = await Discord.exchangeCode(code)

    return await Discord.authorize(exchanged)
  }
}

export default api
