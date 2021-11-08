nose_x=0;
nose_y=0;
function preload(){
    clown_nose=loadImage('https://i.postimg.cc/PJVryWM3/clewn-noz.jpg');
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('poses',gotPoses);
}
function modelLoaded(){
    console.log('PoseNet Initisalized');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
        console.log("nosex="+nose_x);
        console.log("nosey="+nose_y);
    }
}

function draw(){
    image(video,0,0,300,300);
    image(clown_nose, nose_x, nose_y, 50, 30);
}
function take_snapshot(){
    save('myFilterImage.png');
}
