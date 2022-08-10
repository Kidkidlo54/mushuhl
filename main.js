x=0;
y=0;
function preload(){
    mush=loadImage('https://i.postimg.cc/ZnXWp21b/download.png');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on("poses", gotPoses);
}
function modelLoaded(){
    console.log("pose is actiove");
}
function draw(){
    image(video, 0,0,300,300);
    image(mush, x, y, 80, 35);

}
function take_snap(){
    save("MushstashFaceFilterImage.png");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        x=results[0].pose.nose.x-40;
        y=results[0].pose.nose.y;
        console.log("nosex= "+x)
        console.log("nosey= "+y)
    }
}