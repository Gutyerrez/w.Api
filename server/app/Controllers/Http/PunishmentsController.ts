import Database from '@ioc:Adonis/Lucid/Database'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PunishmentsController {

  public async index() {
    const Punishments = await Database.from('punishments as punishment')
      .select(
        'punishment.user_id as user',
        'punishment.staffer_id as staffer',
        'punishment.unban_staffer_id as unban_staffer',
        '*'
      )

    return Punishments
  }

}
