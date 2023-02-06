var dpr = window.devicePixelRatio || 1;
const canvas = document.querySelector("#bg_canvas");
var rect = canvas.getBoundingClientRect();
canvas.width = rect.width * dpr;
const main = document.querySelector("main").clientHeight
canvas.height = main * dpr;
const ctx = canvas.getContext("2d");

//update canvas pixels density on screen resizing (for consistent bubbles quality) 
window.addEventListener("resize", function(){
    var dpr = window.devicePixelRatio || 1;
    var rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    const main = document.querySelector("main").clientHeight
    canvas.height = main * dpr;  
})

const background = new Bubbles_handler(canvas, ctx, 4, 8, 0.6, 1, 80);

//animate bubbles
function start_bubbles_animation(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    background.animate();

    requestAnimationFrame(start_bubbles_animation);
}

//run
window.onload = function(){
    start_bubbles_animation();
}