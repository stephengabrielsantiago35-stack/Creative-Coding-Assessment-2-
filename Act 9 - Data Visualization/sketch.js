let table;

function preload() {
  table = loadTable('data.csv', 'csv', 'header');
}

function setup() {
  createCanvas(400, 300);
  background(255);

  let barHeight = 40;

  for (let i = 0; i < table.getRowCount(); i++) {
    let module = table.getString(i, 'Module');
    let marks = table.getNum(i, 'Marks');

    let y = 30 + i * (barHeight + 20);
    let w = map(marks, 0, 100, 0, width - 100);

    // Draw bar
    fill(0);
    rect(100, y, w, barHeight);

    // Module name (left of bar)
    fill(0);
    textAlign(RIGHT, CENTER);
    textSize(12);
    text(module, 90, y + barHeight / 2);

    // Marks value (right of bar)
    fill(0);
    textAlign(LEFT, CENTER);
    text(marks, 105 + w, y + barHeight / 2);
  }
}