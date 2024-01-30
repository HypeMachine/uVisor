const {
    app
} = require('electron');

const { createWindow } = require('./forms/window');
const { createTray } = require('./forms/tray');

async function main() {
    try {
        app.whenReady().then(createWindow).then(win => createTray(win))
    } catch (e) {
        console.error(e);
        app.quit();
    }

}

main()