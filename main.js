video = "";
status1 ="";
objects=[];


function preload(){
    video = createVideo('video.mp4');
    video.hide();

}

function setup(){
    canvas = createCanvas(480,380);
    canvas.center();
    
}

function draw(){
    image(video,0,0,480,380);
    if(status1 != ""){
        objectDetector.detect(video,gotResult);
        for(i = 0; i < objects.length; i++){

            document.getElementById("status").innerHTML = "Status: Object Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of Objects Detected: " + objects.length;
            fill('#00BFFF');
            percent = floor(100 * objects[i].confidence);
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);

            noFill();
            stroke('#00BFFF');
            rect(objects[i].x - 15, objects[i].y, objects[i].width, objects[i].height);

        }
    }

}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";

}

function modelLoaded(){
    console.log('model loaded');
    status1 = true;
    video.loop();
    video.speed(1);
    video.volume(0);

}
d
function gotResult(error,results){

    if(error){
        console.log(error);

    }
console.log(results);
objects = results;

}


