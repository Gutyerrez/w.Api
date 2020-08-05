import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Post from 'App/Models/Post'

export default class PostsController {

  public async index({ request }: HttpContextContract) {
    const {
      limit,
      offset,
      thread_id,
      user_id,
      parent_id
    } = request.original()

    const posts = await Post.query()
      .where({
        thread_id: Number(thread_id),
        user_id: user_id,
        parent_id: Number(parent_id) || null
      })
      .limit(limit || 0)
      .offset(offset || 0)

    return posts
  }

  public async store({ request }: HttpContextContract) {
    const thread_id = request.input('thread_id')
    const user_id = request.input('user_id')
    const parent_id = request.input('parent_id')
    const body = request.input('body')

    const post = await Post.create({
      threadId: Number(thread_id),
      userId: user_id,
      parentId: Number(parent_id) || undefined,
      body: body
    })

    return post
  }

  public async update({ request }: HttpContextContract) {
    const id = request.input('id')
    const body = request.input('body')

    const updated = await Post.query()
      .where('id', id)
      .update(body)

    return updated
  }

  public async delete({ params }: HttpContextContract) {
    const { id } = params

    const deleted = await Post.query()
      .where('id', id)
      .delete()

    return deleted
  }

}
