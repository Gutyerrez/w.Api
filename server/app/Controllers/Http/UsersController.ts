import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'

export default class UsersController {

  public async index({ request }: HttpContextContract) {
    const {
      limit,
      offset
    } = request.original()

    const users = await User.query()
      .limit(limit || 0)
      .offset(offset || 0)

    return users
  }

  public async store() {
    // TODO not implemented-yet
  }

  public async show({ params }: HttpContextContract) {
    const { id } = params;

    const user = await User.findBy('id', id)

    return user
  }

  public async update() {
    // TODO not implemented-yet
  }

}
