cog="";
status="";
objects=[];
function preload(){
cog=loadImage('dog_cat.jpg');
}

function setup(){
    canvas=createCanvas(750,420);
    canvas.center();

    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
 //   document.getElementById("status").innerHTML="Status= Object Detected";
}

function modelLoaded(){
    console.log('Model Loaded!!!');
    status=true;
    objectDetector.detect(cog,gotResult);
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects=results;

    }
}

function draw(){
    image(cog,0,0,750,420);

/*   fill("Red");
    text("Doggo",100,85);
    noFill();
    stroke("#ff0000");
    rect(36,72,200,400);

    fill("Yellow");
    text("Cat",250,130);
    noFill();
    stroke("yellow");
    rect(380,70,340,353)
    */

    if(status != ""){
        document.getElementById("status").innerHTML="Status: Object Detected";
        for(var i=0; i < objects.length; i++){

            fill("#42046b");
            percent=floor(objects[i].confidence * 100);
            text(objects[i].label+" "+percent+"%",objects[i].x+20,objects[i].y+20);
            noFill();
            stroke("#42046b");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);

        }
    }
}