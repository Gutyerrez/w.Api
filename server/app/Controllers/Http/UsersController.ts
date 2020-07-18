import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class UsersController {

  public async index() {
    const users = Database.from('users')
      .select('*')

    return users
  }

  public async show(ctx: HttpContextContract) {
    const { id } = ctx.params;

    console.log(id);

    const user = Database.from('users')
      .select('*')
      .where('id', id)
      .first();

    return user;
  }

}
