import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Database from '@ioc:Adonis/Lucid/Database'

import { Groups } from '../../app/Extensions/Permission/Group'

export default class CreateGroupSeeder extends BaseSeeder {
  public async run () {
    await Database.table('groups').insert([
      Groups.MASTER,
      Groups.MANAGER,
      Groups.ADMINISTRATOR,
      Groups.MODERATOR,
      Groups.HELPER,
      Groups.VIP_PLUS,
      Groups.VIP,
      Groups.DEFAULT,
    ])
  }
}
