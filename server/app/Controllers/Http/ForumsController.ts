import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class ForumsController {

  public async index() {
    const forums = await Database.from('forums').select()

    return forums
  }

  public async show({ params }: HttpContextContract) {
    const { id } = params

    const forum = await Database.from('forums').select('*')
      .where(id)

    return forum
  }

  public async store({ request }: HttpContextContract) {
    const category_id = request.input('category_id')
    const parent_id = request.input('parent_id')
    const name = request.input('name')
    const description = request.input('description')
    const slug = request.input('slug')

    const forum = {
      category_id: Number(category_id),
      parent_id: Number(parent_id),
      name,
      description,
      slug
    }

    const generatedIds = await Database.table('forums').insert(forum).returning('id')

    const forum_id = Number(generatedIds[0])

    return {
      id: forum_id,
      ...forum
    }
  }

  public async update({ request }: HttpContextContract) {
    const id = request.input('id')
    const category_id = request.input('category_id')
    const parent_id = request.input('parent_id')
    const name = request.input('name')
    const description = request.input('description')
    const slug = request.input('slug')

    const forum = {
      category_id: Number(category_id),
      parent_id: Number(parent_id),
      name,
      description,
      slug
    }

    const updated = await Database.from('forums').where(id)
      .update(forum)

    return {
      updated
    }
  }

  public async delete({ params  }: HttpContextContract) {
    const id = params;

    const deleted = await Database.from('forums').where(id)
      .delete()

    return {
      deleted
    }
  }

}
