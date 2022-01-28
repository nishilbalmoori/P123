var capture;
var x;
var y;
var distL;
var distR;
var diff;
var poseNet;

function setup(){
    createCanvas(400,400).position(500,200);

    capture = createCapture(VIDEO);
    capture.size(400,400);
    capture.position(950,200);

    poseNet = ml5.poseNet(capture, loaded);
    poseNet.on('pose', gotPoses);
}

function loaded(){
    console.log("IT'S RUNNING, FINALLY!...\n back to my divorce papers.");
}

function gotPoses(r){
    if(r.length > 0){

        console.log("Info:\n", r.length+"\n", r);

        x = r[0].pose.nose.x;
        y = r[0].pose.nose.y;

        distL = r[0].pose.leftWrist.x;
        distR = r[0].pose.rightWrist.y;

        diff =  abs(floor(distL-distR))

        console.log("Square Info:\n",
        x+"\n", y+"\n", distL+"\n", distR+"\n", diff)
    }
}

function draw(){
    background(245);

    fill(0);
    textSize(diff)
    text("Nishil",x, y);
}