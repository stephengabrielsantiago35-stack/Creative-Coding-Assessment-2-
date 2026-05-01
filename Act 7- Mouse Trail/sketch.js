let size = 50;

function setup() {
  createCanvas(500, 500);
  background(200);
}

function draw() {
  if (mouseIsPressed) {
    fill(mouseX % 255, mouseY % 255, 150);
    noStroke();
    circle(mouseX, mouseY, size);
  }
  
  fill(0);
  noStroke();
  text("Click and drag to paint", 20, 30);
  text("Press 'c' to clear | Press '+'/'-' to change brush size", 20, 50);
  text("Brush size: " + size, 20, 70);
}

function keyPressed() {
  if (key === 'c' || key === 'C') {
    background(200);
  }
  if (key === '+') {
    size = min(100, size + 5);
  }
  if (key === '-') {
    size = max(5, size - 5);
  }
}