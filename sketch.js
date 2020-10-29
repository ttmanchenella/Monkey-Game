var monkey;
var monkey_running;
var banana;
var bananaImage; 
var obstacle;
var obstacleImage; 
var obstacleGroup;
var score;
var survivalTime=0;
var score=0;
var gravity;

function preload(){
  monkey_running = loadAnimation ("sprite_0.png", "sprite_1.png","sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png"); 
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  bananaGroup = new Group();
  obstacleGroup = new Group();
}
 
function setup() {
  createCanvas(600,400);
  
  monkey = createSprite(100,350,900,10)
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale = 0.1;
  gravity = 2;
  
  ground = createSprite(600,390,1200,25);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
}

function draw() {
  background("lightblue");
  
  if(ground.x<0) {
    ground.x = ground.width/2;
  }
  
    if(keyDown("space") && monkey.collide(ground)) {
      monkey.velocityY = -18;
    }
    monkey.velocityY = monkey.velocityY + 0.8;
  
    monkey.collide(ground)
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: " + score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: " + survivalTime,100,50);
  
  spawnBanana();
  spawnObstacle();
  
  drawSprites();
  
}

function spawnBanana() {
  if (frameCount % 80 == 0) {
    banana = createSprite(600,random(120,200),20,20);
    banana.addAnimation("banana", bananaImage);
    banana.scale = 0.13;
    
    banana.velocityX = -5;
    banana.setLifetime = 100;
    
    bananaGroup.add(banana);
  }
}

function spawnObstacle() {
  if (frameCount % 300 == 0) {
    obstacle = createSprite(650,360,20,20);
    obstacle.addAnimation("obstacle", obstacleImage);
    obstacle.scale = 0.15;
    
    obstacle.velocityX = -5;
    obstacle.setLifetime = 100;
    
    obstacleGroup.add(obstacle);
  }
}