class Paper{
    constructor(){
       var options={
           isStatic:false,
           restitution:0.3,
           friction:0.5,
           density:1.5
       }
      this.image= loadImage("paper.png");
      this.body=Bodies.circle(150, 400, 20,options);
      World.add(world, this.body);
   }

   display(){
       push();
       translate(this.body.position.x,this.body.position.y);
       ellipseMode(RADIUS);
       noStroke();
       fill("white");
       ellipse(0,0,7,7);
       pop();
       image(this.image, this.body.position.x-45, this.body.position.y-30, 70, 70);
   }
}