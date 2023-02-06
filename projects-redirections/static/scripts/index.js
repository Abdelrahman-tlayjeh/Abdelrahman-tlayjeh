var dpr = window.devicePixelRatio || 1;

//canvas layer1
const CANVAS1 = document.querySelector("#canvas1");
var rect = CANVAS1.getBoundingClientRect();
CANVAS1.width = rect.width * dpr;
CANVAS1.height = rect.height * dpr * 4;
const CTX1 = CANVAS1.getContext("2d");

//canvas layer2
const CANVAS2 = document.querySelector("#canvas2");
var rect = CANVAS2.getBoundingClientRect();
CANVAS2.width = rect.width * dpr;
CANVAS2.height = rect.height * dpr * 2;
const CTX2 = CANVAS2.getContext("2d");

//canvas layer3 (king)
const CANVAS3 = document.querySelector("#canvas3");
var rect = CANVAS3.getBoundingClientRect();
CANVAS3.width = rect.width * dpr;
CANVAS3.height = rect.height * dpr /3;
const CTX3 = CANVAS3.getContext("2d");

//background
const CANVAS4 = document.querySelector("#canvas4");
var rect = CANVAS4.getBoundingClientRect();
CANVAS4.width = rect.width * dpr;
CANVAS4.height = rect.height * dpr * 6.4;
const CTX4 = CANVAS4.getContext("2d");

//animation handlers
const background = new Bubbles_handler(CANVAS4, CTX4, 0.8, 4, 0.3, 1.2, 800);
const fish_handler = new Fish_handler();


//Load fish info
function load_fish(){
    //layer1
    for (let i = 0; i < info.layer1.length;  i++)
        fish_handler.add_fish(info.layer1[i], CANVAS1, CTX1);
    //layer2
    for (let i = 0; i < info.layer2.length;  i++)
        fish_handler.add_fish(info.layer2[i], CANVAS2, CTX2);
    //layer3 (king an d queen)
    fish_handler.add_fish(info.layer3[0], CANVAS3, CTX3, isKing=true);
    fish_handler.add_fish(info.layer3[1], CANVAS3, CTX3, isKing=false, isQueen=true);
}

//animate fish
function start_fish_animation(){
    //clear canvas
    CTX1.clearRect(0, 0, CANVAS1.width, CANVAS1.height);
    CTX2.clearRect(0, 0, CANVAS2.width, CANVAS2.height);
    CTX3.clearRect(0, 0, CANVAS3.width, CANVAS3.height);
    //draw updated fish
    fish_handler.animate();

    requestAnimationFrame(start_fish_animation);
}

//animate bubbles
function start_bubbles_animation(){
    //clear canvas
    CTX4.clearRect(0, 0, CANVAS4.width, CANVAS4.height);
    //draw updated bubbles
    background.animate();

    requestAnimationFrame(start_bubbles_animation);
}

// run onload
window.onload = function(){
    load_fish();
    start_bubbles_animation();
    start_fish_animation();
}
    