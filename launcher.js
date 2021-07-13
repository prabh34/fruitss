class Launcher{
    constructor(bodyA,pointB){
    var options={
        bodyA :bodyA,
        pointB :pointB,
        stiffness :0.4,
        length :150
    }
    this.launcher=Constraint.create(options);
    this.pointB=pointB;
    World.add(world,this.launcher)
    
    }
    display() {
        if(this.launcher.bodyA)
        var pointA=this.bodyA.position;
        var pointB=this.pointB;
        strokeWight(4);
        stroke("#EA4335");
        line(pointB.x,pointB.y,pointA.x,pointA.y);
    }
}