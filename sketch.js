const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;

var ground1;
var boy;
var knife;
var launcher1;

function preload(){
	boyimg=loadImage("images/boy.png");
  }


function setup(){
    var canvas = createCanvas(1000,450);
    engine = Engine.create();
    world = engine.world;
    ground1 = new Ground(1100,400,3000,40);
    knife=new Knife(100,460,15,15);
    launcher1=new Launcher(this.knife,{x:100,y:465});
    boy=createSprite(200,150);
    boy.addImage(boyimg)
    boy.scale=0.45;

}

function draw(){
    background("blue");
    Engine.update(engine);
    textSize(21);
    fill("yellow");
    text("be a fruit ninja",500,400)
    ground1.display();
    knife.display();
    launcher1.display();

   
}