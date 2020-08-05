import { Groups } from 'App/Extensions/Permission/Group'

import Group from 'App/Models/Group'

export default class StaffController {

  public async index() {
    const users = await Group.query()
      .select('name', 'display_name', 'color')
      .where('priority', '>=', Groups.HELPER.priority)
      .preload('users')

    return users
  }

}
