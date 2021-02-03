class DrawingStamping extends PaintFunction {
    // This class extends the PaintFunction class
    // You are only passing one instance here
  
    constructor(contextReal) {
      super();
      this.context = contextReal;
    }
  
    // On mouse down, ensure that the pen has these features
    onMouseDown(coord, event) {
      this.context.strokeStyle = canvasSettings.colorStroke;
      this.context.fillStyle = canvasSettings.colorFill;
      let radius = 20; // the size of circle is dependent upon distance from radius  i.e. difference from center
      this.context.beginPath();
      this.context.arc(coord[0], coord[1], radius, 0, 2 * Math.PI, false);
      this.context.stroke();
      this.context.fill();
    }
    // Clicking and removing your mouse
    onDragging(coord, event) {
      this.context.strokeStyle = canvasSettings.colorStroke;
      this.context.fillStyle = canvasSettings.colorFill;
      let radius = 20; // the size of circle is dependent upon distance from radius  i.e. difference from center
      this.context.beginPath();
      this.context.arc(coord[0], coord[1], radius, 0, 2 * Math.PI, false);
      this.context.stroke();
      this.context.fill();
    }
  
    onMouseMove() {}
    onMouseUp() {}
    onMouseLeave() {}
    onMouseEnter() {}

  }
  
