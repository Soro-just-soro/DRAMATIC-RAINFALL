const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var Thunder1,Thunder2,Thunder3,Thunder4,Thunder
var drops=[],rand,maxDrops=100,thunderCreatedFrame=0,engine,world
function preload(){
    Thunder1=loadImage("thunderbolt/1.png")
    Thunder2=loadImage("thunderbolt/2.png")
    Thunder3=loadImage("thunderbolt/3.png")
    Thunder4=loadImage("thunderbolt/4.png")


}

function setup(){
   engine=Engine.create
   world=engine.world
   createCanvas(400,700)
    umbrella=new Umbrella(200,500)
    if(frameCount%150==0){
        for(var i=0;i<maxDrops;i++){
            drops.push(new drops(random(0,400),random(0,400)))
        }
    }
}

function draw(){
    
}   

