const {
    app
} = require('electron');
const { createWindow } = require('./forms/window');
const createTray = require('./forms/tray');

async function main() {
    console.error('Creating window');
    try {
        app.whenReady().then(createWindow).then(win => createTray(win))
    } catch (e) {
        console.error(e);
    }

}

main()