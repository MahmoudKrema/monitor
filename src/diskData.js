// let os = require("os");
import { ipcMain } from "electron";

export default function (win, nodeDiskInfo) {
  //Disk

  //without waiting some errors appear, that's why i need setTimeout
  function getDiskData() {
    nodeDiskInfo
      .getDiskInfo()
      .then((disks) => {
        win.webContents.send("sendDiskInfo", disks);
        // console.log(disks);
      })
      .catch((reason) => {
        console.error(reason);
      });
  }

  ipcMain.on("diskToBack", (event) => {
    getDiskData();
  });
}
