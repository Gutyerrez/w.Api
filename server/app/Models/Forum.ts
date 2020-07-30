import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Forum extends BaseModel {

  @column({ isPrimary: true })
  public id: number

  @column({ columnName: 'category_id' })
  public categoryId: number

  @column({ columnName: 'parent_id' })
  public parentId?: number

  @column()
  public name: string

  @column()
  public description?: string

  @column()
  public slug?: string

  @column({ columnName: 'template_thread_id' })
  public templateThreadId?: number

  @column({ columnName: 'restrict_read' })
  public restrictRead?: string

  @column({ columnName: 'restricT_write' })
  public restrictWrite: string

  @column({ columnName: 'threads_restrict_read' })
  public threadsRestrictRead?: string

  @column({ columnName: 'threads_restrict_write' })
  public threadsRestrictWrite: string

  @column({ columnName: 'threads_restrict_move' })
  public threadsRestrictMove: string

  @column({ columnName: 'threads_restrict_close' })
  public threadsRestrictClose: string

  @column({ columnName: 'threads_fallback_forum_id' })
  public threadsFallbackForumId?: number

}
