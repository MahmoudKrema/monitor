"use strict";
//better use import
import { app, protocol, BrowserWindow, ipcMain } from "electron";
import { createProtocol } from "vue-cli-plugin-electron-builder/lib";
import installExtension, { VUEJS_DEVTOOLS } from "electron-devtools-installer";
import getHomeData from "./homeData";
import getCpuData from "./CpuData";
import getMemoryData from "./memoryData";
import getDisk from "./diskData";
import windowReadData from "./windowReadData.js";
import windowWriteData from "./windowData";

var path = require("path");
var os = require("os");
var osUtils = require("os-utils");
var nodeDiskInfo = require("node-disk-info");
var fs = require("fs");
import io from "./socket.js";
const isDevelopment = process.env.NODE_ENV !== "production";
let win;
let globalResult;
let theWidth = 800;
let theHeight = 600;
let windowPosX = 0;
let windowPosY = 0;

protocol.registerSchemesAsPrivileged([
  { scheme: "app", privileges: { secure: true, standard: true } },
]);

async function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: theWidth,
    height: theHeight,
    x: windowPosX,
    y: windowPosY,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: true,
      preload: path.join(__dirname, "../src/preload.js"),
    },
  });

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
    if (!process.env.IS_TEST) win.webContents.openDevTools();
  } else {
    createProtocol("app");
    // Load the index.html when not in development
    win.loadURL("app://./index.html");
  }
}

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS_DEVTOOLS);
    } catch (e) {
      console.error("Vue Devtools failed to install:", e.toString());
    }
  }

  // const data = fs.readFileSync("./mynewfile1.json", {
  //   encoding: "utf8",
  //   flag: "r",
  // });

  // let jsonData = JSON.parse(data);

  // theWidth = jsonData.width;
  // theHeight = jsonData.height;
  // windowPosX = jsonData.PosX;
  // windowPosY = jsonData.PosY;
  [theWidth, theHeight, windowPosX, windowPosY] = windowReadData(
    fs,
    theWidth,
    theHeight,
    windowPosX,
    windowPosY
  );

  createWindow();

  getHomeData(win, os);

  getCpuData(win, os);

  // setInterval(() => {
  //   getMemoryData(win, io);
  // }, 1000);
  getDisk(win, nodeDiskInfo);

  getMemoryData(win, os, io);

  windowWriteData(fs, win, app, theWidth, theHeight, windowPosX, windowPosY);
});

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === "win32") {
    process.on("message", (data) => {
      if (data === "graceful-exit") {
        app.quit();
      }
    });
  } else {
    process.on("SIGTERM", () => {
      app.quit();
    });
  }
}

// setTimeout(() => {
//   windowPresistData(fs, win, app, theWidth, theHeight, windowPosX, windowPosY);
// }, 1000);
// windowPresistData(fs, win, app, theWidth, theHeight, windowPosX, windowPosY);

// //presist the window position and dimensions
// const data = fs.readFileSync("./mynewfile1.json", {
//   encoding: "utf8",
//   flag: "r",
// });

// let jsonData = JSON.parse(data);

// theWidth = jsonData.width;
// theHeight = jsonData.height;
// windowPosX = jsonData.PosX;
// windowPosY = jsonData.PosY;

// let currentHeigh;
// let currentWidth;
// let positionX;
// let positionY;
// let windowBounds;
// let windowPosition;
// setTimeout(() => {
//   windowBounds = win.getSize();
//   currentWidth = windowBounds[0];
//   currentHeigh = windowBounds[1];

//   windowPosition = win.getPosition();
//   positionX = windowPosition[0];
//   positionY = windowPosition[1];

//   win.on("resized", () => {
//     console.log(win.getSize());
//     windowBounds = win.getSize();
//     currentWidth = windowBounds[0];
//     currentHeigh = windowBounds[1];
//   });

//   win.on("moved", () => {
//     console.log(win.getPosition());
//     windowPosition = win.getPosition();
//     positionX = windowPosition[0];
//     positionY = windowPosition[1];
//   });
// }, 1000);

// app.on("quit", () => {
//   fs.writeFileSync(
//     "mynewfile1.json",
//     `{
//     "width":${currentWidth.toString()},
//     "height":${currentHeigh.toString()},
//     "PosX": ${positionX.toString()},
//     "PosY": ${positionY.toString()}

//   }`,
//     function (err) {
//       if (err) throw err;
//       console.log("Saved!");
//     }
//   );
// });

io.on("connection", (socket) => {
  console.log("a user connected");
});
