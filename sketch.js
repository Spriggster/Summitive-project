let blob;
let floorblobs = [];

function setup() {
  createCanvas(800, 400);
  blob = new Blob();
}

function keyPressed() {
  if (key == ' ') {
    blob.jump();
  }
  if (key == 'w') {
    blob.float();
  }
}

function draw() {

  if (random(1) < 0.01) {
    floorblobs.push(new Floorblob());
  }
  background(220);
  blob.show();
  blob.move();
  for (let b of floorblobs) {
    b.move();
    b.show();
    if (blob.hits(b)) {
      console.log('game over');
      noLoop();
    }
  }
}
