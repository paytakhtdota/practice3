let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let cg = canvas.getContext("2d");

cg.translate(100,100);

cg.fillStyle = "#806fe5";
cg.fillRect(100,0,100,100);
cg.fillStyle = "#ee6fe5";
cg.fillRect(200,150,250,100);

cg.font = "2em Dina";
cg.fillStyle = "#539450";
cg.fillText("hellp World!", -25, -25)

cg.fillStyle = "#3e6fe5";
cg.fillRect(450,300,100,100);

cg.beginPath()
cg.lineTo(500,100);
cg.lineTo(500,300);
cg.lineTo(700,300);
cg.lineTo(500,100);
cg.strokeStyle = "#504090"
cg.stroke();

cg.beginPath();
cg.lineTo(705,95);
cg.lineTo(505,95);
cg.lineTo(705,295);
//cg.lineTo(705,95); این نقطه اخر است که می توان به جای این از متود زیر استفاده کنید
cg.closePath()
cg.strokeStyle = "#904090"
cg.stroke();

cg.beginPath();
cg.arc(750,700,250, Math.PI+0.38 , Math.PI+2.75)
cg.stroke();
