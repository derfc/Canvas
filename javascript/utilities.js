"use strict";
// COLOR, TEXT SIZE & STROKESIZE
let canvasSettings = {
<<<<<<< HEAD
	colorStroke: $("#stroke-color").val(),
	colorFill: $("#fill-color").val(),
	polygonSize: $("#polygon-sides").val(),
	// strokeSize
	// textSize
	// textFont
=======
  colorStroke: $("#stroke-color").val(),
  colorFill: $("#fill-color").val(),
  strokeSize: $("#stroke-size").val(),
  // textSize
  // textFont
>>>>>>> 71c57450cd7ea525ec0c94563fd98a21349e7ef6
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
$("#polygon-sides")[0].oninput = function () {
	canvasSettings.polygonSize = this.value;
};

// $("#text-size")[0].oninput = function () {
//   canvasSettings.textsize = this.value;
// };

$("#clear-canvas").click(() => {
<<<<<<< HEAD
	contextReal.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
=======
  contextReal.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
  contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
>>>>>>> 71c57450cd7ea525ec0c94563fd98a21349e7ef6
});
