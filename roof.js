class Roof{

  constructor(x,y){

    var op={
        isStatic:true
    }
    this.body=Bodies.rectangle(x,y,450,50,op);
    this.width=450;
    this.height=50;
    World.add(world,this.body);
}

display(){
    var pos=this.body.position;
    push();
    rectMode(CENTER);
    fill("pink");
    rect(pos.x,pos.y,this.width,this.height);
    pop();
}
}
  
