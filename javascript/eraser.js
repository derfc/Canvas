class Eraser extends PaintFunction {
	constructor(contextReal) {
		super();
		this.context = contextReal;
	}

	onMouseDown(coord, event) {
		this.strokeSize = 5;
		if (canvasSettings.strokeSize > 5) {
			this.strokeSize = canvasSettings.strokeSize;
		}
		contextReal.clearRect(coord[0], coord[1], this.strokeSize, this.strokeSize);
	}
	onDragging(coord, event) {
		this.strokeSize = 5;
		if (canvasSettings.strokeSize > 5) {
			this.strokeSize = canvasSettings.strokeSize;
		}
		contextReal.clearRect(coord[0], coord[1], this.strokeSize, this.strokeSize);
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
