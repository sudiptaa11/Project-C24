const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber1; rubber2, rubber3, rubber4, rubber5;
var stone;
var iron;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);

    hammer = new Hammer(600,50);

    rubber1 = new Rubber(600,100,10);
    rubber2 = new Rubber(590,100,10);
    rubber3 = new Rubber(580,100,10);
    rubber4 = new Rubber(610,100,10);
    rubber5 = new Rubber(620,100,10);

    stone = new Stone(600,150,30,30);

    iron = new Iron(600,200,40,40);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();

    hammer.display();

    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();

    stone.display();
    
    iron.display();
 
}