var img;
function setup(){
  createCanvas(displayWidth, displayHeight, WEBGL);
	img = loadImage("assets/DSCF9655.jpg");
}

function draw(){
  background(250);
	textSize(24);
		text('Shake me!', 100, 100);
		//moving picture like a dice
 	texture(img);
  rotateX(accelerationX * 0.03);
  rotateY(accelerationY * 0.03);
  box(100, 100, 100);
}
