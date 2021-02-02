"use strict";
// COLOR, TEXT SIZE & STROKESIZE
let canvasSettings = {
  colorStroke: $("#stroke-color").val(),
  colorFill: $("#fill-color").val(),
  strokeSize: $("#stroke-size").val(),
  // textSize
  textsize: $("#text-size").val(),
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

$("#text-size")[0].oninput = function (){
  canvasSettings.textsize = this.value;
}

// $("#text-size")[0].oninput = function () {
//   canvasSettings.textsize = this.value;
// };

$("#clear-canvas").click(() => {
  contextReal.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
  contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
});

////////////DOM
$(".icons").click(function (e) {
  // console.log(e);
  console.log(this);
  $(".icons").removeClass("btn-active");
  $(this).addClass("btn-active");
});
