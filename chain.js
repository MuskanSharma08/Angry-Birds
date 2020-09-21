class Chain{
    constructor(a, b){
    var options = {
        bodyA:a,
        bodyB:b,
        length:100,
        stiffness:0.9
    }
this.chain = Constraint.create(options);
 World.add(world, this.chain);
    }
    display(){
   var pointA = this.chain.bodyA.position;
   var pointB = this.chain.bodyB.position;
   push();
   strokeWeight(4);
   stroke("black");
   line(pointA.x, pointA.y, pointB.x, pointB.y);
   pop();
    }
}