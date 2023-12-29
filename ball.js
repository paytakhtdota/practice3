const ball = document.querySelector("#ball");

const movement = async function () {
    let i = 0;
    let multi = 0;
    while (i < 141) {
        multi = (5 * i);
        document.querySelector("#ball").style.top = multi + "px";
        i++;
        await new Promise(resolve => setTimeout(resolve, 0.05));
    }
};




const reversMovement = async function () {
    let i = 141;
    let multi = 0;
    while (i > 0) {
        multi = (5 * i);
        document.querySelector("#ball").style.top = multi + "px";
        i--;
        await new Promise(resolve => setTimeout(resolve, 0.05));
    }
};


async function exe() {
    for (let i = 0; i <100;i++){ 
    await movement();
    await reversMovement();}
}

exe();
const ball2=document.querySelector("#ball2");
let offset=-95;

function ballAnimi(){
ball2.style.top = offset+"px";
offset+=2;
requestAnimationFrame(ballAnimi);
}

ballAnimi();