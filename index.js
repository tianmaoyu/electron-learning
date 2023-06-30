const { app, BrowserWindow, Menu } = require('electron')
const template=require('./menuTemplate') 
const path = require('path')





const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        },
        icon: path.join(__dirname, 'icon_128x128.png')
    })
    mainWindow.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    });
    console.info(template)
    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
