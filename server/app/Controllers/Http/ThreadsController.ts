import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class ThreadsController {

  public async index() {
    const threads = await Database.from('threads')
      .select('*')

    return threads
  }

  public async store({ request }: HttpContextContract) {
    const forum_id = request.input('forum_id')
    const user_id = request.input('user_id')
    const title = request.input('title')
    const body = request.input('body')
    const created_at = new Date();

    const thread = {
      forum_id: Number(forum_id),
      user_id: Number(user_id),
      title,
      created_at
    }

    const trx = await Database.transaction();

    const insertedIds = await trx.table('threads').insert(thread)
      .returning('id')

    const thread_id = Number(insertedIds[0])

    const post = {
      thread_id,
      user_id: Number(user_id),
      body,
      created_at
    }

    await trx.table('posts').insert(post)

    trx.commit()

    return {
      id: thread_id,
      ...thread,
      posts: [ post ]
    }
  }

  public async show({ params }: HttpContextContract) {
    const { id } = params;

    const thread = await Database.from('threads')
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
