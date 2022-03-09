function preload(){

}
function setup(){
canvas=createCanvas(900,700);
canvas.position(250,150);
video=createCapture(VIDEO);
video.hide();
}
function draw(){
    fill("green");
    circle(130,70,70);
    circle(130,500,70);
    image(video,170,150,600,300);
    circle(800,70,70);
    circle(800,500,70);
    fill("aqua");
    rect(107,105,40,360);
    rect(780,105,40,360);
    rect(165,50,600,40);
    rect(165,480,600,40);
}
function take_snapshot(){
    save("MyFilterImage.png");
}
