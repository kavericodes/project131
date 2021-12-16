function back(){
    window.location = "home.html";
}

img1 = "";

function preload(){
    img1 = loadImage("bottle.jpeg");
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
}
