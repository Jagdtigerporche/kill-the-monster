const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10;
var ball1;
var rope1;
var monster1;

function preload(){
    backgroundImg = loadImage("GamingBackground.png");
}

function setup(){
    var canvas = createCanvas(2000,700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,600,1400,20);
    box1 = new Box(900,100,70,70);
    box2 = new Box(900,100,70,70);
    box3 = new Box(900,100,70,70);
    box4 = new Box(900,100,70,70);
    box5 = new Box(900,100,70,70);
    box6 = new Box(900,100,70,70);
    box7 = new Box(800,100,70,70);
    box8 = new Box(800,100,70,70);
    box9 = new Box(800,100,70,70);
    box10 = new Box(800,100,70,70);
    ball1 = new Ball(200,400,80,80);
    ball1.scale = 0.1;
    rope1 = new rope(ball1.body,{x : 800, y : 50});
    monster1 = new Monster(1200,350,250);
}

function draw(){  
    background(backgroundImg);
    Engine.update(engine); 
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    ball1.display();
    rope1.display();
    monster1.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball1.body,{x : mouseX, y : mouseY});
}