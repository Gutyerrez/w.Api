import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Short from 'App/Models/Short'

export default class ShortsController {

  async show({ params }: HttpContextContract) {
    const { name } = params

    const shortedUrl = await Short.query()
      .where('name', name)
      .first()

    if (shortedUrl) {
      await Short.query()
        .update({
          views: Number(shortedUrl.views) + 1
        })
    }

    return shortedUrl
  }

  async store({ request }: HttpContextContract) {
    const user_id = request.input('user_id')
    const name = request.input('name')
    const original_url = request.input('original_url')

    try {
      const shortedUrl = await Short.create({
        userId: user_id,
        name,
        originalUrl: original_url
      })

      return shortedUrl.$original
    } catch (error) {
      return error
    }
  }

}
