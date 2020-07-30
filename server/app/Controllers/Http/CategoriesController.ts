import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Category from 'App/Models/Category'

export default class CategoriesController {

  public async index() {
    return await Category.all()
  }

  public async store({ request }: HttpContextContract) {
    const name = request.input('name')
    const slug = request.input('slug')

    const category = new Category()

    category.name = name
    category.slug = slug

    const result = await category.save()

    return result.$original
  }

  public async update({ request }: HttpContextContract) {
    const id = request.input('id')
    const name = request.input('name')
    const slug = request.input('slug')

    const updated = await Category.query()
      .where('id', id)
      .update({
        name,
        slug
      })

    return updated
  }

  public async delete({ request }: HttpContextContract) {
    const id = request.input('id')

    const deleted = await Category.query()
      .where('id', id)
      .delete()

    return deleted
  }

}
