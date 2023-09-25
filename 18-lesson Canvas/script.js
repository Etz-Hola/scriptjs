const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");


// context.lineWidth = 20
// context.strokeStyle = "red"
// context.beginPath();
// context.moveTo(0, 0);
// context.lineTo(250, 250);
// context.lineTo(250, 500);
// context.moveTo(500, 0);
// context.lineTo(250, 250);
// context.stroke();




// context.lineWidth =10
// context.fillStyle = "skyBlue"
// context.beginPath();
// context.moveTo(250, 0);
// context.lineTo(0, 250);
// context.lineTo(500, 250);
// context.fill()



// context.fillStyle = 'yellow'
// context.fillRect(0, 0, 250, 250)
// context.strokeStyle = 'black'
// context.strokeRect(0, 250, 250, 250)

context.font = '30px MV Boli';
context.fillStyle = 'red';
context.textAlign = "center";
context.fillText('canvas is canvas my people', canvas.width/ 2, canvas.height / 2);