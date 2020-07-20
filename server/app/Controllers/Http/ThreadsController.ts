import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class ThreadsController {

  public async index({ request }: HttpContextContract) {
    const {
      limit,
      offset,
      closed,
      forum_id,
      restrict_read
    } = request.original()

    const threads = await Database.from('threads')
      .select('*')
      .where({
        forum_id: Number(forum_id),
        closed: closed || false,
        restrict_read: restrict_read || null
      })
      .limit(limit || 0)
      .offset(offset || 0)

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

    const trx = await Database.transaction()

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

  public async update({ request }: HttpContextContract) {
    const id = request.input('id')
    const forum_id = request.input('forum_id')
    const promoted = request.input('promoted')
    const sticky = request.input('sticky')
    const closed = request.input('closed')

    const thread = {
      forum_id: Number(forum_id),
      promoted,
      sticky,
      closed
    }

    const updated = await Database.from('threads').where(id)
      .update(thread)

    return {
      updated
    }
  }

  public async delete({ params }: HttpContextContract) {
    const { id } = params;

    const deleted = await Database.from('threads').where({ id })
      .delete()

    return {
      deleted
    }
  }

}
