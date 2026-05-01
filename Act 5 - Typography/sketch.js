function setup() {
  createCanvas(400, 200);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);
  
  // Simple text with glow-like fill
  fill(100, 150, 255);
  textSize(32);
  text("GLOW", width/2, height/2);
  
  // Subtle shadow/outline effect
  fill(255);
  textSize(30);
  text("GLOW", width/2, height/2);
}