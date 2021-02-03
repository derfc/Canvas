/**********************************************
 * Drawing Line Functionality
 * ==================================
 ***********************************************/
class Eraser extends PaintFunction {
  // This class extends the PaintFunction class
  constructor(contextReal) {
    super();
    this.context = contextReal;
  }

  // On mouse down, ensure that the pen has these features
  onMouseDown(coord, event) {
    this.context.strokeStyle = "#FFF";
    this.context.lineJoin = "round";
    // this.context.lineWidth = canvasSettings.strokeSize;
    console.log(canvasSettings.strokeSize);
    this.context.beginPath();
    this.context.moveTo(coord[0], coord[1]);
  }
  onDragging(coord, event) {
    contextReal.clearRect(
      coord[0],
      coord[1],
      canvasSettings.strokeSize,
      canvasSettings.strokeSize
    );
  }

  onMouseMove() {}
  onMouseUp() {
    saveState();
  }
  onMouseLeave() {}
  onMouseEnter() {}

  draw(x, y) {
    this.context.lineTo(x, y);
    this.context.moveTo(x, y);
    this.context.closePath();
    this.context.stroke();
  }
}
