class SlingShot {
    constructor(bodyA,pointB){
        var options ={
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.04,
            lenght:10,
        }
        this.polygon = Matter.Constraint.create(options)
        //this.polygon = loadImage("polygon.png")
        this.pointB = pointB
        World.add(world,this.polygon)
    }
  
    fly(){
        this.polygon.bodyA = null;
    }
  
   display(){
       if(this.polygon.bodyA){
       strokeWeight(3)
       line(this.sling.bodyA.position.x, this.sling.bodyA.position.y, this.pointB.x, this.pointB.y);
       
       
    }
   }
  
  }