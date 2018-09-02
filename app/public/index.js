const {app, BrowserWindow, Menu} = require('electron');
const path = require('path');

function createWindow() {
  console.log(`Initialising window. Environment: ${process.env.NODE_ENV}`);
    win = new BrowserWindow({height: 600, width: 800});

  if(process.env.NODE_ENV !== 'development') {
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
  }

  if(process.env.NODE_ENV === 'development') {
    const {
      default: installExtension,
      REACT_DEVELOPER_TOOLS
    } = require('electron-devtools-installer');

    require('devtron').install();

    installExtension(REACT_DEVELOPER_TOOLS).then(
      name => console.log(`Added extension: ${name}`)
    ).catch(
      err => console.log(`Error: ${err}`)
    );

    win.loadURL('http://localhost:9001');
  } else {
    const indexPath = path.join(__dirname, 'index.html');
    win.loadFile(indexPath);
  }
}

app.on('window-all-closed', app.quit);

app.on('ready', createWindow);
