export const ADD_NEW_MENU = [
  {
    label: 'Add Contact',
    icon: 'mdi-account-plus',
    to: { name: 'index'},
  },
  {
    label: 'Add Task',
    icon: 'mdi-checkbox-marked-circle-plus-outline',
    to: { name: 'index'},
  },
  {
    label: 'Add Project',
    icon: 'mdi-folder-plus-outline',
    to: { name: 'index'},
  },
  {
    label: 'Add Document',
    icon: 'mdi-file-plus',
    submenu: [
      {
        label: 'Add Quote',
        icon: 'mdi-file-plus',
        to: { name: 'index'},
      },
      {
        label: 'Add Invoice',
        icon: 'mdi-folder-plus',
        to: { name: 'index'},
      },
      {
        label: 'Add Reciept',
        icon: 'mdi-folder-plus',
       to: { name: 'index'},
      },
    ]
  },
];