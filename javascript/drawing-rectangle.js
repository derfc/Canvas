/**********************************************
 * Drawing Rectangle Functionality
 * ==================================
 ***********************************************/
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect
class DrawingRectangle extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(coord, event) {
    this.contextReal.fillStyle = "#f44";
    this.origX = coord[0];
    this.origY = coord[1];
  }
  onDragging(coord, event) {
    this.contextDraft.fillStyle = "#f44";
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

    if (regularFix) {
      let xDiv = coord[0] - this.origX;
      let yDiv = coord[1] - this.origY;

      if (coord[0] > this.origX && coord[1] > this.origY) {
        if (xDiv > yDiv) {
          this.contextDraft.fillRect(this.origX, this.origY, yDiv, yDiv);
        } else {
          this.contextDraft.fillRect(this.origX, this.origY, xDiv, xDiv);
        }
      } else if (coord[0] > this.origX && coord[1] < this.origY) {
        if (xDiv > Math.abs(yDiv)) {
          this.contextDraft.fillRect(
            this.origX,
            this.origY,
            Math.abs(yDiv),
            yDiv
          );
        } else {
          this.contextDraft.fillRect(this.origX, this.origY, xDiv, -xDiv);
        }
      } else if (coord[0] < this.origX && coord[1] > this.origY) {
        if (Math.abs(xDiv) > yDiv) {
          this.contextDraft.fillRect(this.origX, this.origY, -yDiv, yDiv);
        } else {
          this.contextDraft.fillRect(
            this.origX,
            this.origY,
            xDiv,
            Math.abs(xDiv)
          );
        }
      } else {
        if (Math.abs(xDiv) > Math.abs(yDiv)) {
          this.contextDraft.fillRect(this.origX, this.origY, yDiv, yDiv);
        } else {
          this.contextDraft.fillRect(this.origX, this.origY, xDiv, xDiv);
        }
      }
    } else {
      this.contextDraft.fillRect(
        this.origX,
        this.origY,
        coord[0] - this.origX,
        coord[1] - this.origY
      );
      console.log("NRF", regularFix);
    }
  }

  onMouseMove() {}
  onMouseUp(coord) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    if (regularFix) {
      let xDiv = coord[0] - this.origX;
      let yDiv = coord[1] - this.origY;

      if (coord[0] > this.origX && coord[1] > this.origY) {
        if (xDiv > yDiv) {
          this.contextReal.fillRect(this.origX, this.origY, yDiv, yDiv);
        } else {
          this.contextReal.fillRect(this.origX, this.origY, xDiv, xDiv);
        }
      } else if (coord[0] > this.origX && coord[1] < this.origY) {
        if (xDiv > Math.abs(yDiv)) {
          this.contextReal.fillRect(
            this.origX,
            this.origY,
            Math.abs(yDiv),
            yDiv
          );
        } else {
          this.contextReal.fillRect(this.origX, this.origY, xDiv, -xDiv);
        }
      } else if (coord[0] < this.origX && coord[1] > this.origY) {
        if (Math.abs(xDiv) > yDiv) {
          this.contextReal.fillRect(this.origX, this.origY, -yDiv, yDiv);
        } else {
          this.contextReal.fillRect(
            this.origX,
            this.origY,
            xDiv,
            Math.abs(xDiv)
          );
        }
      } else {
        if (Math.abs(xDiv) > Math.abs(yDiv)) {
          this.contextReal.fillRect(this.origX, this.origY, yDiv, yDiv);
        } else {
          this.contextReal.fillRect(this.origX, this.origY, xDiv, xDiv);
        }
      }
    } else {
      this.contextReal.fillRect(
        this.origX,
        this.origY,
        coord[0] - this.origX,
        coord[1] - this.origY
      );
      // console.log("NRF", regularFix);
    }
  }
  onMouseLeave() {}
  onMouseEnter() {}
}
