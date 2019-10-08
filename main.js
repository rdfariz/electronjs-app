const {app, BrowserWindow} = require('electron')
// const app = electron.app

function createWindow () {
    // Create the window
    let win = new BrowserWindow({
        height: 768,
        width: 1024,
        minHeight: 768,
        minWidth: 1024,
        webPreferences: {
            nodeIntegration: false
        }
    })

    win.loadFile('./index.html')
}

app.on('ready', createWindow)