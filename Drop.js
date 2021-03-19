class Drop {
    constructor(x, y) {
        var options = {
            isStatic : false,
            restitution : 0.1,
            friction : 0.001
        }
        this.rain = Bodies.circle(x, y, 6, options);
        this.radius = 6;
        World.add(world, this.rain);
    }
    updateY() {
        if(this.rain.position.y > height) {
            Matter.Body.setPosition(this.rain, {x : random(0, 400), y : random(0, 400)});
        }
    }
    showDrop(){
        var pos = this.rain.position;
     
        noStroke();
        fill(34, 64, 255);
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.radius, this.radius);
    }
};