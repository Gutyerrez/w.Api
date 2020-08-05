import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Punishment from 'App/Models/Punishment'

export default class PunishmentsController {

  public async index() {
    const punishments = await Punishment.query()
      .where('created_at', '>=', 'CURRENT_DATE')
      .limit(7)

    return punishments
  }

  public async show({ params }: HttpContextContract) {
    const { id } = params

    const punishment = await Punishment.query()
      .where('id', id)
      .first()

    return punishment
  }

}
