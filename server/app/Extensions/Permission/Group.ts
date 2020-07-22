export const Groups = {
  MASTER: {
    name: 'MASTER',
    display_name: 'Master',
    prefix: '[Master] ',
    color: '#FFAA00',
    priority: 7
  },
  MANAGER: {
    name: 'MANAGER',
    display_name: 'Manager',
    prefix: '[Master] ',
    color: '#AA0000',
    priority: 6
  },
  ADMINISTRATOR: {
    name: 'ADMINISTRATOR',
    display_name: 'Administrator',
    prefix: '[Admin] ',
    color: '#FF5555',
    priority: 5
  },
  MODERATOR: {
    name: 'MODERATOR',
    display_name: 'Moderator',
    prefix: '[Moderator] ',
    color: '#00AA00',
    priority: 4
  },
  HELPER: {
    name: 'HELPER',
    display_name: 'Helper',
    prefix: '[Helper] ',
    color: '#55FF55',
    priority: 3
  },
  VIP_PLUS: {
    name: 'VIP_PLUS',
    display_name: 'VIP+',
    prefix: '[VIP+] ',
    color: '#FFAA00',
    priority: 2
  },
  VIP: {
    name: 'VIP',
    display_name: 'VIP',
    prefix: '[VIP] ',
    color: '#FFAA00',
    priority: 1
  },
  DEFAULT: {
    name: 'DEFAULT',
    display_name: 'Membro',
    prefix: '',
    color: '#AAAAAA',
    priority: 0
  },
}

const Group = {
    MASTER: Groups.MASTER.name,
    MANAGER: Groups.MANAGER.name,
    ADMINISTRATOR: Groups.ADMINISTRATOR.name,
    MODERATOR: Groups.MODERATOR.name,
    HELPER: Groups.HELPER.name,
    VIP_PLUS: Groups.VIP_PLUS.name,
    VIP: Groups.VIP.name,
    DEFAULT: Groups.DEFAULT.name
}

export default Group;
