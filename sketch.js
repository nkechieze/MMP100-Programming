





var diam1 = 0;
var r = 200;
var g = 200;
var b = 500;

function setup() {
    // put setup code here
    createCanvas(500, 500);
}

function draw() {
    // put drawing code here
    background("#000000");

    strokeWeight(5);
    stroke("#DF1C9B");
    line(250, 265, 250, 500);
    
    stroke(1);
    text("Happy Birthday!",160,40);
    textSize(25);

    
    fill(r,g,b);
    stroke("#FFB9F9");
    ellipse(250, 260, diam1, diam1);
    circle(100, 100, 90);
    circle(60, 60, 50);
    circle(60, 300, 125);
    circle(500, 30, 200);
    circle(350, 300, 30);
    circle(440, 370, 100);
    circle(150, 400, 65);
    circle(325, 90, 70);
    
  
  
    
//    ellipse(mouseX - 20, mouseY, diam1, diam1);
    fill("#F6147E");
    stroke("#FFB9F9");
    strokeWeight(5);
    //triangle(250,400,280,480,220,480);
    textStyle(ITALIC);
    noStroke();

    point(450, 470);


}

function mousePressed() {
    if (diam1 >= 230) {
        diam1 = 0;
    } else {
        diam1 = diam1 + 5;
    }
    r = random(0, 255);
    g = random(0, 255);
    b = random(0, 255);
}
