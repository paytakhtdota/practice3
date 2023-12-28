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
cg.fillRect(450,320,100,100);

cg.beginPath()
cg.lineTo(500,100);
cg.lineTo(500,300);
cg.lineTo(700,300);
cg.lineTo(500,100);
cg.strokeStyle = "#504090"
cg.fillStyle = "lightblue"
cg.fill();
cg.stroke();

cg.beginPath();
cg.lineTo(705,95);
cg.lineTo(505,95);
cg.lineTo(705,295);
//cg.lineTo(705,95); این نقطه اخر است که می توان به جای این از متود زیر استفاده کنید
cg.closePath()
cg.fillStyle = "lightblue"
cg.fill();
cg.strokeStyle = "#904090"
cg.stroke();

const pi =Math.PI;
cg.beginPath();
cg.arc(750,700,250, pi*1.13 , pi*1.86)
cg.stroke();
cg.closePath()



let drawer = function(r){
cg.beginPath();
cg.arc(1000,800,r,0,pi*2);
cg.stroke();

};

for(let i = 0 ; i < 100 ; i++){
let r =50; r= (7.5*i) + r;
console.log(r);
drawer(r);
};

