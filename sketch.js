var cat,mouse;
var bgimg,catimg1,catimg2,mouseimg1,mouseimg2;
function preload() {
    bgimg = loadImage("garden.png");
    catimg1 = loadAnimation("cat1.png");
    mouseimg1 = loadAnimation("mouse1.png");
    catimg2 = loadAnimation("cat2.png","cat3.png");
    mouseimg2 = loadAnimation("mouse2.png","mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    cat.createSprite(870,600);
    cat.addAnimation(catimg1);
    mouse.createSprite(200,600);
    mouse.addAnimation(mouseimg1);

}

function draw() {

    background(bgimg);
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
     keyPressed();
     cat.velocityX = 0;
     cat.addAnimation("cat1.png", catImg1);
     cat.x =300;
     cat.scale=0.2;
     mouse.addAnimation("mouse1.png", mouseimg1);
     mouse.scale=0.15;
    }

    drawSprites();
}


function keyPressed(){

  if(keyCode===Left_Arrow){
      mouse.addAnimation("mouseTeasing",mouseimg2);
      mouse.changeAnimation("mouseTeasing");
      mouse.framedelay = 25;
      mouse.velocityX = -15;
      
      cat.addAnimation("catrunning",catimg2);
      cat.changeAnimation("catrunning");
      cat.framedelay = 25;
      cat.velocityX = -15;
  

}
}

