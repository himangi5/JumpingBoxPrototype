var canvas;
var music;
var s1, s2, s3, s4;
var box;
var edges;

function preload(){
    music = loadSound("sound_3.mp3");
}


function setup(){
    canvas = createCanvas(727,600);

    //create 4 different surfaces
    s1 = createSprite(90,589,180,20);
    s1.shapeColor = "red";
    s2 = createSprite(272,589,180,20);
    s2.shapeColor = "blue";
    s3 = createSprite(454,589,180,20);
    s3.shapeColor = "indigo";
    s4 = createSprite(636,589,180,20);
    s4.shapeColor = "yellow";

    //create box sprite and give velocity
    box = createSprite(Math.round(random(20,672)),height/2,30,30);
    box.shapeColor = "white";
    box.velocityX = 4;
    box.velocityY = -7;


}

function draw() {
    background(rgb(119,239,219));
    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);
    
    
    text(mouseX + ","+  mouseY, mouseX,mouseY);
    
    //add condition to check if box touching surface and make it box
    if(s1.isTouching(box) && box.bounceOff(s1)){
        box.shapeColor = "red";
    }
    if(s2.isTouching(box) && box.bounceOff(s2)){
        box.shapeColor = "blue";   
        music.play(); 
    }
    if(s3.isTouching(box)){
        box.shapeColor = "indigo";
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }
    if(s4.isTouching(box) && box.bounceOff(s4)){
        box.shapeColor = "yellow";
    }

    
    drawSprites();
}