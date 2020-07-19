import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class CategoriesController {

  public async index() {
    const categories = await Database.from('categories').select('*')

    return categories
  }

  public async store({ request }: HttpContextContract) {
    const name = request.input('name')
    const slug = request.input('slug')

    const category = {
      name,
      slug
    }

    const generatedIds = await Database.table('categories')
      .insert(category).returning('id')

    const category_id = Number(generatedIds[0])

    return {
      id: category_id,
      ...category
    }
  }

  public async update({ request }: HttpContextContract) {
    const id = request.input('id')
    const name = request.input('name')
    const slug = request.input('slug')

    const category = {
      name,
      slug
    }

    const updated = await Database.from('categories').where(id)
      .update(category)

    return {
      updated
    }
  }

  public async delete({ request }: HttpContextContract) {
    const id = request.input('id')

    const deleted = await Database.from('categories').where(id)
      .delete()

    return {
      deleted
    }
  }

}
