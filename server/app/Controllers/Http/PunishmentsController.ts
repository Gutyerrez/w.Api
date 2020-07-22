import Database from '@ioc:Adonis/Lucid/Database'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PunishmentsController {

  public async index() {
    const punishments = await Database.from('punishments as punishment')
      .select('*')

    return punishments
  }

  public async show({ params }: HttpContextContract) {
    const { id } = params

    const punishment = await Database.from('punishments as punishment')
      .select('*')
      .where('id', id)
      .first()

    return punishment
  }

}
