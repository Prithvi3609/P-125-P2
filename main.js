difference = 0;
left_wristx = 0;
right_wristx = 0;
function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,500);
    canvas.position(560,150);
    //maginleft,margintop
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded()
{
  console.log("PoseNet is initialized");
}

function draw()
{
    background('#6C91C2');
    textSize(difference);
    fill('#FFE787')
    text('Prithvi',50,400);
    document.getElementById("empty").innerHTML = " The font's size is = " + difference +"px";
}
function gotPoses(results)
{
    if(results.length>0)
    {
      console.log(results);
      left_wristx = results[0].pose.leftWrist.x;
      right_wristx = results[0].pose.rightWrist.x;
      difference = floor(left_wristx - right_wristx);
      console.log("left_wristx =" + left_wristx + "right_wristx =" + right_wristx + "Difference =" + difference);
    }
}