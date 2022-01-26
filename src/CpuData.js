// let os = require("os");
import { ipcMain } from "electron";

export default function (win) {
  //CPU Usage
  var cpuStats = require("cpu-stats");

  // the first argument is how long to sample for in ms.
  // longer is more accurate but, you know, longer.
  // if omitted, defaults to one second.
  function usageOfcpu() {
    cpuStats(2000, function (error, result) {
      if (error) return console.error("Oh noes!", error);
      win.webContents.send("sendCpuUsage", result);
      // globalResult = result;
    });
  }
  ipcMain.on("cpuToBack", (event) => {
    usageOfcpu();
  });
}
