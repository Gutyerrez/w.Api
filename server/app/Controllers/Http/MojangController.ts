import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import api from '../../../misc/mojang'

export default class MojangController {
  public async store({ request }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    try {
      const response = await api.post('/authenticate', {
        agent: {
          name: 'Minecraft',
          version: 1,
        },
        username: email,
        password,
        requestUser: true
      })

      const { user }: {
        user: {
          username: string,
          properties: Array<any>,
          id: string
        }
      } = response.data

      return user
    } catch(e) {
      return {
        code: 400,
        message: 'Invalid email address or password'
      }
    }
  }
}
