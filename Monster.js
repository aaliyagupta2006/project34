class Monster {
    constructor(x,y,w,h){
        var options ={ 
            density: 1,
            frictionAir : 1
            
        }
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.image = loadImage("monster.png")
        this.body = Bodies.rectangle(this.x,this.y,this.w,this.h,options);
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate (this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 150,150);
        pop();
    }
}