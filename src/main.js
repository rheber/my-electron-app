const {app, BrowserWindow} = require('electron');

function createWindow() {
  console.log('Initialising window.');
  win = new BrowserWindow({height: 600, width: 800});
  win.loadURL('http://localhost:9001');
}

app.on('ready', createWindow);
