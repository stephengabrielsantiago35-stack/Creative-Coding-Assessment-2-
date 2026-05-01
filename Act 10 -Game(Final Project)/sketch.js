/*
  Move mouse, click to shoot, avoid red squares
*/

let gameState = "title"; // title, playing, gameOver, win
let score = 0;
let health = 100;

let playerX = 400;
let lasers = [];
let enemies = [];
let powerups = [];

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(0);
  
  if (gameState === "title") {
    drawTitle();
  } 
  else if (gameState === "playing") {
    updateGame();
    drawGame();
  }
  else if (gameState === "win") {
    drawWin();
  }
  else if (gameState === "gameOver") {
    drawGameOver();
  }
}

function drawTitle() {
  fill(255);
  textSize(32);
  text("SPACE DEFENDER", width/2, height/2 - 50);
  textSize(16);
  text("Move: MOUSE", width/2, height/2 - 10);
  text("Shoot: CLICK", width/2, height/2 + 10);
  text("Collect BLUE squares to restore health", width/2, height/2 + 30);
  fill(0, 255, 0);
  textSize(20);
  text("PRESS SPACE", width/2, height/2 + 80);
}

function drawWin() {
  fill(255, 255, 0);
  textSize(40);
  text("YOU WIN!", width/2, height/2 - 30);
  fill(255);
  textSize(20);
  text("Score: " + score, width/2, height/2 + 20);
  text("Press R to play again", width/2, height/2 + 80);
}

function drawGameOver() {
  fill(255, 0, 0);
  textSize(40);
  text("GAME OVER", width/2, height/2 - 30);
  fill(255);
  textSize(20);
  text("Score: " + score, width/2, height/2 + 20);
  text("Press R to play again", width/2, height/2 + 80);
}

function updateGame() {
  // Move player with mouse
  playerX = mouseX;
  playerX = constrain(playerX, 20, width - 20);
  
  // Move lasers up
  for (let i = 0; i < lasers.length; i++) {
    lasers[i].y -= 7;
    if (lasers[i].y < 0) {
      lasers.splice(i, 1);
      i--;
    }
  }
  
  // Move enemies down
  for (let i = 0; i < enemies.length; i++) {
    enemies[i].y += 3;
    if (enemies[i].y > height) {
      enemies.splice(i, 1);
      i--;
      continue;
    }
    
    // Check if laser hits enemy
    let hit = false;
    for (let j = 0; j < lasers.length; j++) {
      let d = dist(lasers[j].x, lasers[j].y, enemies[i].x, enemies[i].y);
      if (d < 20) {
        lasers.splice(j, 1);
        hit = true;
        break;
      }
    }
    
    if (hit) {
      enemies.splice(i, 1);
      score++;
      i--;
      continue;
    }
    
    // Check if enemy hits player
    let d = dist(playerX, height - 40, enemies[i].x, enemies[i].y);
    if (d < 30) {
      health -= 20;
      enemies.splice(i, 1);
      i--;
      if (health <= 0) {
        gameState = "gameOver";
      }
    }
  }
  
  // Move powerups down
  for (let i = 0; i < powerups.length; i++) {
    powerups[i].y += 2;
    if (powerups[i].y > height) {
      powerups.splice(i, 1);
      i--;
      continue;
    }
    
    // Check if player collects powerup
    let d = dist(playerX, height - 40, powerups[i].x, powerups[i].y);
    if (d < 25) {
      health = min(100, health + 30);
      powerups.splice(i, 1);
      i--;
    }
  }
  
  // Spawn enemies randomly
  if (frameCount % 40 === 0 && random() < 0.7) {
    enemies.push({
      x: random(30, width - 30),
      y: -20
    });
  }
  
  // Spawn powerups randomly
  if (frameCount % 200 === 0 && random() < 0.5) {
    powerups.push({
      x: random(30, width - 30),
      y: -20
    });
  }
  
  // Win condition
  if (score >= 10) {
    gameState = "win";
  }
}

function drawGame() {
  // Draw player (white triangle)
  fill(255);
  triangle(playerX, height - 30, playerX - 15, height - 10, playerX + 15, height - 10);
  
  // Draw lasers (cyan lines)
  for (let laser of lasers) {
    fill(0, 255, 255);
    rect(laser.x - 2, laser.y, 4, 8);
  }
  
  // Draw enemies (red squares)
  for (let enemy of enemies) {
    fill(255, 0, 0);
    rect(enemy.x - 12, enemy.y - 12, 24, 24);
  }
  
  // Draw powerups (blue squares)
  for (let p of powerups) {
    fill(0, 100, 255);
    rect(p.x - 8, p.y - 8, 16, 16);
    fill(255);
    textSize(12);
    text("+", p.x, p.y);
  }
  
  // Draw health bar
  fill(100);
  rect(20, 30, 200, 20);
  fill(0, 255, 0);
  rect(20, 30, health * 2, 20);
  fill(255);
  text("Health: " + health + "%", 25, 45);
  
  // Draw score
  textSize(20);
  text("Score: " + score + "/10", width - 80, 45);
}

function mousePressed() {
  if (gameState === "playing") {
    lasers.push({
      x: playerX,
      y: height - 45
    });
  }
}

function keyPressed() {
  if (gameState === "title" && key === ' ') {
    resetGame();
    gameState = "playing";
  }
  if ((gameState === "gameOver" || gameState === "win") && (key === 'r' || key === 'R')) {
    resetGame();
    gameState = "playing";
  }
}

function resetGame() {
  score = 0;
  health = 100;
  lasers = [];
  enemies = [];
  powerups = [];
  playerX = width / 2;
}    