// let os = require("os");

export default function (
  fs,
  win,
  app,
  theWidth,
  theHeight,
  windowPosX,
  windowPosY
) {
  //presist the window position and dimensions
  // const data = fs.readFileSync("./mynewfile1.json", {
  //     encoding: "utf8",
  //     flag: "r",
  // });

  // let jsonData = JSON.parse(data);

  // theWidth = jsonData.width;
  // theHeight = jsonData.height;
  // windowPosX = jsonData.PosX;
  // windowPosY = jsonData.PosY;

  let currentHeigh;
  let currentWidth;
  let positionX;
  let positionY;
  let windowBounds;
  let windowPosition;

  windowBounds = win.getSize();
  currentWidth = windowBounds[0];
  currentHeigh = windowBounds[1];

  windowPosition = win.getPosition();
  positionX = windowPosition[0];
  positionY = windowPosition[1];

  win.on("resized", () => {
    console.log(win.getSize());
    windowBounds = win.getSize();
    currentWidth = windowBounds[0];
    currentHeigh = windowBounds[1];
  });

  win.on("moved", () => {
    console.log(win.getPosition());
    windowPosition = win.getPosition();
    positionX = windowPosition[0];
    positionY = windowPosition[1];
  });

  app.on("quit", () => {
    fs.writeFileSync(
      "mynewfile1.json",
      `{
        "width":${currentWidth.toString()}, 
        "height":${currentHeigh.toString()},
        "PosX": ${positionX.toString()},
        "PosY": ${positionY.toString()}
    
    
        }`,
      function (err) {
        if (err) throw err;
        console.log("Saved!");
      }
    );
  });
}
