import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Changelog from 'App/Models/Changelog'

export default class ChangelogsController {

  public async index({ request }: HttpContextContract) {
    const {
      limit,
      offset,
      title
    } = request.original()

    const changelogs = await Changelog.query()
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

    const changelog = await Changelog.query()
      .where('title', title)
      .whereRaw('created_at >= CURRENT_DATE')
      .first()

    if (changelog) {
      const newChanges = JSON.parse(changelog.changes)

      newChanges.push(changes)

      await Changelog.query()
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
      const changelog = await Changelog.create({
        title,
        changes: JSON.stringify([
          changes
        ])
      })

      return changelog.$original
    }
  }

  public async delete({ params }: HttpContextContract) {
    const { id } = params

    const deleted = await Changelog.query()
      .where('id', id)
      .delete()

    return deleted
  }

}
