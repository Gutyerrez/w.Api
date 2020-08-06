import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import UserGroupDue from 'App/Models/UserGroupDue'

export default class UsersGroupDuesController {

  public async index({ params }: HttpContextContract) {
    const { user_id } = params

    const groupsDue = await UserGroupDue.query()
      .where('user_id', user_id)
      .whereRaw('due_at > CURRENT_TIME()')

    return groupsDue
  }

  public async show({ params }: HttpContextContract) {
    const { user_id, server } = params

    const groupsDue = await UserGroupDue.query()
      .where('user_id', user_id)
      .whereRaw('due_at > CURRENT_TIME()')
      .where('server', server)

    return groupsDue
  }

}
