var slider;
var slider2;
var slider3;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(0);
  slider = createSlider(0.01, 100, 0.01, 0.01);
  slider.position(1000, 90);
  slider.style('width', '260px');
  slider.style('background', 'red');
  slider2 = createSlider(0, 1000, 0, 0.01);
  slider2.position(1000, 120);
  slider2.style('width', '260px');
  slider3 = createSlider(0, 100, 0, 0.01);
  slider3.position(1000, 150);
  slider3.style('width', '260px');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {

  var val = slider.value();
  var val2 = slider2.value();
  var val3 = slider3.value();

  normalMaterial();
    translate(0, 0, 500);
    push();
    rotateZ(frameCount * val3);
    rotateX(frameCount * 0.1);
    rotateY(frameCount * 0.1);
    torus(val2, val);
    pop();

    if (mouseIsPressed) {
      background(0);
    }
}