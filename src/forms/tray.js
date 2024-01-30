const {
    app,
    Tray,
    Menu,
} = require('electron');
const path = require('path');

let tray = null;

const createTray = (win) => {
    tray = new Tray(path.join(__dirname, '../images/uV.png'));
    const contextMenu = Menu.buildFromTemplate([
        {
            label: 'Movable',
            type: 'checkbox',
            click() {
                if (!win.isMovable()) {
                    win.setIgnoreMouseEvents(false);
                    win.setMovable(true);
                } else {
                    win.setMovable(false);
                    win.setIgnoreMouseEvents(true);
                }
             }
        },
        {
            label: 'Hide',
            type: 'checkbox',
            click() {win.isVisible() ? win.hide() : win.show() }
        },
        {
            label: 'Quit',
            click() { app.quit(); }
        },
    ])

    tray.setContextMenu(contextMenu);
}


module.exports = { createTray };