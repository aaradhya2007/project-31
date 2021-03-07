const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;


var engine,world;
var pinkos=[]
var particles=[]

function setup() {
  engine=Engine.create();
  world=engine.world;
  createCanvas(800,400);
  ground=new Ground(750,390,1500,10)
  for(var j=40;j<=width;j=j+50){
    pinkos.push(new Pinko(j,75))

    }
    for(var j=15;j<=width;j=j+50){
      pinkos.push(new Pinko(j,125))
  
      }
      for(var j=15;j<=width;j=j+50){
        pinkos.push(new Pinko(j,175))
    
        }
     d1=new Division(80,335,10,100)
     d2=new Division(160,335,10,100)
     d3=new Division(240,335,10,100)
     d4=new Division(320,335,10,100)
     d5=new Division(400,335,10,100)
     d6=new Division(480,335,10,100)
     d8=new Division(640,335,10,100)
     d7=new Division(560,335,10,100)

}

function draw() {
  Engine.update(engine);
  background("lime");  
  drawSprites();
  ground.display();
  for (var i = 0; i < pinkos.length; i++) {
     
    pinkos[i].display();
    

  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  }
  for (var j= 0; j < particles.length; j++) {
     
    particles[j].display();
    

  }
  d1.display();
    d2.display();
    d3.display();
    d4.display();
    d5.display();
    d6.display();
    d7.display();
    d8.display();
}