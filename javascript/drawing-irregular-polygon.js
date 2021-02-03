/**********************************************
 * Drawing Line Functionality
 * ==================================
 ***********************************************/
class DrawingIrregularPolygon extends PaintFunction {
	// This class extends the PaintFunction class
	constructor(contextReal, contextDraft) {
		super();
		this.contextReal = contextReal;
		this.contextDraft = contextDraft;
		this.sides = 5;
		this.click = 0;
		this.coordArr = [];
	}

	// On mouse down, ensure that the pen has these features
	onMouseDown(coord, event) {
		this.contextDraft.lineWidth = canvasSettings.strokeSize;
		this.contextDraft.fillStyle = canvasSettings.colorFill;
		// this.contextDraft.strokeStyle = canvasSettings.colorStroke;
		this.contextReal.lineWidth = canvasSettings.strokeSize;
		this.contextReal.fillStyle = canvasSettings.colorFill;
		// this.contextReal.strokeStyle = canvasSettings.colorStroke;
		this.sides = canvasSettings.polygonSize;
		if (fillStyle) {
			this.contextDraft.strokeStyle = this.contextDraft.fillStyle;
			this.contextReal.strokeStyle = this.contextReal.fillStyle =
				canvasSettings.colorFill;
		} else {
			this.contextDraft.strokeStyle = canvasSettings.colorStroke;
			this.contextReal.strokeStyle = canvasSettings.colorStroke;
		}
	}
	onDragging(coord, event) {}

	onMouseMove(coord, event) {
		if (this.click == 0) {
			this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
			this.contextDraft.beginPath();
			this.contextDraft.moveTo(this.origX, this.origY);
		}
		if (this.click == 1) {
			this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
			this.contextDraft.beginPath();
			this.contextDraft.moveTo(this.origX, this.origY);
			this.contextDraft.lineTo(coord[0], coord[1]);
			this.contextDraft.stroke();
		} else if (this.click > 1) {
			this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
			this.contextDraft.beginPath();
			this.contextDraft.moveTo(this.origX, this.origY);

			for (let i = 1; i < this.click; i++) {
				this.contextDraft.lineTo(this.coordArr[i][0], this.coordArr[i][1]);
			}

			this.contextDraft.lineTo(coord[0], coord[1]);
			this.contextDraft.closePath();
			if (fillStyle) {
				this.contextDraft.fill();
			} else {
				this.contextDraft.stroke();
			}
		}
	}
	onMouseUp(coord, event) {
		if (this.click == 0) {
			this.origX = coord[0];
			this.origY = coord[1];
			this.coordArr.push(coord);
			this.click++;
		} else {
			this.contextDraft.beginPath();
			this.contextDraft.moveTo(this.origX, this.origY);
			for (let i = 1; i < this.click; i++) {
				this.contextDraft.lineTo(this.coordArr[i][0], this.coordArr[i][1]);
			}

			this.contextDraft.stroke();
			this.coordArr.push(coord);
			this.click++;
			console.log(this.click);
		}
	}
	onMouseLeave() {}
	onMouseEnter() {}

	join() {
		this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
		this.contextReal.beginPath();
		this.contextReal.moveTo(this.origX, this.origY);
		for (let i = 1; i < this.click; i++) {
			this.contextReal.lineTo(this.coordArr[i][0], this.coordArr[i][1]);
		}

		this.contextReal.closePath();
		if (fillStyle) {
			this.contextReal.fill();
		} else {
			this.contextReal.stroke();
		}
		saveState();
		this.click = 0;
		this.coordArr = [];
		console.log("end of story", this.click);
	}

	reset() {
		this.click = 0;
		this.coordArr = [];
		this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
	}

	draw(x, y) {
		this.contextReal.lineTo(x, y);
		this.contextReal.moveTo(x, y);
		this.contextReal.closePath();
		this.contextReal.stroke();
	}
}
