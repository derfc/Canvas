"use strict";
// COLOR, TEXT SIZE & STROKESIZE
let canvasSettings = {
  colorStroke: $("#stroke-color").val(),
  colorFill: $("#fill-color").val(),
  // strokeSize
  // textSize
  // textFont
};

$("#stroke-color")[0].oninput = function () {
  canvasSettings.colorStroke = this.value;
};

$("#fill-color")[0].oninput = function () {
  canvasSettings.colorFill = this.value;
};

$("#stroke-size")[0].oninput = function () {
  canvasSettings.strokeSize = this.value;
};

// $("#text-size")[0].oninput = function () {
//   canvasSettings.textsize = this.value;
// };

$("#clear-canvas").click(() => {
  contextReal.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
});
