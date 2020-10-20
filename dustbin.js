class Dustbin{

    constructor(x,y){
       
        this.bin1=Bodies.rectangle(650,475,50,20,{isStatic:true});
        World.add(world,this.bin1);

        this.bin2=Bodies.rectangle(568,360,100,170,{isStatic:true}); 
        this.bin3=Bodies.rectangle(730,360,20,200,{isStatic:true}); 

        World.add(world,this.bin1);
        World.add(world,this.bin2);
        World.add(world,this.bin3);

        this.image= loadImage("dustbin.png");
    }

    display(){
        
        imageMode(CENTER);
        noStroke();
        fill("rgb(0,128,0");
        //rect(this.bin1.position.x,this.bin1.position.y,160,10);
        //rect(this.bin2.position.x,this.bin2.position.y,15,240);
        //rect(this.bin3.position.x,this.bin3.position.y,15,240);
        image(this.image, this.bin2.position.x+82, this.bin3.position.y+25, 160, 200)
    }
}