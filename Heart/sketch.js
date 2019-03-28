let x = 0, y = 0;
r = 1;
d = true;


function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
	background(0);
	translate(width / 2, height / 2);

	fill(200, 10, 10);
	stroke(255);

	beginShape();
	//r = 10;
	for (let t = 0; t < TWO_PI; t += 0.01) {
		//r = map(mouseX, 0, width, 0, 10);
		if(r <= 1){
			d = true;
		}
		else if(r >= 10){
			d = false;
		}
		
		if(d == true){
			r += 0.0001;
		}
		else{
			r -= 0.0001;
		}

		x = r * (16 * pow(sin(t), 3))
		y = -r * (13 * cos(t) - 5 * cos(2 * t) - 2 * cos(3 * t) - cos(4 * t))
		vertex(x, y);
	}
	endShape();
}

function windowResized() {
	resizeCanvas(window.innerWidth, window.innerHeight);
}