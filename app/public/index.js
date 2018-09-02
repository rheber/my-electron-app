const {app, BrowserWindow} = require('electron');

function createWindow() {
  console.log(`Initialising window. Environment: ${process.env.NODE_ENV}`);

  win = new BrowserWindow({height: 600, width: 800});
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
    win.loadFile('./index.html');
  }
}

app.on('window-all-closed', app.quit);

app.on('ready', createWindow);
