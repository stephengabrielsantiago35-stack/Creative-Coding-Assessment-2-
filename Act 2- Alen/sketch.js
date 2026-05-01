let x = 200;
let y = 170;

let stars = [];

let yDir = 2;

function setup() {
  createCanvas(800, 800);
  colorMode(HSB, 360, 100, 100, 100);
  
  for (let i = 0; i < 180; i = i + 1) {
    let starX = random(width);
    let starY = random(height);
    let starSize = random(1, 4);
    stars.push(starX);
    stars.push(starY);
    stars.push(starSize);
  }
}

function draw() {
  background(0);
  
  x = x + 2;
  if (x > width + 130) {
    x = -130;
  }
  
  y = y + yDir;
  if (y > height - 120) {
    yDir = -2;
  }
  if (y < 120) {
    yDir = 2;
  }
  
  noStroke();
  fill(0, 0, 100);
  for (let i = 0; i < stars.length; i = i + 3) {
    let starX = stars[i];
    let starY = stars[i + 1];
    let starSize = stars[i + 2];
    circle(starX, starY, starSize);
  }
  
  stroke(0);
  strokeWeight(3);
  
  fill(0, 0, 70);
  ellipse(x, y + 35, 220, 65);
  
  noStroke();
  fill(200, 25, 100, 60);
  ellipse(x, y, 130, 90);
  
  fill(50, 80, 100);
  circle(x - 60, y + 35, 8);
  circle(x - 20, y + 40, 8);
  circle(x + 20, y + 40, 8);
  circle(x + 60, y + 35, 8);
  
  stroke(0);
  strokeWeight(3);
  fill(120, 80, 90);
  ellipse(x, y, 55, 65);
  
  noStroke();
  fill(frameCount % 360, 100, 100);
  ellipse(x - 12, y, 12, 18);
  ellipse(x + 12, y, 12, 18);
  
  stroke(0);
  strokeWeight(3);
  line(x - 5, y + 20, x + 5, y + 20);
}