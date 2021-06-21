var rabbit,rabbitImg;
var garden,gardenImg;
var apple,appleImage;
var leaf,leafImage;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage("apple.jpg");
  leafImage = loadImage("leaf.jpg");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}



function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  if(keyDown("left")){
    rabbit.x=rabbit.x-10
  }

  if(keyDown("right")){
    rabbit.x=rabbit.x+10
  }
  
  spawnleaves();
 
  createApples();
  
  drawSprites();
}

//function to spawn the clouds
function createApples(){
  if(frameCount %60==0){
  
 // write your code here 
 apple=createSprite(random(50, 350),40, 10, 10);
 apple.addImage(appleImage);
 apple.scale=0.2;
 apple.velocityY=3;
 var apple = Math.round(random(1,2));
 apple.lifetime=300;
}

}
function spawnleaves(){
  if(frameCount %60==0){
  
 // write your code here 
 leaf=createSprite(random(20, 350),90, 10, 10);
 leaf.addImage(leafImage);
 leaf.scale=0.2
 leaf.velocityY=3;
 var leaf = Math.round(random(1,2));
 leaf.lifetime=-5;
  }
  
  }

   var leaf,apple = math.round(random(1,2));

   if(frameCount % 80 == 0) {
     if(apple,leaf == 1) {
      
      createApples();
     }
     else {
       
      spawnleaves();
     }
   }    
  
  
 

