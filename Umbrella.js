class Umbrella{
    constructor(x, y){
        var options = { 
            isStatic : true
        }
    this.image = loadImage("images/Walking Frame/walking_1.png");
    this.umbrella = Bodies.circle(x, y, 50, options);
    this.radius = 50;
    World.add(world, this.umbrella);
    }
    display(){
        var position = this.umbrella.position;

        push();
        imageMode(CENTER);
        image(this.image, position.x, position.y + 80, 360, 360);
        pop();
    }
}