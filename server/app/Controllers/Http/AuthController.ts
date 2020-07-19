import Env from '@ioc:Adonis/Core/Env'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import jwt from 'jsonwebtoken'

export default class AuthController {

  public async store({ request }: HttpContextContract) {
    const route = request.headers()['route'] || '/'

    const access_token = jwt.sign(
      {
        route,
        prefix: Env.get('JWT_PREFIX') as string
      },
      Env.get('JWT_SECRET') as string,
      {
        expiresIn: Env.get('JWT_DURATION') as string,
      }
    )

    return {
      type: Env.get('JWT_PREFIX') as string,
      access_token,
    }
  }

}
