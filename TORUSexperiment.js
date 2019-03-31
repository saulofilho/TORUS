var sliderRadius;
var sliderTubeRadius;
var sliderRotateX ;
var sliderRotateY ;
var sliderRotateZ;
var sliderRate;

// var isOverSlider;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.parent('myContainer');
  background(0);

  // frame rate
  sliderRate = createSlider(1, 200, 0, 1);
  sliderRate.parent('myInputs');
//  sliderRate.position(900, 70);
//  sliderRate.style('width', '150px');
  sliderRate.class('inputs');

  let textRate = createP('Frame Rate');
  textRate.parent('myInputs');
//  textRate.position(810, 63);
//  textRate.style("font-size", "10px");

  // radius
  sliderRadius = createSlider(0, 1000, 0, 0.0001);
  sliderRadius.parent('myInputs');
//  sliderRadius.position(900, 100);
//  sliderRadius.style('width', '150px');
  sliderRadius.class('inputs');

  let textRadius = createP('Radius');
  textRadius.parent('myInputs');
//  textRadius.position(830, 93);
//  textRadius.style("font-size", "10px");

  // tube radius
  sliderTubeRadius = createSlider(0.01, 100, 0.01, 0.01);
  sliderTubeRadius.parent('myInputs');
//  sliderTubeRadius.position(900, 130);
//  sliderTubeRadius.style('width', '150px');
  sliderTubeRadius.class('inputs');

  let textTubeRadius = createP('Tube Radius');
  textTubeRadius.parent('myInputs');
//  textTubeRadius.position(810, 125);
//  textTubeRadius.style("font-size", "10px");

  // rotate x
  sliderRotateX = createSlider(0.01, 1, 0.01, 0.001);
  sliderRotateX.parent('myInputs');
//  sliderRotateX .position(900, 160);
//  sliderRotateX .style('width', '150px');
  sliderRotateX .class('inputs');

  let textRotateX  = createP('Rotate X');
  textRotateX.parent('myInputs');
//  textRotateX.position(820, 155);
//  textRotateX.style("font-size", "10px");

  // rotate y
  sliderRotateY = createSlider(0.01, 1, 0.01, 0.001);
  sliderRotateY.parent('myInputs');
//  sliderRotateY .position(900, 190);
//  sliderRotateY .style('width', '150px');
  sliderRotateY .class('inputs');

  let textRotateY = createP('Rotate Y');
  textRotateY.parent('myInputs');
//  textRotateY.position(820, 185);
//  textRotateY.style("font-size", "10px");

  // rotate z
  sliderRotateZ = createSlider(0.01, 1, 0.01, 0.001);
  sliderRotateZ.parent('myInputs');
//  sliderRotateZ.position(900, 220);
//  sliderRotateZ.style('width', '150px');
  sliderRotateZ.class('inputs');

  let textRotateZ = createP('Rotate Z');
  textRotateZ.parent('myInputs');
//  textRotateZ.position(820, 215);
//  textRotateZ.style("font-size", "10px");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  var frameR = sliderRate.value();
  frameRate(frameR);
  var radius = sliderRadius.value();
  var tubeRadius = sliderTubeRadius.value();
  var rotX = sliderRotateX .value();
  var rotY = sliderRotateY .value();
  var rotZ = sliderRotateZ.value();

  normalMaterial();
    translate(0, 0, 500);
    push();
    rotateX(frameCount * rotX);
    rotateY(frameCount * rotY);
    rotateZ(frameCount * rotZ);
    torus(radius, tubeRadius);
    pop();

    if (mouseIsPressed) {
      background(0);
    }
}

