// Simple car using basic shapes (static)
function setup() {
    createCanvas(600, 400);
}

function draw() {
    // Sky background
    background(135, 206, 235);
    
    // Road
    fill(80, 80, 80);
    noStroke();
    rect(0, 300, width, 100);
    
    // Road lines
    stroke(255, 255, 0);
    strokeWeight(3);
    for (let i = 0; i < width; i += 60) {
        line(i, 350, i + 30, 350);
    }
    
    // Draw the car at a fixed position
    drawCar(250, 280);
}

function drawCar(x, y) {
    push(); // Save current drawing settings
    
    // Car body (main rectangle)
    fill(255, 0, 0); // Red body
    stroke(0);
    strokeWeight(2);
    rect(x, y, 120, 40, 10); // rounded corners
    
    // Car roof
    fill(200, 0, 0); // Darker red
    rect(x + 30, y - 30, 60, 30, 8);
    
    // Windows
    fill(173, 216, 230); // Light blue
    rect(x + 35, y - 25, 20, 20, 5); // Left window
    rect(x + 65, y - 25, 20, 20, 5); // Right window
    
    // Wheels
    fill(0); // Black
    ellipse(x + 25, y + 40, 30, 30); // Left wheel
    ellipse(x + 95, y + 40, 30, 30); // Right wheel
    
    // Wheel rims (silver)
    fill(192, 192, 192);
    ellipse(x + 25, y + 40, 15, 15);
    ellipse(x + 95, y + 40, 15, 15);
    
    // Headlights
    fill(255, 255, 0); // Yellow
    ellipse(x + 10, y + 10, 10, 10); // Left headlight
    ellipse(x + 110, y + 10, 10, 10); // Right headlight
    
    pop(); // Restore drawing settings
}