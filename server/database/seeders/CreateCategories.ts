import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Database from '@ioc:Adonis/Lucid/Database'

export default class CreateCategorySeeder extends BaseSeeder {
  public async run () {
    await Database.table('categories').insert([
      { name: 'Hyren' },
      { name: 'Support' },
      { name: 'Community' }
    ])
  }
}
