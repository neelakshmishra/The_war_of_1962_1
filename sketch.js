var player1,p1Img
var enemie1,e1Img,enemie2,e2Img
var fireing,f1Img
var fireingGroup
var enemieGroup
var bgImg

function preload(){
p1Img = loadImage("Img/army soldger.png");
e1Img = loadAnimation("Img/enemie1/1_terrorist_1_Attack1_000.png",
"Img/enemie1/1_terrorist_1_Attack1_001.png",
"Img/enemie1/1_terrorist_1_Attack1_002.png",
"Img/enemie1/1_terrorist_1_Attack1_003.png",
"Img/enemie1/1_terrorist_1_Attack1_004.png",
"Img/enemie1/1_terrorist_1_Attack1_005.png")
e2Img = loadAnimation("Img/enemie2/1_terrorist_1_Attack4_000.png",
"Img/enemie2/1_terrorist_1_Attack4_001.png",
"Img/enemie2/1_terrorist_1_Attack4_002.png",
"Img/enemie2/1_terrorist_1_Attack4_003.png",
"Img/enemie2/1_terrorist_1_Attack4_004.png",
"Img/enemie2/1_terrorist_1_Attack4_005.png")
f1Img = loadAnimation("Img/fireing/Flash_A_01.png",
"Img/fireing/Flash_A_02.png",
"Img/fireing/Flash_A_03.png")
bgImg = loadImage("Img/bg/Background.jpg")
}
function setup(){
 var canvas = createCanvas(600,400);
 bg=createSprite(300,200,600,400)
 bg.addImage(bgImg)
 bg.scale = 1.95
 enemie1 = createSprite(100,200,1,1);
 enemie1.scale = 0.08
 enemie2 = createSprite(100,300,1,1)
 
      fireingGroup = new Group();
      enemieGroup = new Group();
      enemieGroup1= new Group();
}

function draw(){
    background("black");

    bg.velocityX = 3

    if(bg.x>width){
      bg.x = bg.width/2
    }

   player1 = createSprite(500,300,25,25);
   player1.addImage("pc",p1Img);
   player1.scale=0.08
   enemies();
   if (fireingGroup.isTouching(enemieGroup)){
      enemieGroup.destroyEach();
   }
   if (enemieGroup.isTouching(player1)||enemieGroup1.isTouching(player1)){
      player1.destroy();
   }

   drawSprites();
}
function enemies(){
   
    enemie1.addAnimation("helo",e1Img)
   
    if (frameCount%80 === 0){
        enemie2 = createSprite(1,300,10,10)
    enemie2.addAnimation("he",e2Img)
    enemie2.scale =0.08
    enemie2.velocityX = 6
    enemieGroup.add(enemie2)
    }    
        if (frameCount%80 === 0){
            enemie2 = createSprite(1,300,10,10)
        enemie1.addAnimation("he",e1Img)
        enemie1.scale =0.08
        enemie1.velocityX = 6
        enemieGroup1.add(enemie1)
         }


}
function soldierFire(){
     fireing = createSprite(player1.x+5,player1.y,15,15)
     fireing.addAnimation('fire',f1Img)
     fireing.scale =0.6
     fireing.velocityX = -4
     fireingGroup.add(fireing)
    }
    function keyPressed(){
        if(keyCode === 32){
          console.log('key pressed')
          soldierFire();
        }
    }