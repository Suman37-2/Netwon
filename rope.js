class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){    
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var con={
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetX,y:this.offsetY},
            //length:400 
             
          }
          this.rope=Constraint.create(con);
          World.add(world,this.rope);  
    }

    display(){
     var pointA=this.rope.bodyA.position;
     var pointB=this.rope.bodyB.position;
     push();
     strokeWeight(5);
     stroke("red");
     line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y+this.offsetY); 
     pop();  
    }
}