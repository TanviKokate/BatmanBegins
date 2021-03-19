const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var world, engine;
var drop = [];
var maxDrops = 100;
var thunderCreatedFrame = 0;
var thunder;
var umbrella;

function preload(){
    thunder_1 = loadImage("images/thunderbolt/1.png");
    thunder_2 = loadImage("images/thunderbolt/2.png");
    thunder_3 = loadImage("images/thunderbolt/3.png");
    thunder_4 = loadImage("images/thunderbolt/4.png");
}

function setup(){ 
    var canvas = createCanvas(400, 620);

    engine = Engine.create();
    world = engine.world;
   
   if (frameCount % 150 === 0){
     for(var i = 0; i < maxDrops; i++) {
        drop.push(new Drop(random(0, 400), random(0, 400)));
    }
   } 
   umbrella = new Umbrella(200, 390);
}

function draw(){
    Engine.update(engine);
    background(0);

    for (var i = 0; i < maxDrops; i++) {
        drop[i].showDrop();
        drop[i].updateY();
    } 

    var rand = Math.round(random(1, 4));
    if (frameCount % 80 === 0){
        thunderCreatedFrame = frameCount;
        thunder = createSprite(random(10, 370), random(10, 30), 10, 10);
        switch(rand){
            case 1 : thunder.addImage(thunder_1);
            break;
            case 2 : thunder.addImage(thunder_2);
            break;
            case 3 : thunder.addImage(thunder_3);
            break;
            case 4 : thunder.addImage(thunder_4);
            break;
            default : break;
        }
        thunder.scale = random(0.3, 0.6);
    }
    if(thunderCreatedFrame + 10 === frameCount && thunder){
        thunder.destroy();
    }
    umbrella.display();
    drawSprites();
}  