import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Database from '@ioc:Adonis/Lucid/Database'

import Thread from 'App/Models/Thread'
import Post from 'App/Models/Post'

export default class ThreadsController {

  public async index({ request }: HttpContextContract) {
    const {
      limit,
      offset,
      closed,
      forum_id,
      restrict_read
    } = request.original()

    const threads = await Thread.query()
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

    const thread = await Database.transaction(async (trx) => {
      const thread = await Thread.create({
        forumId: Number(forum_id),
        userId: user_id,
        title: title,
      }, {
        client: trx
      })

      const post = await Post.create({
        threadId: thread.id,
        userId: user_id,
        body: body
      }, {
        client: trx
      })

      return {
        id: thread.id,
        forum_id: thread.forumId,
        user_id: thread.userId,
        title: thread.title,
        posts: [ { body: post.body } ]
      }
    })

    return thread
  }

  public async show({ params }: HttpContextContract) {
    const { id } = params;

    const thread = await Thread.query()
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

    const updated = await Thread.query()
      .where('id', id)
      .update({
        forum_id: Number(forum_id),
        promoted: promoted,
        sticky: sticky,
        closed: closed
      })

    return updated
  }

  public async delete({ params }: HttpContextContract) {
    const { id } = params;

    const deleted = await Thread.query()
      .where('id', id)
      .delete()

    return deleted
  }

}
