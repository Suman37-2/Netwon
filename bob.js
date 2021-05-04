class Bob{

    constructor(x,y){

        var op={
            restitution:0.3,
            density:0.1
        }
        this.body=Bodies.circle(x,y,80,op);
        this.r=80;
        World.add(world,this.body);
    }
   

    display(){
        var pos=this.body.position;
        push();
        fill("red");
        translate(pos.x,pos.y);
        ellipse(0,0,this.r,this.r);
        pop();
        
    }
 

}