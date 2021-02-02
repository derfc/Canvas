/**********************************************
 * Drawing Line Functionality
 * ==================================
 * This class extends the PaintFunction class, which you can find in canvas-common
 * Remember, order matters
 ***********************************************/
class DrawingLine extends PaintFunction {
	// This class extends the PaintFunction class
	// You are only passing one instance here

	constructor(contextReal) {
		super();
		this.contextReal = contextReal;
	}

	// On mouse down, ensure that the pen has these features
	onMouseDown(coord, event) {
		// Width of line
		this.contextReal.lineWidth = canvasSettings.strokeSize;
		// Fill in the color
		this.contextReal.strokeStyle = canvasSettings.colorStroke;
		// Kind of line
		this.contextReal.lineJoin = "round";

		// Drawing the line here
		this.contextReal.beginPath();
		this.contextReal.moveTo(coord[0], coord[1]);
		this.draw(coord[0], coord[1]);
	}
	// Clicking and removing your mouse
	onDragging(coord, event) {
		this.draw(coord[0], coord[1]);
	}

	onMouseMove() {}
	onMouseUp() {
		saveState();
	}
	onMouseLeave() {}
	onMouseEnter() {}

	draw(x, y) {
		//
		this.contextReal.lineTo(x, y);
		this.contextReal.moveTo(x, y);
		this.contextReal.closePath();
		// Draw the line onto the page
		this.contextReal.stroke();
	}
}
