let a = 3;
let b = 0;
const r = 150;
let x;
let y;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  translate(width / 2, height / 2);
  
  noFill();
  stroke(0);
  beginShape();
  for(let t  = 0; t < TWO_PI; t += 0.01){
    x = r * (1 * sin(a * t + PI / 2));
    y = r * (1 * cos(t * b));
    vertex(x, y);
  }
  
  endShape();
  a += 0.01;
  b += 0.01;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}