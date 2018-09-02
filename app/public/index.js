const fs = require('fs');
const path = require('path');

const envDevPath = path.resolve(__dirname, '../../.env.dev');
if(fs.existsSync(envDevPath)) {
  require('dotenv').config({path: envDevPath});
  console.log('Loaded development env file.');
} else {
  console.log('No env file loaded.');
}

const {app, BrowserWindow} = require('electron');
const {
  default: installExtension,
  REACT_DEVELOPER_TOOLS
} = require('electron-devtools-installer');


function createWindow() {
  console.log(`Initialising window. Environment: ${process.env.NODE_ENV}`);

  require('devtron').install();

  installExtension(REACT_DEVELOPER_TOOLS).then(
    name => console.log(`Added extension: ${name}`)
  ).catch(
    err => console.log(`Error: ${err}`)
  );

  win = new BrowserWindow({height: 600, width: 800});
  if(process.env.NODE_ENV === 'development') {
    win.loadURL('http://localhost:9001');
  } else {
    win.loadFile('./index.html');
  }
}

app.on('ready', createWindow);
