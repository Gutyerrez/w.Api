import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class PostsController {

  public async index({ request }: HttpContextContract) {
    const {
      limit,
      offset,
      thread_id,
      user_id,
      parent_id
    } = request.original()

    const posts = await Database.from('posts')
      .select('*')
      .where({
        thread_id: Number(thread_id),
        user_id: Number(user_id),
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

    const post = await Database.table('posts')
      .insert({
        thread_id: Number(thread_id),
        user_id: Number(user_id),
        parent_id: Number(parent_id) || null,
        body
      })

    return post
  }

  public async update({ request }: HttpContextContract) {
    const id = request.input('id')
    const body = request.input('body')

    const updated = await Database.from('posts')
      .where(id)
      .update(body)

    return {
      updated
    }
  }

  public async delete({ params }: HttpContextContract) {
    const { id } = params

    const deleted = await Database.from('posts')
      .where(id)
      .delete()

    return {
      deleted
    }
  }

}
