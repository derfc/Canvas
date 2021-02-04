class DrawingPolygon extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.sides = 5;
    resetDrawing = false;
  }

  onMouseDown(coord, event) {
    this.contextDraft.lineWidth = canvasSettings.strokeSize;
    this.contextDraft.fillStyle = canvasSettings.colorFill;
    this.contextDraft.strokeStyle = canvasSettings.colorStroke;
    this.contextReal.lineWidth = canvasSettings.strokeSize;
    this.contextReal.fillStyle = canvasSettings.colorFill;
    this.contextReal.strokeStyle = canvasSettings.colorStroke;
    this.origX = coord[0];
    this.origY = coord[1];
    this.sides = canvasSettings.polygonSides;
    resetDrawing = false;
  }

  onDragging(coord, event) {
    console.log("resetDrawing", resetDrawing);
    if (resetDrawing == false) {
      this.size = Math.sqrt(
        (coord[0] - this.origX) ** 2 + (coord[1] - this.origY) ** 2
      );

      function arcctg(x) {
        return Math.PI / 2 - Math.atan(x);
      }

      if (coord[1] - this.origY >= 0) {
        this.theta = arcctg((coord[0] - this.origX) / (coord[1] - this.origY));
      } else {
        this.theta =
          Math.PI + arcctg((coord[0] - this.origX) / (coord[1] - this.origY));
      }

      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(coord[0], coord[1]);
      for (let i = 1; i <= this.sides; i++) {
        this.contextDraft.lineTo(
          this.origX +
            this.size * Math.cos(this.theta + (i * 2 * Math.PI) / this.sides),
          this.origY +
            this.size * Math.sin(this.theta + (i * 2 * Math.PI) / this.sides)
        );
      }
      if (fillStyle) {
        this.contextDraft.fill();
      } else {
        this.contextDraft.stroke();
      }
    }
  }

  onMouseMove(coord, event) {}
  onMouseUp(coord, event) {
    if (resetDrawing == false) {
      this.size = Math.sqrt(
        (coord[0] - this.origX) ** 2 + (coord[1] - this.origY) ** 2
      );
      function arcctg(x) {
        return Math.PI / 2 - Math.atan(x);
      }
      if (coord[1] - this.origY >= 0) {
        this.theta = arcctg((coord[0] - this.origX) / (coord[1] - this.origY));
      } else {
        this.theta =
          Math.PI + arcctg((coord[0] - this.origX) / (coord[1] - this.origY));
      }

      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextReal.beginPath();
      this.contextReal.moveTo(coord[0], coord[1]);
      for (let i = 1; i <= this.sides; i++) {
        this.contextReal.lineTo(
          this.origX +
            this.size * Math.cos(this.theta + (i * 2 * Math.PI) / this.sides),
          this.origY +
            this.size * Math.sin(this.theta + (i * 2 * Math.PI) / this.sides)
        );
      }

      if (fillStyle) {
        this.contextReal.fill();
      } else {
        this.contextReal.stroke();
      }
      saveState();
    }
  }
  onMouseLeave() {}
  onMouseEnter() {}
  reset() {
    this.click = 0;
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
  }

  draw(x, y) {
    this.contextReal.lineTo(x, y);
    this.contextReal.moveTo(x, y);
    this.contextReal.closePath();
    this.contextReal.stroke();
  }
}
