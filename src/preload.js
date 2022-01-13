// src/preload.js

// import { contextBridge, ipcRenderer } from 'electron'
const {
    contextBridge,
    ipcRenderer
} = require("electron");

// Expose ipcRenderer to the client
contextBridge.exposeInMainWorld('ipcRenderer', {
  send: (channel, data) => {
    let validChannels = ['nameOfClientChannel', 'cpuToBack', 'diskToBack'] // <-- Array of all ipcRenderer Channels used in the client
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data)
    }
  },
  receive: (channel, func) => {
    let validChannels = ['nameOfElectronChannel','sendCpuUsage', 'sendMemoryUsage', 'sendDiskInfo'] // <-- Array of all ipcMain Channels used in the electron
    if (validChannels.includes(channel)) {
      // Deliberately strip event as it includes `sender`
      ipcRenderer.on(channel, (event, ...args) => func(...args))
    }
  }
})

// alert("It Worked!")
// window.ipcRenderer = ipcRenderer

// const {
//   contextBridge,
//   ipcRenderer
// } = require("electron");

// // Expose protected methods that allow the renderer process to use
// // the ipcRenderer without exposing the entire object
// contextBridge.exposeInMainWorld(
//   "api", {
//       send: (channel, data) => {
//           // whitelist channels
//           let validChannels = ["toMain"];
//           if (validChannels.includes(channel)) {
//               ipcRenderer.send(channel, data);
//           }
//       },
//       receive: (channel, func) => {
//           let validChannels = ["fromMain"];
//           if (validChannels.includes(channel)) {
//               // Deliberately strip event as it includes `sender` 
//               ipcRenderer.on(channel, (event, ...args) =>   
// func(...args));
//           }
//       }
//   }
// );

// window.ipcRenderer = ipcRenderer