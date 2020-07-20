import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class ChangelogsController {

  public async index({ request }: HttpContextContract) {
    const {
      limit,
      offset,
      title
    } = request.original()

    const changelogs = await Database.from('changelogs')
      .select('*')
      .where(
        'title',
        'like',
        `%${title}%`
      )
      .limit(limit || 0)
      .offset(offset || 0)

    return changelogs
  }

  public async show({ params }: HttpContextContract) {
    const {
      id
    } = params

    const changelog = await Database.from('changelogs')
      .select('*')
      .where(id)

    return changelog
  }

  public async store({ request }: HttpContextContract) {
    const title = request.input('title')
    const changes = request.input('changes')

    const date = new Date()

    date.setHours(0)

    const changelog = await Database.from('changelogs')
      .select('*')
      .where(title)
      .where('created_at', '>=', date)
      .first()

    if (changelog) {
      const storedChanges = [
        ...changelog.changes,
        ...changes
      ]

      await Database.from('changelogs')
        .where('id', changelog.id)
        .update({
          changes: storedChanges
        })

      return {
        id: changelog.id,
        changes: storedChanges
      }
    } else {
      const changelog = {
        title,
        changes
      }

      const generatedIds = await Database.table('changelogs')
        .insert(changelog)
        .returning('id')

      const changelog_id = Number(generatedIds[0])

      return {
        id: changelog_id,
        ...title,
        ...changes
      }
    }

  }

  public async delete({ params }: HttpContextContract) {
    const { id } = params

    const deleted = await Database.from('changelogs')
      .where(id)
      .delete()

    return {
      deleted
    }
  }

}
