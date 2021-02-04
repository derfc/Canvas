class DrawingBezierCurve extends PaintFunction {
	constructor(contextReal, contextDraft) {
		super();
		this.contextReal = contextReal;
		this.contextDraft = contextDraft;
		this.click = 0;
	}

	onMouseDown(coord, event) {
		this.contextDraft.lineWidth = canvasSettings.strokeSize;
		this.contextDraft.strokeStyle = canvasSettings.colorStroke;
		this.contextReal.lineWidth = canvasSettings.strokeSize;
		this.contextReal.strokeStyle = canvasSettings.colorStroke;
	}
	onDragging(coord, event) {}

	onMouseMove(coord, event) {
		if (this.click === 1) {
			var endptx = coord[0];
			var endpty = coord[1];
			this.contextDraft.beginPath();
			this.contextDraft.moveTo(this.origX, this.origY);
			this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
			this.contextDraft.bezierCurveTo(
				this.origX,
				this.origY,
				endptx,
				endpty,
				endptx,
				endpty
			);
			this.contextDraft.stroke();
		} else if (this.click === 2) {
			var cp1x = coord[0];
			var cp1y = coord[1];
			this.contextDraft.beginPath();
			this.contextDraft.moveTo(this.origX, this.origY);
			this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
			this.contextDraft.bezierCurveTo(
				cp1x,
				cp1y,
				this.endptx,
				this.endpty,
				this.endptx,
				this.endpty
			);
			this.contextDraft.stroke();
		} else if (this.click === 3) {
			var cpt2x = coord[0];
			var cpt2y = coord[1];
			this.contextDraft.beginPath();
			this.contextDraft.moveTo(this.origX, this.origY);
			this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
			this.contextDraft.bezierCurveTo(
				this.cp1x,
				this.cp1y,
				cpt2x,
				cpt2y,
				this.endptx,
				this.endpty
			);
			this.contextDraft.stroke();
		}
	}
	onMouseUp(coord, event) {
		if (this.click === 0) {
			this.origX = coord[0];
			this.origY = coord[1];
			this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
			this.click++;
		} else if (this.click === 1) {
			this.endptx = coord[0];
			this.endpty = coord[1];
			this.contextDraft.beginPath();
			this.contextDraft.moveTo(this.origX, this.origY);
			this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
			this.contextDraft.bezierCurveTo(
				this.origX,
				this.origY,
				this.endptx,
				this.endpty,
				this.endptx,
				this.endpty
			);
			this.contextDraft.stroke();
			this.click++;
		} else if (this.click === 2) {
			this.cp1x = coord[0];
			this.cp1y = coord[1];
			this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
			this.contextDraft.beginPath();
			this.contextDraft.moveTo(this.origX, this.origY);
			this.contextDraft.bezierCurveTo(
				this.cp1x,
				this.cp1y,
				this.endptx,
				this.endpty,
				this.endptx,
				this.endpty
			);
			this.contextDraft.stroke();
			this.click++;
		} else if (this.click === 3) {
			this.cp2x = coord[0];
			this.cp2y = coord[1];
			this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
			this.contextReal.beginPath();
			this.contextReal.moveTo(this.origX, this.origY);
			this.contextReal.bezierCurveTo(
				this.cp1x,
				this.cp1y,
				this.cp2x,
				this.cp2y,
				this.endptx,
				this.endpty
			);
			this.contextReal.stroke();
			saveState();
			this.click = 0;
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
