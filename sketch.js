var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var obsimg;
var obsgrp;
//var score=0;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  obsimg= loadImage("obstacle1.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight/1);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,280,900,20);
  ground.addImage("ground",groundImage);
  ground.x = displayWidth /2;
  ground.velocityX = -3;
  
  invisibleGround = createSprite(200,290,400,10);
  invisibleGround.visible = false;

  obsgrp= new Group();
 // text("Score: " + score,250, displayHeight/6 );
}

function draw() {
  background(220,230,130);
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  if(frameCount % 200 === 0){
    var obs= createSprite(600,270,20,20);
    obs.addImage(obsimg);
    obs.velocityX= -3;
    obs.scale= 0.5;
    obsgrp.add(obs);}
    //obs.lifetime= displayWidth/4;
    
    if(obsgrp.isTouching(trex)){
      obsgrp.setVelocityXEach(0);
      text("LET ME MOVE!, CHECK CONSOLE",200,displayHeight/2);
      //trex.addAnimation("collided", trex_collided);
      //trex.velocityY= 5;
     // text("Game over",200,200);
      text.scale= 30;
     // obsgrp.setVisibilityEach(false);
      ground.velocityX=0;
      
      //obsgrp.setPositionXEach= 0;
      console.log("GAME OVER, * TRIGGERD*");
     // trex.velocityY=-5;
     // trex.velocityY=0;
    
  }
  /*if(obsgrp.velocityX===0){
    obsgrp.destroyEach();
      obsgrp= null;
  }*/
  camera.position.x = trex.x*5;
  camera.position.y = trex.y;
  trex.velocityY = trex.velocityY + 0.8;
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  text("RUN, GROUND FALLING",200,displayHeight/4);
  trex.collide(invisibleGround);
  drawSprites();
}
