class Particle{
    constructor(x,y){
var options={
    'restitution':0.4
}
this.body=Bodies.circle(x,y,10,options)
this.color=color(random(0,255),random(0,255),random(0,255))
this.radius=10;
World.add(world,this.body)
}
display(){
var position=this.body.position;

ellipseMode(RADIUS)
fill(this.color)
ellipse(position.x,position.y,this.radius,this.radius)

    }
}