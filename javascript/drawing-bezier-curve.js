/**********************************************
 * Drawing Line Functionality
 * ==================================
 ***********************************************/
class DrawingBezierCurve extends PaintFunction {
	// This class extends the PaintFunction class
	constructor(contextReal, contextDraft) {
		super();
		this.contextReal = contextReal;
		this.contextDraft = contextDraft;
		this.click = 0;
	}

	// On mouse down, ensure that the pen has these features
	onMouseDown(coord, event) {
		this.contextDraft.lineWidth = canvasSettings.strokeSize;
		this.contextDraft.fillStyle = canvasSettings.colorFill;
		this.contextDraft.strokeStyle = canvasSettings.colorStroke;
		this.contextReal.lineWidth = canvasSettings.strokeSize;
		this.contextReal.fillStyle = canvasSettings.colorFill;
		this.contextReal.strokeStyle = canvasSettings.colorStroke;
	}
	onDragging(coord, event) {}

	onMouseMove(coord, event) {
		if (this.click === 1) {
			var endptx = coord[0];
			var endpty = coord[1];
			// console.log("mooving coor", cpx0, cpy0);
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
			// console.log("mooving coor", cpx0, cpy0);
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
			// console.log("mooving coor", cpx0, cpy0);
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
			console.log("click number", this.click, "origional", [
				this.origX,
				this.origY,
			]);
		} else if (this.click === 1) {
			// var cpx0 = coord[0];
			// var cpy0 = coord[1];
			this.endptx = coord[0];
			this.endpty = coord[1];
			// console.log("mooving coor", cpx0, cpy0);
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
			console.log(
				"click number",
				this.click,
				"ctrl pt1",
				[this.endptx, this.endpty],
				"end pt",
				[this.endptx, this.endpty]
			);
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
			console.log(
				"click number",
				this.click,
				"ctrl pt1",
				[this.cp1x, this.cp1y],
				"ctrl pt2",
				[this.endptx, this.endpty],
				"end pt",
				[this.endptx, this.endpty]
			);
			// this.click = 0;
			this.click++;
			console.log("ongoing", this.click);
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
			console.log(
				"click number",
				this.click,
				"ctrl pt1",
				[this.cp1x, this.cp1y],
				"ctrl pt2",
				[this.cp2x, this.cp2y],
				"end pt",
				[this.endptx, this.endpty]
			);
			this.click = 0;
			console.log("end of stroy", this.click);
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
