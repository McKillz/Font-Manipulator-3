rightWristX = 0;
leftWristX = 0;
difference = 0;


function setup(){
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(10,50);

    canvas = createCanvas(800,400);
    canvas.position(430,130);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}

function draw(){
    background("#5196e3");
    textSize(difference);
    fill("#e89e54");
    text("Sean", 150, 250);
}

function modelLoaded(){
    console.log("PoseNet Is Initialized!");
}

function gotposes(results){
 
    if(results.length > 0){
        console.log(results);

        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);



    }
}

