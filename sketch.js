let canvasSize = 600;
let houseWidth = 200;
let houseHeight = 200;
let doorWidth = 1 / 3;
let doorHeight = 1 / 2;
let windowWidth = 1 / 4;
let windowHeight = 1 / 4;
let chimneyWidth = 1 / 8;
let chimneyHeight = 1 / 4;
let backgroundColor = "#B7B09C";
let houseColor = "#C17E60";
let doorColor = "#D3AE6F";
let windowColor = "#44C3D4";
let chimneyColor = "#000000";
let roofColor = "#3D68B2";

function setup() {
  createCanvas(canvasSize, canvasSize);
}

function draw() {
  background(backgroundColor);
  myshape(200, 200, houseWidth, houseHeight);
  myMovingRoof(200, 200, houseWidth, mouseY);
}
function myshape(x, y, w, h) {
  // House base
  fill(houseColor); 
  rect(x, y, w, h);

  fill(doorColor); 
  rect(x + w * (1 - doorWidth) / 2, y + h / 2, w * doorWidth, h * doorHeight); // Door

  
  fill(windowColor);
  rect(x + w / 8, y + h / 4, w * windowWidth, h * windowHeight); // Left window
  rect(x + 5 * w / 8, y + h / 4, w * windowWidth, h * windowHeight); // Right window

  
  fill(chimneyColor); 
  rect(x + 3 * w / 4, y - h * chimneyHeight, w * chimneyWidth, h * chimneyHeight);
}
function myMovingRoof(x, y, w, h) {
  fill(roofColor);
  let roofHeight = h;
  
  triangle(x, y, x + w / 2, y - roofHeight, x + w, y);
}
