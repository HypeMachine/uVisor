const {
    BrowserWindow,
} = require('electron');

var win = null;

const createWindow = () => {
    win = new BrowserWindow({
        enableLargerThanScreen: true,
        width: 200,
        height: 12,
        maxHeight: 12,
        x: 685,
        y: 0,
        resizable: false,
        focusable: false,
        movable: false,
        hasShadow: false,
        alwaysOnTop: true,
        skipTaskbar: true,
        frame: false,
        transparent: true,
        thickFrame: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    })

    win.setIgnoreMouseEvents(true);

    win.loadFile('./src/html/index.html');

    return win;
}


module.exports = createWindow