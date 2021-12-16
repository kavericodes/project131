function back(){
    window.location = "home.html";
}

img2 = "";

function preload(){
    img2 = loadImage("camera.jpeg");
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
}