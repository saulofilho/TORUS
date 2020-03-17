/* eslint no-undef: 0 */
/* eslint no-unused-vars: 0 */
/* global p5 */

import "../public/styles/index.sass";



const containerElement = document.querySelector("#myContainer");

const sketch = (p) => {
  let x = 100;
  let y = 100;

  p.setup = function() {
    p.createCanvas(800, 400);
  };

  p.draw = function() {
    p.background(0);
    p.fill(255);
    p.rect(x, y, 50, 50);
  };
};

new p5(sketch, containerElement);

// const canvasSketch = document.querySelector("#myContainer");

// const sketch = (x) => {
//   let sliderRadius;
//   let sliderTubeRadius;
//   let sliderRotateX;
//   let sliderRotateY;
//   let sliderRotateZ;
//   let sliderRate;
  
//   x.setup = function() {
//     let canvas = createCanvas(windowWidth, windowHeight, WEBGL);
//     canvas.parent("myContainer");
//     background(0);
  
//     // frame rate
//     sliderRate = createSlider(1, 200, 0, 1);
//     sliderRate.parent("myInputs");
//     sliderRate.class("inputs");
  
//     let textRate = createP("Frame Rate");
//     textRate.parent("myInputs");
  
//     // radius
//     sliderRadius = createSlider(0, 1000, 0, 0.0001);
//     sliderRadius.parent("myInputs");
//     sliderRadius.class("inputs");
  
//     let textRadius = createP("Radius");
//     textRadius.parent("myInputs");
  
//     // tube radius
//     sliderTubeRadius = createSlider(0.01, 100, 0.01, 0.01);
//     sliderTubeRadius.parent("myInputs");
//     sliderTubeRadius.class("inputs");
  
//     let textTubeRadius = createP("Tube Radius");
//     textTubeRadius.parent("myInputs");
  
//     // rotate x
//     sliderRotateX = createSlider(0.01, 1, 0.01, 0.001);
//     sliderRotateX.parent("myInputs");
//     sliderRotateX .class("inputs");
  
//     let textRotateX  = createP("Rotate X");
//     textRotateX.parent("myInputs");
  
//     // rotate y
//     sliderRotateY = createSlider(0.01, 1, 0.01, 0.001);
//     sliderRotateY.parent("myInputs");
//     sliderRotateY .class("inputs");
  
//     let textRotateY = createP("Rotate Y");
//     textRotateY.parent("myInputs");
  
//     // rotate z
//     sliderRotateZ = createSlider(0.01, 1, 0.01, 0.001);
//     sliderRotateZ.parent("myInputs");
//     sliderRotateZ.class("inputs");
  
//     let textRotateZ = createP("Rotate Z");
//     textRotateZ.parent("myInputs");
//     saveButton = createButton("save image");
//     saveButton.mousePressed(saveImg);
//     saveButton.parent("but");
//   };
  
//   x.saveImg = function() {
//     save("TORUS.png");
//   };
  
//   x.windowResized = function() {
//     resizeCanvas(windowWidth, windowHeight);
//   };
  
//   x.draw = function() {
//     let frameR = sliderRate.value();
//     frameRate(frameR);
//     let radius = sliderRadius.value();
//     let tubeRadius = sliderTubeRadius.value();
//     let rotX = sliderRotateX .value();
//     let rotY = sliderRotateY .value();
//     let rotZ = sliderRotateZ.value();
  
//     normalMaterial();
//       translate(0, 0, 500);
//       push();
//       rotateX(frameCount * rotX);
//       rotateY(frameCount * rotY);
//       rotateZ(frameCount * rotZ);
//       torus(radius, tubeRadius);
//       pop();
  
//       if (mouseIsPressed) {
//         background(0);
//       }
//   };
// };


// new p5(sketch, canvasSketch);

// $(document).ready(function() {
//   $("button").click(function() {
//     $("span").toggle();
//   });
// });