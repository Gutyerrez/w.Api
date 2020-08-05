import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import UserGroupDue from 'App/Models/UserGroupDue'

export default class UsersGroupDuesController {

  public async index({ params }: HttpContextContract) {
    const { user_id } = params

    const currentTime = new Date()

    const groupsDue = await UserGroupDue.query()
      .where('user_id', user_id)
      .where('due_at', '>', currentTime)

    return groupsDue
  }

  public async show({ params }: HttpContextContract) {
    const { user_id, server } = params

    const currentTime = new Date()

    const groupsDue = await UserGroupDue.query()
      .where('user_id', user_id)
      .where('due_at', '>', currentTime)
      .where('server', server)

    return groupsDue
  }

}
