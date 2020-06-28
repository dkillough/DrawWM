/* HTML Canvas reference: https://www.w3schools.com/TAgs/ref_canvas.asp and https://www.w3schools.com/graphics/canvas_drawing.asp
   Updated for line drawing w help from StackOverflow. Needs to be updated to touch elements for 8thwall. */ 

// init canvas
var canvas = document.createElement('canvas');
document.body.appendChild(canvas);

// reference canvas
var context = canvas.getContext('2d');
resize(); //make a function in case user resizes window

// resize canvas if user changes window
function resize() {
  context.canvas.width = window.innerWidth;
  context.canvas.height = window.innerHeight;
}

// init position
var pos = { x: 0, y: 0 };

// update position
function setPos(e) {
  pos.x = e.clientX;
  pos.y = e.clientY;
}

function draw(e) { //drawing method
  if (e.buttons !== 1) return; // discount mouseup() method

  context.beginPath(); // init path
  
  // LINE WEIGHT. 
  context.lineWidth = 5;
  
  // LINE TYPE. Options include {"round", "butt", "square"}
  context.lineCap = 'round';
 
  // LINE COLOR. ANY HEX
  context.strokeStyle = '#000000'; 
  
  context.moveTo(pos.x, pos.y); // record start position
  setPos(e); // update position
  context.lineTo(pos.x, pos.y); // create line object from start to new position
  context.stroke(); // actually display the line
}

window.addEventListener('resize', resize); //update drawing canvas if user adjusts
document.addEventListener('mousemove', draw); // only draw on mouse move && m1 held
document.addEventListener('mousedown', setPos); // reset position when mouse click
document.addEventListener('mouseenter', setPos); // reset position if start drawing from outside of the frame

/* CANVAS TO IMAGE METHOD; CALL W BUTTON PRESS */
function canv2img(canv) {
  var img = new Image();
  img.src = canv.toDataURL("image/jpeg", 0.92); // value between 0 and 1 determines quality. 0.92 default.
  console.log(img.src);
  return img;
}

function clearCanvas() {
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function changeColor() {
  context.strokeStyle = "red"; 
}