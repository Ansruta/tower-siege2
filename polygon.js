class polygon{
    constructor(x,y){
        var opt={
            'isStatic':false,
            'restitution':1.0,
            'density':1.0
        }
        this.body=Bodies.circle(x,y,60,opt)
        this.x=x;
        this.y=y;
        this.r=30;
        World.add(world,this.body)
        this.image=loadImage("polygon.png");
    }
    
    display(){
        var p=this.body.position;
        push();
        translate(p.x,p.y);
       imageMode(CENTER);
       image(this.image,0,0,this.r,this.r);
       pop();

    }
}