song1="";
song2="";
song="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
scorerightWrist=0;
scoreleftWrist=0;
abc="";
function preload()
{
song1=loadSound("music.mp3");
song2=loadSound("music2.mp3");
}
function setup()
 {
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(600,500);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}
function modelLoaded() 
{
    console.log('PoseNet is started');
}
function gotPoses(results) 
{
     
    if(results.length > 0)
    {
        console.log(results);
        scoreleftWrist=results[0].pose.keypoints[9].score;
        console.log( "scoreleftWrist=" + scoreleftWrist);
        scorerightWrist=results[0].pose.keypoints[10].score;
        console.log( "scorerightWrist=" + scorerightWrist);


        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX=" + leftWristxX + "leftWristY=" + leftWristxY);
       
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX=" + rightWristX + "rightWristY=" + rightWristY);
      }

function draw()
 {
    image( video,0,0,600,500);
    fill("blue");
    stroke("green");
    isPlaying()
    if(scoreleftWrist>0.2)
{
    circle(leftWristX,leftWristY,20);
    if()
    {
    
    }
    else if()
    {
       
    }
}
 }
}
