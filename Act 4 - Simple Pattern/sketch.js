function setup() {
  createCanvas(500, 500);
  noLoop();
}

function draw() {
  background(255);
  
  let cellW = 50;
  let cellH = 50;
  
  for (let x = 0; x < width; x = x + cellW) {
    for (let y = 0; y < height; y = y + cellH) {
      let r = random(0, 255);
      let g = random(100, 200);
      let b = random(150, 255);
      
      fill(r, g, b);
      
      let randomValue = random();
      
      if (randomValue > 0.5) {
        let centerX = x + cellW / 2;
        let centerY = y + cellH / 2;
        let circleSize = cellW * 0.6;
        circle(centerX, centerY, circleSize);
      } else {
        let rectX = x + 5;
        let rectY = y + 5;
        let rectW = cellW - 10;
        let rectH = cellH - 10;
        rect(rectX, rectY, rectW, rectH);
      }
    }
  }
}