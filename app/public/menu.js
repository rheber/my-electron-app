const {Menu} = require('electron');

/* Menu to use in production. */
const menuTemplate = [
  {
    label: 'View',
    submenu: [
      {
        role: 'toggledevtools'
      }
    ],
  },
  {
    role: 'window',
    submenu: [
      {
        role: 'close'
      }
    ]
  }
];
Menu.setApplicationMenu(Menu.buildFromTemplate(menuTemplate));

