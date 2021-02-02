/**********************************************
 * The Canvas
 * ==================================
 ***********************************************/

let canvasReal = document.getElementById("canvas-real");
let contextReal = canvasReal.getContext("2d");
let canvasDraft = document.getElementById("canvas-draft");
let contextDraft = canvasDraft.getContext("2d");
let currentFunction;
let dragging = false;
let regularFix = false;

$("#canvas-draft").mousedown(function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseDown([mouseX, mouseY], e);
  dragging = true;
});

$("#canvas-draft").mousemove(function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  if (dragging) {
    currentFunction.onDragging([mouseX, mouseY], e);
  }
  currentFunction.onMouseMove([mouseX, mouseY], e);
});

$("#canvas-draft").mouseup(function (e) {
  dragging = false;
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseUp([mouseX, mouseY], e);
});

$("#textInput").keypress(function (e) {
  console.log("hi");
  if (e.which == 13) {
    currentFunction.onKeyPress();
  }
});

$("#canvas-draft").mouseleave(function (e) {
  dragging = false;
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseLeave([mouseX, mouseY], e);
});

$("#canvas-draft").mouseenter(function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseEnter([mouseX, mouseY], e);
});

window.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key == "Escape") {
    // contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    currentFunction.reset();
  }
  if (e.key == "Shift") {
    regularFix = true;
    console.log("regular fix", regularFix);
  }
});

window.addEventListener("keyup", (e) => {
  console.log(e.key);
  if (e.key == "Shift") {
    regularFix = false;
    console.log("regular fix", regularFix);
  }
});

// window.addEventListener("keypress", (e) => {
//   console.log(e.key);
//   if (e.key == "Escape") {
//     // contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
//     currentFunction.reset();
//   }
// });

// $(".ch-color").click((e) => {
//   console.log(e.target.id);
//   var colorStroke = e.target.id;
// });
/** # Class (all classes will have these methods) #
/*  ====================== */
class PaintFunction {
  constructor() {}
  onMouseDown() {}
  onDragging() {}
  onMouseMove() {}
  onMouseUp() {}
  onMouseLeave() {}
  onMouseEnter() {}
  onKeyPress() {}
  color() {}
}
