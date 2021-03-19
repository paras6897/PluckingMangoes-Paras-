
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,80,30);
	mango3=new mango(980,70,30);
	mango4=new mango(960,60,30);
	mango5=new mango(950,90,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stone=new Stone(235,420,30)
	launcher=new Launcher(stone.body,{x:235,y:420})
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()

  groundObject.display();
  stone.display()
  launcher.display()
  detectollision(stone,mango1)
  detectollision(stone,mango2)
  detectollision(stone,mango3)
  detectollision(stone,mango4)
  detectollision(stone,mango5)
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher.fly();
}
function keyPressed() {
	 if (keyCode === 32) {
		  Matter.Body.setPosition(stone.body, {x:235, y:420})
		   launcher.attach(stone.body);
		 } }

function detectollision(ob1,ob2){
	 var distance=dist(ob2.body.position.x, ob2.body.position.y, ob1.body.position.x, ob1.body.position.y)
	  if(distance<=ob1.r+ob2.r) 
	  { Matter.Body.setStatic(ob2.body,false);
	 } }