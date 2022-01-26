// let os = require("os");

export default function (fs, theWidth, theHeight, windowPosX, windowPosY) {
  const data = fs.readFileSync("./mynewfile1.json", {
    encoding: "utf8",
    flag: "r",
  });

  let jsonData = JSON.parse(data);

  theWidth = jsonData.width;
  theHeight = jsonData.height;
  windowPosX = jsonData.PosX;
  windowPosY = jsonData.PosY;

  return [theWidth, theHeight, windowPosX, windowPosY];
}
