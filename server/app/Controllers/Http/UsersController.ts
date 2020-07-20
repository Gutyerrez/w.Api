import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class UsersController {

  public async index({ request }: HttpContextContract) {
    const {
      limit,
      offset
    } = request.original()

    const users = await Database.from('users')
      .select('*')
      .limit(limit || 0)
      .offset(offset || 0)

    return users
  }

  public async store() {
    // TODO not implemented-yet
  }

  public async show({ params }: HttpContextContract) {
    const { id } = params;

    console.log(id);

    const user = await Database.from('users')
      .select('*')
      .where(id)
      .first();

    return user;
  }

  public async update() {
    // TODO not implemented-yet
  }

}
