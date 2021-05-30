
function preload() {
}

function setup() {
    canvas = createCanvas(600, 600);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoded);
    poseNet.on("pose", gotPoses);
}

function draw() {
    image(video, 0,0,600,600);
}

function take_snapshot(){
  save('FilteredImage.png');
}

function modelLoded(){
  console.log("model is loded!");
}

function gotPoses(results){
  if (results.length > 0){
console.log(results);
console.log("X of nose is "+ results[0].pose.nose.x);

console.log("Y of nose is"+ results[0].pose.nose.y);
  }
}
