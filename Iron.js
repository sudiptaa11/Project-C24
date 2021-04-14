class Iron {
    constructor(x, y, width, height) {
        var options = {
            restitution : 0.8,
            friction : 3,
            density : 30
        }
        this.body = Bodies.rectangle(x, y, width, height);
        this.w = width;
        this.h = height;
        World.add(world, this.body);
    }
    
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("black");
        rectMode(CENTER);
        rect(0, 0, this.w , this.h);
        pop();
    }
}