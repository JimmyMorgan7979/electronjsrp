const {app, BrowserWindow} = require('electron');
const ipc = require('electron').ipcMain;
const url = require('url');
const path = require('path');


let win

function createWindow() {
   win = new BrowserWindow({width: 800, height: 600})
   win.loadURL(url.format ({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true,
      webPreferences: {
          nodeIntergration: true
      }
   }))
}

app.on('ready', createWindow)

//  THIS IS THE RECEIVER THAT WILL LISTEN FOR THE CHANNEL 'getCount' to be triggered, then will perform the function 

ipc.on('getCount', (event, args) => {
    console.log(args);
    

    //This is the emitter that will send a message back to the div LIKE INFORMATION FROM A DATABASE
    event.sender.send('countreply', `The console received the number ${args}`);
   });