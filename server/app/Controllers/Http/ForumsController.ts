import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Forum from 'App/Models/Forum'

export default class ForumsController {

  public async index() {
    return await Forum.query()
  }

  public async show({ params }: HttpContextContract) {
    const { id } = params

    const forum = await Forum.query()
      .where(id)

    return forum
  }

  public async store({ request }: HttpContextContract) {
    const category_id = request.input('category_id')
    const parent_id = request.input('parent_id')
    const name = request.input('name')
    const description = request.input('description')
    const slug = request.input('slug')

    const forum = await Forum.create({
      categoryId: Number(category_id),
      parentId: Number(parent_id),
      name,
      description,
      slug
    })

    return forum.$original
  }

  public async update({ request }: HttpContextContract) {
    const id = request.input('id')
    const category_id = request.input('category_id')
    const parent_id = request.input('parent_id')
    const name = request.input('name')
    const description = request.input('description')
    const slug = request.input('slug')

    const updated = await Forum.query()
      .where('id', id)
      .update({
        categoryId: Number(category_id),
        parentId: Number(parent_id),
        name,
        description,
        slug
      })

    return updated
  }

  public async delete({ params  }: HttpContextContract) {
    const id = params;

    const deleted = await Forum.query()
      .where('id', id)
      .delete()

    return deleted
  }

}
