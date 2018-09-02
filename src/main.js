const {app, BrowserWindow} = require('electron');
const {
  default: installExtension,
  REACT_DEVELOPER_TOOLS
} = require('electron-devtools-installer');


function createWindow() {
  console.log('Initialising window.');

  require('devtron').install();

  installExtension(REACT_DEVELOPER_TOOLS).then(
    name => console.log(`Added extension: ${name}`)
  ).catch(
    err => console.log(`Error: ${err}`)
  );

  win = new BrowserWindow({height: 600, width: 800});
  win.loadURL('http://localhost:9001');
}

app.on('ready', createWindow);
