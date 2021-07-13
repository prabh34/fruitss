class Knife{
    constructor(x,y,width,height) {
        var options={
            restitution :0.2,
            friction :0.3,
            density :0.3
        }
        this.image=loadImage("images/knive.png");
        this.knife=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.knife);


    }
    display() {
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
        pop();


    }
}