// let os = require("os");
import { ipcMain } from "electron";

export default function (win, os, io) {
  //Memory Usage

  let memoryData;
  let memoryInfo;
  let memoryUsage;
  let totalMemory = os.totalmem();
  setInterval(() => {
    memoryInfo = process.memoryUsage();
    memoryUsage = ((totalMemory - os.freemem()) / totalMemory) * 100;
    memoryData = {
      memoryInfo: memoryInfo,
      memoryUsage: memoryUsage,
    };
    win.webContents.send("sendMemoryUsage", memoryData);
    //send data to server (socket.js)
    io.emit("sending data", Math.round(memoryUsage));
  }, 1000);
}
