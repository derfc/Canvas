## Important!

Due to massive calculations, we don't recommend using Fill Bucket in large area.

## Shapes Modifiers:

- Control/Command: Fixed the starting as center of current drawing

- Escape: Escape from current drawing, data WILL NOT save.

- Shift: Draw a regular shape (eg. square).

- Alt/C: Fill the current drawing with color selected

- Enter: Closing path when drawing irregular polygons.

## Basic Function

### Spray Can

- Paint the canvas with a rectangle processed by a radial-gradient method.
- Color values are retrieved from the stroke colour selector.

### Stamp

- Create stamping with circle by mouse entering
- Size & color changeable

### Straight line

- Create straight line by mouse click
- Choose the start point and endpoint wherever you need
- Size & color changeable

### Rectangle

- Click and drag to select starting point and size
- Regular Fix available: Draw squares
- Color Fill available

### Circle

- Click and drag to adjust diameters length of irregular circles
- Center Fix available to use starting point as center
- Regular Fix available
- Color Fill available

### Arc

- Click and move to select starting point, and point and control point

### Bezier Curve

- Click and move to select starting point, and point, first control point and second control point.

### Download

- Save the current real-canvas as a png file.

### Polygon

- Click and drag for center and size. Angle can be adjusted by moving cursor around
- Color Fill available

### Irregular Polygon

- Click and move to select starting point and the next point, press enter to close path
- Color Fill available

### Text

- Mouse click for textbox display
- Text input by clicking enter button
- Size & color changeable

### Fill bucket

- Fill color in area within border

### Eraser

- Use ClearRect() to erase any drawn content on the canvas

### Clear All

- Clear all content of both draft and real canvas.

### Undo/Redo

- Click to undo or redo

## UI

App navigation is a scrollable container separated into 2 groups, Main and Utility.

### Main Group;

- Function selector buttons.
- Buttons get highlighted when clicked, indicating the current ‘Mode’ of the app.
- Functions with no ‘Modes’, e.g. ‘Download’ and ‘Clear All’ only get highlighted briefly to provide visual feedback.

### Utility Group:

- Modifiers to change parameter of selected functions, such as colour selectors and stroke size selector.
- Selectors will display currently selected color/size to provide visual feedback.
