let canvas = document.getElementById("canvas1");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");

function randomMaker(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

this.screen = {
    width: window.innerWidth,
    height: window.innerHeight
}

this.mouse = {
    x: screen.width / 2,
    y: screen.height / 2
}


class Ball {
    constructor(r, x, y, dx, dy, color) {
        this.gravity = 1;
        this.friction  = 0.65;
        this.r = r || 40;
        this.x = x || randomMaker(0 + this.r, window.innerWidth - this.r);
        this.y = y || randomMaker(0 + this.r, window.innerHeight - this.r);
        this.dx = dx || (Math.random() - 0.5) * 8;
        this.dy = dy || (Math.random()) * 4;
        this.color = color || "#"+randomMaker(1118481, 16777215).toString(16);
        this.draw();
    }
    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
        c.fillStyle = this.color;
        c.fill();
    }
    update() {
        if(this.y + this.r + this.dy >= screen.height){
            this.dy = -this.dy * this.friction;
        }else{
            this.dy += this.gravity
        }
        if(this.x + this.r + this.dx >= screen.width || this.x + this.r + this.dx <= 0){
            this.dx = - this.dx;
        }
        this.y+= this.dy;
        this.x+= this.dx;
        if(this.dx > 0){this.dx -=0.01}
        else if(this.dx<0){this.dx +=0.01}
        this.draw();

    }
}

class Canvas{
    constructor() {
        this.balls = [];
        for (let i = 0; i < 25; i++) {
            this.balls.push(new Ball())
        }
    }
    animate() {
        c.clearRect(0, 0, window.innerWidth, window.innerHeight)
        this.balls.forEach(ball => {
            ball.update()
        })
        requestAnimationFrame(this.animate.bind(this));
    }
}

let mycan = new Canvas();
mycan.animate();

window.addEventListener("click", function (e) {
    balls.push(new Ball(e.clientX, e, clientY))
})

window.addEventListener("mousemove", function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
})

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

