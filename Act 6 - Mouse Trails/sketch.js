let trail = [];

function setup() {
  createCanvas(600, 400);
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  background(0, 10); // Changed from 50 to 10 for slower fade
  trail.push(createVector(mouseX, mouseY));
  if (trail.length > 60) trail.shift(); // Increased from 30 to 60 for longer trail
  
  for (let i = 0; i < trail.length; i++) {
    let hue = (trail[i].x / width) * 360;
    fill(hue, 100, 100, 1 - (i / trail.length) * 0.5); // Adjusted opacity fade
    noStroke();
    circle(trail[i].x, trail[i].y, 20 - i * 0.3); // Adjusted size shrink rate
  }
}