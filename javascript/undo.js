var undo = document.querySelector("#undo");
var redo = document.querySelector("#redo");
var save = document.querySelector("#save");
var load = document.querySelector("#load");
var state = contextReal.getImageData(0, 0, canvasReal.width, canvasReal.height);

window.addEventListener("popstate", changeStep, false);

function saveState() {
  let state = contextReal.getImageData(
    0,
    0,
    canvasReal.width,
    canvasReal.height
  );
  window.history.pushState(state, null);
}

function changeStep(e) {
  contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
  if (e.state) {
    contextReal.putImageData(e.state, 0, 0);
  }
}

undo.addEventListener(
  "click",
  function () {
    window.history.go(-1);
    // console.log("hello");
  },
  false
);

redo.addEventListener(
  "click",
  function () {
    window.history.go(1);
    // console.log("hello");
  },
  false
);

// below didnt check
//error occur
// save.addEventListener(
// 	"click",
// 	function () {
// 		localStorage.setItem("image", canvas.toDataURL());
// 		load.disabled = false;
// 		alert("Saved!!");
// 	},
// 	false
// );

// load.addEventListener(
// 	"click",
// 	function () {
// 		var img = new Image();
// 		img.src = localStorage.getItem("image");
// 		context.clearRect(0, 0, canvas.width, canvas.height);
// 		context.drawImage(img, 0, 0);
// 	},
// 	false
// );
