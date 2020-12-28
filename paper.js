class paper{
    constructor(x,y,r){
        var options={
       // var bounce={
           
           isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2,
           
          }
          this.x=x;
          this.y=y;
          this.r=r;
          this.body = Bodies.circle(this.x,this.y,this.r,options);
            // this.width=50
             //this.hight=50
             //World.add(world,this.ball)
    }
    display(){
        var paperpos=this.body.position
       // ballpos.x=mouseX
       // ballpos.y=mouseY
        push()
        translate(paperpos.x,paperpos.y);
        rectMode(CENTER)
        strokeWeight(3);
        fill(255,0,255);
        ellipse(0,0,this.r,this.r)
        pop()
       
    }
}



  