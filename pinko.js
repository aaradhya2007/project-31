class Pinko{
constructor(x,y){
var options={
    'isStatic':true
}
this.body=Bodies.circle(x,y,10,options)
this.radius=10;
World.add(world,this.body)
}
display(){
var position=this.body.position;

ellipseMode(RADIUS)
fill("brown")
ellipse(position.x,position.y,this.radius,this.radius)

}
}