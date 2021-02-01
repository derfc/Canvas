/**********************************************
 * Drawing Line Functionality
 * ==================================
 ***********************************************/
class DrawingArc extends PaintFunction {
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
		this.contextDraft.strokeStyle = canvasSettings.colorStroke;
		this.contextReal.lineWidth = canvasSettings.strokeSize;
		this.contextReal.strokeStyle = canvasSettings.colorStroke;
		// this.context.lineJoin = "round";
		// this.context.lineWidth = 5;
		// this.context.beginPath();
		// this.context.moveTo(coord[0], coord[1]);
		// if (this.click === 0) {
		//   this.origX = coord[0];
		//   this.origY = coord[1];
		//   this.click++;
		//   console.log("click number", this.click, [this.origX, this.origY]);
		// } else if (this.click === 1) {
		//   var cpx0 = coord[0];
		//   var cpy0 = coord[1];
		//   this.endx0 = coord[0];
		//   this.endy0 = coord[0];
		//   // console.log("mooving coor", cpx0, cpy0);
		//   this.contextDraft.beginPath();
		//   this.contextReal.beginPath();
		//   this.contextDraft.moveTo(this.origX, this.origY);
		//   this.contextReal.moveTo(this.origX, this.origY);
		//   this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
		//   this.contextDraft.quadraticCurveTo(cpx0, cpy0, this.endx0, this.endy0);
		//   this.contextDraft.stroke();
		//   this.click++;
		//   console.log(
		//     "click number",
		//     this.click,
		//     [cpx0, cpy0],
		//     [this.endx0, this.endy0]
		//   );
		// } else if (this.click === 2) {
		//   var cpx0 = coord[0];
		//   var cpy0 = coord[1];
		//   this.contextReal.moveTo(this.origX, this.origY);
		//   this.contextReal.quadraticCurveTo(cpx0, cpy0, this.endx0, this.endy0);
		//   this.contextDraft.stroke();
		//   console.log(
		//     "click number",
		//     this.click,
		//     [cpx0, cpy0],
		//     [this.endx0, this.endy0]
		//   );
		//   this.click = 0;
		//   console.log("end of stroy", this.click);
		// }
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
			this.contextDraft.quadraticCurveTo(endptx, endpty, endptx, endpty);
			this.contextDraft.stroke();
		} else if (this.click === 2) {
			var cp1x = coord[0];
			var cp1y = coord[1];
			// console.log("mooving coor", cpx0, cpy0);
			this.contextDraft.beginPath();
			this.contextDraft.moveTo(this.origX, this.origY);
			this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
			this.contextDraft.quadraticCurveTo(cp1x, cp1y, this.endptx, this.endpty);
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
			this.endptx = coord[0];
			this.endpty = coord[1];
			// console.log("mooving coor", cpx0, cpy0);
			this.contextDraft.beginPath();
			this.contextDraft.moveTo(this.origX, this.origY);
			this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
			this.contextDraft.quadraticCurveTo(
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
			this.contextReal.beginPath();
			this.contextReal.moveTo(this.origX, this.origY);
			this.contextReal.quadraticCurveTo(
				this.cp1x,
				this.cp1y,
				this.endptx,
				this.endpty
			);
			this.contextReal.stroke();
			console.log(
				"click number",
				this.click,
				"ctrl pt1",
				[this.cp1x, this.cp1y],
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
