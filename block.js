class block{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':0.1,
            'isStatic':false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
       
        World.add(world, this.body);
        this.Visiblity=255;
      }
      display(){
        
        push();
        
       //vanish
     
        if(this.body.speed<3){
          var angle = this.body.angle;
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          rect(0,0,this.width,this.height)
        }else{
          
         World.remove(world,this.body)
         this.Visiblity=this.Visiblity-5
         tint(255,this.Visiblity)

        }
    
        pop();
      
      }
}