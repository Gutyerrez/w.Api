import Database from '@ioc:Adonis/Lucid/Database'

export default class StaffController {

  public async index() {
    const currentTime = new Date()

    const staffers = await Database.from('groups as group')
      .select(
        'user.name as user_name',
        'group.name as group_name',
        'prefix'
      )
      .where('group.priority', '!=', 0)
      .orderBy('group.priority', 'desc')
      .join(
        'users_groups_due as group_due',
        'group.name',
        '=',
        'group_due.group'
      )
      .where('group_due.due_at', '>', currentTime)
      .join(
        'users as user',
        'group_due.user_id',
        '=',
        'user.id'
      )

    return staffers.filter((item, pos) => {
      const searchItem = staffers.find(item1 => item1.user_name === item.user_name)

      return staffers.indexOf(searchItem) === pos
    })
  }

}
