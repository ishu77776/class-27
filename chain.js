class Chain{
    constructor(bodya,bodyb){
    var constraintOptions={
        bodyA:bodya,
        bodyB:bodyb,
        length:40,
        stiffness:0.04
    }


    
        this.chain = Constraint.create(constraintOptions);
    World.add(world,this.chain);
}
display(){
var pointA=this.chain.bodyA.position;
var pointb=this.chain.bodyB.position;
push();
strokeWeight(3);
    line(pointA.x,pointA.y,pointb.x, pointb.y);
pop();
}
}