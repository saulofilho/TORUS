var slider;
var slider2;
var slider3;
var slider4;
var slider5;


function setup() {
  let canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.parent('myContainer');
  background(0);

  // radius
  slider2 = createSlider(0, 1000, 0, 0.0001);
  slider2.position(900, 100);
  slider2.style('width', '150px');
  let text2 = createP('radius');
  text2.position(830, 90);
  text2.style("font-size", "10px");

  // tube radius
  slider = createSlider(0.01, 100, 0.01, 0.01);
  slider.position(900, 130);
  slider.style('width', '150px');
  let text1 = createP('tube radius');
  text1.position(820, 120);
  text1.style("font-size", "10px");

  // rotate z
  slider3 = createSlider(0.01, 1, 0.01, 0.001);
  slider3.position(900, 160);
  slider3.style('width', '150px');
  let text3 = createP('rotate z');
  text3.position(830, 150);
  text3.style("font-size", "10px");

  // rotate x
  slider4 = createSlider(0.01, 1, 0.01, 0.001);
  slider4.position(900, 190);
  slider4.style('width', '150px');
  let text4 = createP('rotate x');
  text4.position(830, 180);
  text4.style("font-size", "10px");

  // rotate y
  slider5 = createSlider(0.01, 1, 0.01, 0.001);
  slider5.position(900, 220);
  slider5.style('width', '150px');
  let text5 = createP('rotate y');
  text5.position(830, 210);
  text5.style("font-size", "10px");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {

  var tubeRadius = slider.value();
  var radius = slider2.value();
  var rotZ = slider3.value();
  var rotX = slider4.value();
  var rotY = slider5.value();

  normalMaterial();
    translate(0, 0, 500);
    push();
    rotateZ(frameCount * rotZ);
    rotateX(frameCount * rotX);
    rotateY(frameCount * rotY);
    torus(radius, tubeRadius);
    pop();

    if (mouseIsPressed) {
      background(0);
    }
}