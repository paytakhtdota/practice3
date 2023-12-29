let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let cg = canvas.getContext("2d");
const pi = Math.PI;
function randomMaker(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

class Ball {
    constructor() {
        this.r = randomMaker(10, 75);
        this.x = randomMaker(0 + this.r, window.innerWidth - this.r);
        this.y = randomMaker(0 + this.r, window.innerHeight - this.r);
        this.vx = (Math.random() - 0.5) * 50;
        this.vy = (Math.random() - 0.5) * 50;
        this.color = "#"+randomMaker(4369, 65535).toString(16);
        this.draw();
    }
    draw() {
        cg.beginPath();
        cg.arc(this.x, this.y, this.r, 0, 2 * pi);
        cg.fillStyle = this.color;
        cg.fill();
    }
    update(){
        if(this.x + this.r > window.innerWidth || this.x - this.r < 0) {
            this.vx = -this.vx;
        }
        if (this.y + this.r > window.innerHeight || this.y - this.r < 0) {
            this.vy = -this.vy;
        }
        this.x += this.vx;
        this.y += this.vy;
        this.draw();
    }
}

let balls = [];
for (let i= 0; i<40; i++){
    balls.push(new Ball);
}


function animate() {
    cg.clearRect(0, 0, window.innerWidth, window.innerHeight);
    balls.forEach(ball=>{
        ball.update();
    })
    requestAnimationFrame(animate);
}
animate();




/*
let r = 200;
let x = randomMaker(0+r,window.innerWidth-r);
let y = randomMaker(0+r,window.innerHeight-r);
let vx = 10;
let vy = 10;

let drawer = function(){
    cg.clearRect(0,0,window.innerWidth,window.innerHeight);
    cg.beginPath();
    cg.arc(x,y,r,0,pi*2);
    cg.fillStyle="red";
    cg.fill();
    
    if(x+r > window.innerWidth || x-r < 0){
    vx= -vx;
    }
    if(y+r > window.innerHeight || y-r < 0){
        vy= -vy;
        }
    x += vx;
    y += vy;
    requestAnimationFrame(drawer);
    };

    function randomMaker(min,max){
        return Math.floor(Math.random() * (max-min + 1)+min)
    }

    drawer();
    */