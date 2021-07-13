class Ground {
    constructor(x,y,width,height) {
        var money={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,money);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display() {
        var mom=this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(mom.x,mom.y,this.width,this.height);

    }
}