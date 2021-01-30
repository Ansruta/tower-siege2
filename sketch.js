const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;

function setup(){
    createCanvas(1000,700);
    engine = Engine.create();
    world = engine.world;
    //create bodies
    g=new ground(500,670,1000,20);
    base=new ground(400,405,300,10);
 base2=new ground(750,305,300,10);
b1=new block(400,380,30,40);
b2=new block(400,340,30,40);
b3=new block(400,300,30,40);

b4=new block(385,380,30,40);
b5=new block(415,340,30,40);

b6=new block(370,380,30,40);
b7=new block(430,380,30,40);

b8=new block(415,380,30,40);
b9=new block(385,340,30,40);

b10=new block(750,280,30,40);
b11=new block(750,240,30,40);
b12=new block(750,200,30,40);

b13=new block(735,280,30,40);
b14=new block(765,240,30,40);

b15=new block(720,280,30,40);
b16=new block(780,280,30,40);

b17=new block(735,240,30,40);
b18=new block(765,280,30,40);

pol=new polygon(150,300);
sl=new sling(pol.body,{x:150,y:300});
}
function draw(){
    background(0);
    Engine.update(engine);
    //to display
    g.display();
    base.display();
    base2.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();
    b17.display();
    b18.display();
    pol.display();
    sl.display();
  
    
}
function mouseDragged(){
    //mouse controlled
    Matter.Body.setPosition(pol.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    //polygon fly
    sl.fly();
}
function keyPressed(){
    if(keyCode===32){
        Matter.Body.setPosition(pol.body,{x:150,y:300})
        sl.attach(pol.body)
    }
}