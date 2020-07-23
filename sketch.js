const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,ground,pig1,pig2,log1,log2,box5,bird;
var log3,log4;
function setup(){
    var canvas = createCanvas(1500,600);
    engine = Engine.create();
    world = engine.world;
    bird=new Bird(500,600)
    box1 = new Box(1100,400,70,70);
    box2 = new Box(900,400,70,70);
    box3 = new Box(1100,250,70,70);
    box4 = new Box(900,250,70,70);
    box5=new Box(1000,170,70,70)
    ground = new Ground(750,height,1500,20)
    pig1=new Pig(1000,400)
    log1=new Log(1000,300,300,0)
    pig2=new Pig(1000,250)
    log2=new Log(1000,200,300,0);
    log3=new Log(1040,150,150,PI/7)
    log4=new Log(960,150,150,-PI/7)
    

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    bird.display();
    box2.display();
    log4.display();
    log3.display();
    box5.display();
    pig2.display();
    box4.display();
    box3.display();
    pig1.display();
    log1.display();
    ground.display();
    log2.display();
}