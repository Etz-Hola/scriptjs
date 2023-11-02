const myCanvas = document.getElementById('myCanvas');
const context = myCanvas.getContext('2d')

// **********Create 'Y'
// context.lineWidth = 20
// context.strokeStyle = 'red'
// context.beginPath();
// context.moveTo(0, 0)
// context.lineTo(250, 250);
// context.lineTo(250, 500);
// context.moveTo(500, 0)
// context.lineTo(250, 250);
// context.stroke()


// **************CREATE TRIANGLE ***********
// context.fillStyle = 'red'
// context.beginPath();
// context.moveTo(250, 0)
// context.lineTo(0, 250);
// context.lineTo(500, 250);
// context.fill();

// **************CREATE RECTANGLE ***********
// context.fillStyle = 'yellow'
// context.fillRect(0, 0, 250, 250)
// context.strokeStyle = 'black'
// context.strokeRect(0, 250, 250, 250)

// ************** FILL TEXT ***********
context.font = '50px MV Boli'
context.fillStyle = 'red'
context.textAlign = 'center'
context.fillText('GAME OVER', myCanvas.width/2, myCanvas.height/2)