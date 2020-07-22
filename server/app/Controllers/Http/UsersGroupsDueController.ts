import Database from '@ioc:Adonis/Lucid/Database'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersGroupDuesController {

  public async index({ params }: HttpContextContract) {
    const { user_id } = params

    const currentTime = new Date()

    const groupsDue = Database.from('users_groups_due')
      .select('*')
      .where('user_id', user_id)
      .where('due_at', '>', currentTime)

    return groupsDue
  }

  public async show({ params }: HttpContextContract) {
    const { user_id, server } = params

    const currentTime = new Date()

    const groupsDue = Database.from('users_groups_due')
      .select('*')
      .where('user_id', user_id)
      .where('due_at', '>', currentTime)
      .where('server', server)

    return groupsDue
  }

}
