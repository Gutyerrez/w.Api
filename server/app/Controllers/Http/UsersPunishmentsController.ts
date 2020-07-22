import Database from '@ioc:Adonis/Lucid/Database'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersPunishmentsController {

  public async show({ params }: HttpContextContract) {
    const { user_id } = params

    const punishments = await Database.from('punishments as punishment')
      .select(
        '*'
      )
      .where('user_id', user_id)

    return punishments
  }

}
