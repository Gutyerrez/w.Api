import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Punishment from 'App/Models/Punishment'

export default class UsersPunishmentsController {

  public async show({ params }: HttpContextContract) {
    const { user_id } = params

    const punishments = await Punishment.query()
      .where('user_id', user_id)

    return punishments
  }

}
