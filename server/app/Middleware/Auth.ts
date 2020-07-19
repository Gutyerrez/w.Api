import Env from '@ioc:Adonis/Core/Env'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { AuthenticationException } from '../Exceptions/AuthenticationException'

import jwt from 'jsonwebtoken'

export default class Auth {
  protected async authenticate(authorization: string, route?: string) {
    if (!authorization) {
      return false
    }
    
    try {
      jwt.verify(
        authorization.split(' ')[1] || authorization,
        Env.get('JWT_SECRET') as string
      )
    } catch (e) {
      return false
    }

    const decoded = jwt.decode(
      authorization
    )

    const prefix = Env.get('JWT_PREFIX') as string;

    return decoded && decoded['route'] === route && decoded['prefix'] === prefix || false
  }

  public async handle({ request }: HttpContextContract, next: () => Promise<void>) {
    const authorization = request.headers()['authorization'] as string

    const token = await this.authenticate(
      authorization,
      request.url(false)
    )

    if (!token) {
      throw new AuthenticationException(
        'Unauthorized access',
        'E_UNAUTHORIZED_ACCESS'
      )
    }

    await next()
  }
}
