class Fill extends PaintFunction {
	// This class extends the PaintFunction class
	constructor(contextReal, contextDraft) {
		super();
		this.contextReal = contextReal;
		this.contextDraft = contextDraft;
	}

	onMouseDown(coord, event) {
		this.contextReal.fillStyle = canvasSettings.colorFill;
		let sameColor = [];
		let sameColorUp = [];
		let sameColorDown = [];
		let sameColorLeft = [];
		let sameColorRight = [];
		this.origX = coord[0];
		this.origY = coord[1];
		sameColorUp.push(coord);
		function imagesdata(coord) {
			let color = contextReal.getImageData(coord[0], coord[1], 1, 1).data;
			return [color[0], color[1], color[2]].join("");
		}
		let currentColor = imagesdata(coord);
		let checked = [];
		checked.push(coord);
		function checkUp(coord) {
			let up = [coord[0], coord[1] - 1];
			let down = [coord[0], coord[1] + 1];
			let left = [coord[0] - 1, coord[1]];
			let right = [coord[0] + 1, coord[1]];
			// console.log("around", coord);
			function checking(coord) {
				// console.log("checking", coord);
				if (checked.includes(coord)) {
					// console.log("done", coord);
					return;
				} else {
					if (imagesdata(coord) == currentColor) {
						// console.log("include", coord);
						sameColorUp.push(coord);
						checked.push(coord);
						checkUp(coord);
					} else {
						// console.log("exclude", coord);
						checked.push(coord);
					}
				}
			}
			checking(up);
			// checking(down);
			// checking(left);
			// checking(right);
		}
		checkUp(coord);
		function checkDown(coord) {
			let up = [coord[0], coord[1] - 1];
			let down = [coord[0], coord[1] + 1];
			let left = [coord[0] - 1, coord[1]];
			let right = [coord[0] + 1, coord[1]];
			// console.log("around", coord);
			function checking(coord) {
				// console.log("checking", coord);
				if (checked.includes(coord)) {
					// console.log("done", coord);
					return;
				} else {
					if (imagesdata(coord) == currentColor) {
						// console.log("include", coord);
						sameColorDown.push(coord);
						checked.push(coord);
						checkDown(coord);
					} else {
						// console.log("exclude", coord);
						checked.push(coord);
					}
				}
			}
			checking(down);
			// checking(down);
			// checking(left);
			// checking(right);
		}
		checkDown(coord);

		function checkLeft(coord) {
			let up = [coord[0], coord[1] - 1];
			let down = [coord[0], coord[1] + 1];
			let left = [coord[0] - 1, coord[1]];
			let right = [coord[0] + 1, coord[1]];
			// console.log("around", coord);
			function checking(coord) {
				// console.log("checking", coord);
				if (checked.includes(coord)) {
					// console.log("done", coord);
					return;
				} else {
					if (imagesdata(coord) == currentColor) {
						// console.log("include", coord);
						sameColorLeft.push(coord);
						checked.push(coord);
						checkLeft(coord);
					} else {
						// console.log("exclude", coord);
						checked.push(coord);
					}
				}
			}
			checking(left);
			// checking(down);
			// checking(left);
			// checking(right);
		}
		checkLeft(coord);

		function checkRight(coord) {
			let up = [coord[0], coord[1] - 1];
			let down = [coord[0], coord[1] + 1];
			let left = [coord[0] - 1, coord[1]];
			let right = [coord[0] + 1, coord[1]];
			// console.log("around", coord);
			function checking(coord) {
				// console.log("checking", coord);
				if (checked.includes(coord)) {
					// console.log("done", coord);
					return;
				} else {
					if (imagesdata(coord) == currentColor) {
						// console.log("include", coord);
						sameColorRight.push(coord);
						checked.push(coord);
						checkRight(coord);
					} else {
						// console.log("exclude", coord);
						checked.push(coord);
					}
				}
			}
			checking(right);
			// checking(down);
			// checking(left);
			// checking(right);
		}
		checkRight(coord);
		function stupid1() {
			sameColorUp.map((coord) => checkLeft(coord));
			sameColorUp.map((coord) => checkRight(coord));
		}

		function stupid2() {
			sameColorDown.map((coord) => checkLeft(coord));
			sameColorDown.map((coord) => checkRight(coord));
		}
		function stupid3() {
			sameColorLeft.map((coord) => checkUp(coord));
			sameColorLeft.map((coord) => checkDown(coord));
			sameColorRight.map((coord) => checkUp(coord));
			sameColorRight.map((coord) => checkDown(coord));
		}
		function stupid4() {
			sameColorRight.map((coord) => checkUp(coord));
			sameColorRight.map((coord) => checkDown(coord));
		}
		stupid1();
		stupid2();
		stupid3();
		stupid4();

		// console.log(checked);
		// console.log(sameColor);
		sameColorUp.map((coord) =>
			this.contextReal.fillRect(coord[0], coord[1], 1, 1)
		);
		sameColorDown.map((coord) =>
			this.contextReal.fillRect(coord[0], coord[1], 1, 1)
		);
		sameColorLeft.map((coord) =>
			this.contextReal.fillRect(coord[0], coord[1], 1, 1)
		);
		sameColorRight.map((coord) =>
			this.contextReal.fillRect(coord[0], coord[1], 1, 1)
		);
	}
	onDragging(coord, event) {}

	onMouseMove(coord, event) {}
	onMouseUp(coord, event) {}
	onMouseLeave() {}
	onMouseEnter() {}
	reset() {}
}

// function checkAround(coord) {
// 	let up = [coord[0], coord[1] - 1];
// 	let down = [coord[0], coord[1] + 1];
// 	let left = [coord[0] - 1, coord[1]];
// 	let right = [coord[0] + 1, coord[1]];
// 	// console.log("around", coord);
// 	function checking(coord) {
// 		console.log("checking", coord);
// 		if (checked.includes(coord)) {
// 			// console.log("done", coord);
// 			return;
// 		} else {
// 			if (imagesdata(coord) == currentColor) {
// 				// console.log("include", coord);
// 				sameColor.push(coord);
// 				checked.push(coord);
// 				checkAround(coord);
// 			} else {
// 				// console.log("exclude", coord);
// 				checked.push(coord);
// 			}
// 		}
// 	}
// 	checking(direction);
// 	// checking(down);
// 	// checking(left);
// 	// checking(right);
// }
// checkAround(coord);
