/**********************************************
 * Drawing Line Functionality
 * ==================================
 ***********************************************/
class DrawingLine extends PaintFunction {
  // This class extends the PaintFunction class
  constructor(contextReal) {
    super();
    this.context = contextReal;
    this.color = "Black";
    // this.color = colorStroke;
  }

  // On mouse down, ensure that the pen has these features
  onMouseDown(coord, event) {
    this.context.strokeStyle = `${this.color}`;
    this.context.lineJoin = "round";
    this.context.lineWidth = 5;
    this.context.beginPath();
    this.context.moveTo(coord[0], coord[1]);
    this.draw(coord[0], coord[1]);
  }
  onDragging(coord, event) {
    this.draw(coord[0], coord[1]);
  }

  onMouseMove() {}
  onMouseUp() {}
  onMouseLeave() {}
  onMouseEnter() {}

  color(color) {
    this.color = color;
  }

  draw(x, y) {
    this.context.lineTo(x, y);
    this.context.moveTo(x, y);
    this.context.closePath();
    this.context.stroke();
  }
}
