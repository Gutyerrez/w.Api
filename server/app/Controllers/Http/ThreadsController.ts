import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class ThreadsController {

  public async index() {
    const threads = await Database.from('forum_threads')
      .select('*')

    return threads
  }

  public async store() {
    // TODO not implemented-yet
  }

  public async show(ctx: HttpContextContract) {
    const { id } = ctx.params;

    const thread = await Database.from('forum_threads')
      .select('*')
      .where('id', id)
      .first()

    return thread
  }

  public async update() {
    // TODO not implemented-yet
  }

  public async delete() {
    // TODO not implemented-yet
  }

}
