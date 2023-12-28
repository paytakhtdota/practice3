const ball = document.querySelector("#ball");

const movement = async function () {
    let i = 0;
    let multi = 0;
    while (i < 234) {
        multi = (3 * i) + 100;
        console.log(multi);
        document.querySelector("#ball").style.marginTop = multi + "px";
        console.log(i);
        i++;
        await new Promise(resolve => setTimeout(resolve, 0.05));
    }
};




const reversMovement = async function () {
    let i = 234;
    let multi = 0;
    while (i > 0) {
        multi = (3 * i) + 100;
        console.log(multi);
        document.querySelector("#ball").style.marginTop = multi + "px";
        console.log(i);
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