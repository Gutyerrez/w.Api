import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

// import Changelog from 'App/Models/Changelog'

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
        `%${title || ''}%`
      )
      .limit(limit || 0)
      .offset(offset || 0)

    return changelogs
  }

  public async store({ request }: HttpContextContract) {
    const title = request.input('title')
    const changes = request.input('changes')

    const date = new Date()

    date.setHours(0)
    date.setSeconds(0)
    date.setMilliseconds(0)

    const changelog: {
      id: string
      changes: string
    } = await Database.from('changelogs')
      .select('*')
      .where('title', title)
      .where('created_at', '>=', date)
      .first()

    if (changelog) {
      const newChanges = JSON.parse(changelog.changes)

      newChanges.push(changes)

      await Database.from('changelogs')
        .where('id', changelog.id)
        .update({
          changes: JSON.stringify(newChanges)
        })

      return {
        id: changelog.id,
        title,
        changes: newChanges
      }
    } else {
      const changelog = {
        title,
        changes: JSON.stringify([
          changes
        ])
      }

      const generatedIds = await Database.table('changelogs')
        .insert(changelog)
        .returning('id')

      const changelog_id = Number(generatedIds[0])

      return {
        id: changelog_id,
        ...changelog
      }
    }
  }

  public async delete({ params }: HttpContextContract) {
    const { id } = params

    const deleted = await Database.from('changelogs')
      .where('id', id)
      .delete()

    return {
      deleted
    }
  }

}
