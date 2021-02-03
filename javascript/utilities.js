"use strict";
// COLOR, TEXT SIZE & STROKESIZE
let canvasSettings = {
  colorStroke: $("#stroke-color").val(),
  colorFill: $("#fill-color").val(),
  strokeSize: $("#stroke-size").val(),
  textSize: $("#text-size").val(),
  polygonSides: $("#poly-sides").val(),
  // textFont
};

$("#stroke-color")[0].oninput = function () {
  canvasSettings.colorStroke = this.value;
  document.documentElement.style.setProperty("--color", this.value);
};

$("#fill-color")[0].oninput = function () {
  canvasSettings.colorFill = this.value;
};

$("#stroke-size")[0].oninput = function () {
  canvasSettings.strokeSize = this.value;
};

$("#poly-sides")[0].oninput = function () {
  canvasSettings.polygonSides = this.value;
};

$("#text-size")[0].oninput = function () {
  canvasSettings.textSize = this.value;
};
// Clear Canvas function
$("#clear-canvas").click(() => {
  contextReal.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
  contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
});
//Downloads Image
$("#download").click((e) => {
  let image = canvasReal.toDataURL();
  let tempLink = document.createElement("a");
  tempLink.download = "image.png";
  tempLink.href = image;
  document.body.appendChild(tempLink);
  tempLink.click();
  document.body.removeChild(tempLink);
});
//Highlight selected button function
$(".icons").click(function (e) {
  $(".icons").removeClass("btn-active");
  $(this).addClass("btn-active");
});
