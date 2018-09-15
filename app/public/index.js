const {app, BrowserWindow} = require('electron');
const path = require('path');

function createWindow() {
  console.log(`Initialising window. Environment: ${process.env.NODE_ENV}`);
  const win = new BrowserWindow({
    height: 600,
    width: 800,
    show: false
  });
  win.once('ready-to-show', win.show);

  if(process.env.NODE_ENV === 'development') {
    const {
      default: installExtension,
      REACT_DEVELOPER_TOOLS,
      REDUX_DEVTOOLS
    } = require('electron-devtools-installer');

    require('devtron').install();

    installExtension(REACT_DEVELOPER_TOOLS).then(
      name => console.log(`Added extension: ${name}`)
    ).catch(
      err => console.log(`Error: ${err}`)
    );

    installExtension(REDUX_DEVTOOLS).then(
      name => console.log(`Added extension: ${name}`)
    ).catch(
      err => console.log(`Error: ${err}`)
    );

    win.loadURL('http://localhost:9001');
  } else {
    require('./menu');
    const indexPath = path.join(__dirname, 'index.html');
    win.loadFile(indexPath);
  }
}

app.on('window-all-closed', app.quit);

app.on('ready', createWindow);
