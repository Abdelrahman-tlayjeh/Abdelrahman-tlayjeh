const fish_handler = new Fish_handler();

/*==================== Input handling ====================*/
const start_btn = $("#start");
const input_div = $("#main");

function start() {
    $(start_btn).text("restart");
    $(start_btn.css("background-color", "red"));
    //hide input section
    $(input_div).css("display", "none");
    //run animation function
    start_animation();
    //set restart function
    $(start_btn).click(restart);
}

function restart(){
    location.reload();
}

//start button
$(start_btn).click(start);

//handle input
const submit_id = $("#submit_id");

//load fish with given id
function load_fish(){
    index = $("#id_input").val();
    try{
        $.getJSON(`info//${index}.json`, function(data) {
            fish_handler.add_fish(data, MAIN_CANVAS, CTX1);
      });
      $("#id_input").val("");
    }
    catch (err) {
        alert("An error Occur! Please make sure that enterd id is between 0 and 1101");
    };
}

//submit id button
submit_id.click(load_fish);


/*==================== animations ====================*/
/*====== fish ======*/
const MAIN_CANVAS = document.querySelector("#main_canvas");
const CTX1 = MAIN_CANVAS.getContext("2d");
var dpr = window.devicePixelRatio || 1;
var rect = MAIN_CANVAS.getBoundingClientRect();
MAIN_CANVAS.width = rect.width * dpr;
MAIN_CANVAS.height = rect.height * dpr;

window.addEventListener("resize", function(){
    var dpr = window.devicePixelRatio || 1;
    var rect = MAIN_CANVAS.getBoundingClientRect();
    MAIN_CANVAS.width = rect.width * dpr;
    MAIN_CANVAS.height = rect.height * dpr;  
})


//animate fish
function start_animation(){
    //clear main canvas
    CTX1.clearRect(0, 0, MAIN_CANVAS.width, MAIN_CANVAS.height);
    //animate fish
    fish_handler.animate();

    requestAnimationFrame(start_animation);
}


/*====== bubbles ======*/
var dpr = window.devicePixelRatio || 1;
const BG_CANVAS = document.querySelector("#bg_canvas");
var rect = BG_CANVAS.getBoundingClientRect();
BG_CANVAS.width = rect.width * dpr;
BG_CANVAS.height = rect.height * dpr;
const ctx = BG_CANVAS.getContext("2d");

//update canvas pixels density on screen resizing (for consistent bubbles quality) 
window.addEventListener("resize", function(){
    var dpr = window.devicePixelRatio || 1;
    var rect = BG_CANVAS.getBoundingClientRect();
    BG_CANVAS.width = rect.width * dpr;
    BG_CANVAS.height = rect.height * dpr;  
})

const background = new Bubbles_handler(BG_CANVAS, ctx, 3.5, 6, 0.6, 1, 60);

//animate bubbles
function start_bubbles_animation(){
    ctx.clearRect(0, 0, BG_CANVAS.width, BG_CANVAS.height);
    background.animate();

    requestAnimationFrame(start_bubbles_animation);
}

//animate bubbles onload
window.onload = function(){
    start_bubbles_animation();
}