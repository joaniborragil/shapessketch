function setup() {
  createCanvas(600, 600);
}

function draw() {
  background("#B7B09C");

  
  myshape(200, 200, 200, 200);

  
  myMovingRoof(200, 200, 200, mouseY);
}

// House drawing function
function myshape(x, y, w, h) {
  // House base
  fill("#C17E60"); 
  rect(x, y, w, h);

  // Door
  fill("#D3AE6F"); 
  rect(x + w / 3, y + h / 2, w / 3, h / 2);

  // Windows
  fill("#44C3D4");
  rect(x + w / 8, y + h / 4, w / 4, h / 4); // Left window
  rect(x + 5 * w / 8, y + h / 4, w / 4, h / 4); // Right window

  // Chimney
  fill("#000000"); 
  rect(x + 3 * w / 4, y - h / 4, w / 8, h / 4);
}

// Moving roof function
function myMovingRoof(x, y, w, h) {
  fill("#3D68B2"); // Indigo
  let roofHeight = h

  
  triangle( x,y, x + w / 2, y - roofHeight, x + w,y );
}
