img="";
status="";
function preload()
{
img=loadImage("dog_cat.jpg");
}


function setup()
{
canvas=createCanvas(640,450);
canvas.center();
objectDetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="status:detecting objects";
}

function modelLoaded()
{
    console.log("cocossd has loaded!!");
status=true;
objectDetector.detect(img,gotResult);
}

function gotResult(error,results)
{
if(error)
{
    console.log(error);
}
else{console.log(results);







}

}

function draw()
{
image(img,0,0,640,450);
fill('#FF0000');
text("dog",45,80);
noFill();
stroke("#FF0000");
rect(30,50,350,400);

fill('#FF0000');
text("cat",250,80);
noFill();
stroke("#FF0000");
rect(250,60,350,350);
}






