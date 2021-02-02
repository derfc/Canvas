class DrawingIrregularCircle extends PaintFunction {
	constructor(contextReal, contextDraft) {
		super();
		this.contextReal = contextReal;
		this.contextDraft = contextDraft;
		this.click = 0;
	}

	onMouseDown(coord, event) {
		this.contextDraft.fillStyle = "black";
		this.contextDraft.strokeStyle = "black";
	}

	onDragging(coord, event) {}

	onMouseMove(coord) {
		if (this.click == 1) {
			if (regularFix) {
				this.contextDraft.lineJoin = "round";
				this.contextDraft.clearRect(
					0,
					0,
					canvasDraft.width,
					canvasDraft.height
				);
				let xDiv = coord[0] - this.origX;
				let yDiv = coord[1] - this.origY;
				let center = [this.origX + xDiv / 2, this.origY + yDiv / 2];
				let radius = 0.5 * Math.sqrt(xDiv ** 2 + yDiv ** 2);
				// let radiusX = Math.abs(xDiv) / 2;
				// let radiusY = Math.abs(yDiv) / 2;
				this.contextDraft.beginPath();
				this.contextDraft.arc(
					center[0],
					center[1],
					radius,
					0,
					2 * Math.PI,
					false
				);
				this.contextDraft.stroke();
			} else {
				this.contextDraft.lineJoin = "round";
				this.contextDraft.clearRect(
					0,
					0,
					canvasDraft.width,
					canvasDraft.height
				);
				let xDiv = coord[0] - this.origX;
				let yDiv = coord[1] - this.origY;
				let center = [this.origX + xDiv / 2, this.origY + yDiv / 2];
				// let radius = 0.5 * Math.sqrt(xDiv ** 2 + yDiv ** 2);
				let radiusX = Math.abs(xDiv) / 2;
				let radiusY = Math.abs(yDiv) / 2;
				this.contextDraft.beginPath();
				this.contextDraft.ellipse(
					center[0],
					center[1],
					radiusX,
					radiusY,
					0,
					2 * Math.PI,
					false
				);
				this.contextDraft.stroke();
			}
		}
	}
	onMouseUp(coord) {
		if (this.click == 0) {
			this.origX = coord[0];
			this.origY = coord[1];
			this.click++;
		} else if (this.click == 1) {
			if (regularFix) {
				this.contextReal.lineJoin = "round";
				this.contextDraft.clearRect(
					0,
					0,
					canvasDraft.width,
					canvasDraft.height
				);
				let xDiv = coord[0] - this.origX;
				let yDiv = coord[1] - this.origY;
				let center = [this.origX + xDiv / 2, this.origY + yDiv / 2];
				let radius = 0.5 * Math.sqrt(xDiv ** 2 + yDiv ** 2);
				// let radiusX = Math.abs(xDiv) / 2;
				// let radiusY = Math.abs(yDiv) / 2;
				this.contextReal.beginPath();
				this.contextReal.arc(
					center[0],
					center[1],
					radius,
					0,
					2 * Math.PI,
					false
				);
				this.contextReal.stroke();
				this.click = 0;
			} else {
				this.contextReal.lineJoin = "round";
				this.contextDraft.clearRect(
					0,
					0,
					canvasDraft.width,
					canvasDraft.height
				);
				let xDiv = coord[0] - this.origX;
				let yDiv = coord[1] - this.origY;
				let center = [this.origX + xDiv / 2, this.origY + yDiv / 2];
				// let radius = 0.5 * Math.sqrt(xDiv ** 2 + yDiv ** 2);
				let radiusX = Math.abs(xDiv) / 2;
				let radiusY = Math.abs(yDiv) / 2;
				this.contextReal.beginPath();
				this.contextReal.ellipse(
					center[0],
					center[1],
					radiusX,
					radiusY,
					0,
					2 * Math.PI,
					false
				);
				this.contextReal.stroke();
				this.click = 0;
			}
		}
	}
	onMouseLeave() {}
	onMouseEnter() {}

	draw(x, y) {
		//
		this.context.lineTo(x, y);
		this.context.moveTo(x, y);
		this.context.closePath();
		// Draw the line onto the page
		this.context.stroke();
	}
}
