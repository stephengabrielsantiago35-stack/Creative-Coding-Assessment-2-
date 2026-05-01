// Assessment 2 Act 3: Working with Images
// Image inside shape with watercolor background

let img;
let watercolorX = [];
let watercolorY = [];
let watercolorSize = [];
let watercolorR = [];
let watercolorG = [];
let watercolorB = [];
let watercolorAlpha = [];

function preload() {
    img = loadImage("image.jpg");
}

function setup() {
    createCanvas(800, 800);
    background(250);
    
    // Initialize watercolor brush strokes for background
    for (let i = 0; i < 80; i = i + 1) {
        watercolorX[i] = random(width);
        watercolorY[i] = random(height);
        watercolorSize[i] = random(60, 200);
        watercolorR[i] = random(200, 240);
        watercolorG[i] = random(180, 220);
        watercolorB[i] = random(160, 210);
        watercolorAlpha[i] = random(8, 20);
    }
    
    noLoop();
}

function draw() {
    // Clear background
    background(250, 248, 245);
    
    // Draw watercolor background
    drawWatercolorBackground();
    
    // Draw the main image inside shape
    drawImageInShape();
    
    // Draw title and info
    drawTextInfo();
}

function drawWatercolorBackground() {
    noStroke();
    
    // Soft watercolor washes
    for (let i = 0; i < 80; i = i + 1) {
        fill(watercolorR[i], watercolorG[i], watercolorB[i], watercolorAlpha[i]);
        ellipse(watercolorX[i], watercolorY[i], watercolorSize[i], watercolorSize[i] * random(0.8, 1.2));
    }
    
    // Add some texture
    for (let i = 0; i < 30; i = i + 1) {
        fill(100, 80, 100, 5);
        ellipse(random(width), random(height), random(150, 300), random(150, 300));
    }
}

function drawImageInShape() {
    let centerX = width / 2;
    let centerY = height / 2;
    let imgSize = 500;
    
    // Draw image inside octagon shape
    if (img.width > 0 && img.height > 0) {
        // Save current drawing state
        push();
        
        // Create clipping shape (octagon)
        beginClip();
        drawOctagon(centerX, centerY, 240);
        endClip();
        
        // Draw image inside clip
        image(img, centerX - imgSize/2, centerY - imgSize/2, imgSize, imgSize);
        
        // Restore drawing state
        pop();
    } else {
        // Placeholder if image not loaded
        fill(200);
        rect(centerX - 240, centerY - 240, 480, 480);
        fill(100);
        textAlign(CENTER, CENTER);
        textSize(20);
        text("Loading image...", centerX, centerY);
    }
    
    // Draw shape outline
    noFill();
    stroke(80, 60, 70, 180);
    strokeWeight(2);
    drawOctagon(centerX, centerY, 240);
    
    stroke(140, 120, 130, 100);
    strokeWeight(1);
    drawOctagon(centerX, centerY, 245);
}

function drawOctagon(x, y, radius) {
    beginShape();
    for (let i = 0; i < 8; i = i + 1) {
        let angle = TWO_PI / 8 * i - PI / 8;
        let px = x + cos(angle) * radius;
        let py = y + sin(angle) * radius;
        vertex(px, py);
    }
    endShape(CLOSE);
}

function drawTextInfo() {
    textAlign(CENTER);
    
    // Title
    textSize(32);
    textStyle(BOLD);
    fill(40, 30, 40);
    text("IMAGE INSIDE SHAPE", width/2, 60);
    
    textSize(16);
    textStyle(NORMAL);
    fill(100, 80, 90);
    text("Octagon Clipping Mask with Watercolor Background", width/2, 95);
    
    // Technical info
    textSize(14);
    fill(120, 100, 110);
    text("technique: beginClip() • endClip()", width/2, 740);
    text("image: picsum.photos/600/600", width/2, 765);
}