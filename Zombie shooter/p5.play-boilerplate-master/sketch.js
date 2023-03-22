var bg,zombie_R1,zombie_R2,zombie_L1,zombie_L2
var shooter,shooting_R,shooter_inv,shooting_L
var zombieGroup;
var bulletGroup
var zombie,zombieL
var bullet
var bullets
var ammo = 50
function preload(){

  bg = loadImage("./assets/bg.jpg")
  zombie_R1 = loadImage("./assets/zombie_L.png")
  zombie_R2 = loadImage("./assets/download_L.png")
  shooter = loadImage("./assets/shooter_2.png")
  shooter_inv = loadImage("./assets/shooter_2_inv.png")
  zombie_L1 = loadImage("./assets/zombie.png")
  zombie_L2 = loadImage("./assets/download.png")
  bullet = loadImage("./assets/bullet.png")
  shooting_R = loadImage("./assets/shooting_1.png")
  shooting_L = loadImage("./assets/shooting_1_inv.png")

}

function setup() {
  createCanvas(1400,500);
  
  


  player = createSprite(200, 400, 50, 50);
  player.addImage(shooter)
  player.scale = 0.15


  zombieGroup = new Group()
  bulletGroup = new Group()

}

function draw() {
  background(bg);  

   
  if(keyDown("RIGHT_ARROW")){
    player.x += 5
    player.addImage(shooter)
  }
  if(keyDown("LEFT_ARROW")){
   player.x -= 5
   player.addImage(shooter_inv)
  }

  if(keyWentDown("SPACE")){
    if(keyDown("RIGHT_ARROW")){
      var bullets = createSprite(player.x,player.y,50,50)
  bullets.addImage(bullet)
  bullets.velocityX = 4
  bullets.scale = 0.2
  bulletGroup.add(bullets)
  ammo - 1
    }else
    if(keyDown("LEFT_ARROW")){
      var bullets = createSprite(player.x,player.y,50,50)
  bullets.addImage(bullet)
  bullets.velocityX = -4
  bullets.scale = 0.2
  bulletGroup.add(bullets)
  ammo - 1
    }

  }

  if(keyDown("SPACE")){
    if(keyDown("RIGHT_ARROW")){
      player.addImage(shooting_R)
      player.x -=5
      //bulletGroup.setvelocityXEach(4)

    }else
    if(keyDown("LEFT_ARROW")){
      player.addImage(shooting_L)
      player.x +=5
     // bulletGroup.setvelocityXEach(-4)
    }

  }

  if(zombieGroup.isTouching(bulletGroup)){
  for(var i=0;i<zombieGroup.length;i++){     
      
   if(zombieGroup[i].isTouching(bulletGroup)){
        zombieGroup[i].destroy()
        bulletGroup.destroyEach()
       
        } 
  
  }
}

 


  
  spawnZombie() 
  spawnZombieLeft()

  drawSprites();

 
}

function spawnZombie(){
  if(frameCount%200 ===0){

    zombie = createSprite(random(1450,1550),385,50,50)
     var rand = Math.round(random(1,2))
    switch(rand) {
      case 1: zombie.addImage(zombie_R1)
      zombie.scale = 0.69
              break;
      case 2: zombie.addImage(zombie_R2);
      zombie.scale = 0.3
    }
    zombie.velocityX = -3;
    zombieGroup.add(zombie)

  }
}


function spawnZombieLeft(){
  if(frameCount%200 ===0){

    zombieL = createSprite(random(-50,-250),395,50,50)
    var rand1 = Math.round(random(1,2))
    switch(rand1) {
      case 1: zombieL.addImage(zombie_L1)
      zombieL.scale = 0.69
              break;
      case 2: zombieL.addImage(zombie_L2);
      zombieL.scale = 0.3
    }
    zombieL.velocityX = 3
    zombieGroup.add(zombieL)
  }
}

