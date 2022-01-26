// let os = require("os");
import { ipcMain } from "electron";

export default function (win, os) {
  //basic device information:
  let homeData = {
    cpuModel: os.cpus()[0].model, // CPU model
    mbTotal: os.totalmem() * 0.000000001, // total ram in GB
    SystemName: os.type(), //operative system name
    platformName: os.platform(), //operative system platform name
    deviceName: os.hostname(), //computer name (desktop name)
    username: os.userInfo().username, //username
  };

  //Home
  ipcMain.on("nameOfClientChannel", (event) => {
    win.webContents.send("nameOfElectronChannel", homeData);
  });
}
