import Env from '@ioc:Adonis/Core/Env'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { InvalidApplicationException } from 'App/Exceptions/InvalidApplicationException'

import jwt from 'jsonwebtoken'

export default class AuthController {

  public async store({ request }: HttpContextContract) {
    const apps = JSON.parse(Env.get('APPS') as string) as string[]

    const app = request.headers()['application'] as string

    if (!apps.find(e => e === app)) {
      throw new InvalidApplicationException(
        'Can\'t find informed application',
        'E_UNKNOWN_APPLICATION'
      )
    }

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
