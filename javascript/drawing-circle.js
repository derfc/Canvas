class DrawingCircle extends PaintFunction {
  // This class extends the PaintFunction class
  // You are only passing one instance here

  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }
  //****** coord[0] and coord[1] is wherever the user is placing  the mouse position is ***** */
  // the draft is the preview of what the shape looks like.
  // the real is when the mouse is released and the final shape is committed to the canvas
  onMouseDown(coord, event) {
    this.contextReal.fillStyle = "#f44";
    this.origX = coord[0];
    this.origY = coord[1];
  }

  onDragging(coord, event) {
    // Manipulating the context draft circle via mouse dragging
    // Fill in the color
    // this.contextDraft.strokeStyle = "#f44"; //Sets the style for shapes' outlines.  i.e. empty shape
    // Kind of line
    this.contextDraft.fillStyle = "green"; //Sets the style used when filling shapes.
    this.contextDraft.lineJoin = "round"; //determines the shape used to join two line segments where they meet.  ctx.lineJoin = "bevel" || "round" || "miter"
    // Width of line
    this.contextDraft.lineWidth = 5;
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height); // clears the canvas first

    // Allows you to actually draw out your squares
    // Drawing the draft circle here
    let radius = coord[0] - this.origX; // the size of circle is dependent upon distance from radius  i.e. difference from center
    // don't need coord[1] i.e. the y axis bc the circel doesn't expand from center, but it expands from the circumfercne. so no need for center
    this.contextDraft.beginPath();
    this.contextDraft.arc(coord[0], coord[1], radius, 0, 2 * Math.PI, false);
    this.contextDraft.stroke();
    // this.contextDraft.fill();

    // looks at the fill / unfill checkbox to see if checked or not by using prop() method
    // if checked, will invoke the this.contextDradt.fill method
    this.isFillRequired = $("#togglefill").prop("checked");
    if (this.isFillRequired) {
      this.contextDraft.fill();
    }

    //////////////////////toggle fill or unfill  /////////////////////
    // $('input[type="checkbox"]').click(function () {
    //   if ($(this).prop("checked") == true) {
    //     this.contextDraft.fill();
    //   } else if ($(this).prop("checked") == false) {
    //     alert("not filled up");
    //   }
    // });
  }

  onMouseMove() {}
  onMouseUp(coord) {
    // Clearing the draft rectangle first
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    // Commit that drawing to context real
    // Without this commit, it won't actually draw
    this.contextReal.fillStyle = "#00f";
    // this.contextReal.strokeStyle = "#f44";
    // Kind of line
    this.contextReal.lineJoin = "round";
    // Width of line
    this.contextReal.lineWidth = 5;
    let radius = coord[0] - this.origX;
    this.contextReal.beginPath();
    this.contextReal.arc(coord[0], coord[1], radius, 0, 2 * Math.PI, false);
    this.contextReal.stroke();
    this.isFillRequired = $("#togglefill").prop("checked");
    if (this.isFillRequired) {
      this.contextReal.fill();
    }
    /////////////////////toggle fill or unfill  -------------------------------------------------//
    // $('input[type="checkbox"]').click(function () {
    //   if ($(this).prop("checked") == true) {
    //     this.contextDraft.fill();
    //   } else if ($(this).prop("checked") == false) {
    //     alert("not filled up");
    //   }
    // });
    // alert($("#togglefill").prop("checked"));
  }
  onMouseLeave() {}
  onMouseEnter() {}

  draw(x, y) {
    this.context.lineTo(x, y);
    this.context.moveTo(x, y);
    this.context.closePath();
    // Draw the line onto the page
    this.context.stroke();
  }
}
