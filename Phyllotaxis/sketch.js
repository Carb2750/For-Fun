let x, y;
let n = 0;
const angle = 137.3;
let r;
const c = 5;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  background(0);
}

function draw() {
  //background(0);
  translate(width / 2, height / 2);
  
  //fill(random(0, 255), random(0, 255), random(0, 255));
  fill(0, r % 255, r % 255);
  //fill(255);
  noStroke();
  
  phi = n * angle;
  r = c * sqrt(n);
  
  x = r * cos(phi);
  y = r * sin(phi);
  
  ellipse(x, y, 5);
  
  n += 1;
}