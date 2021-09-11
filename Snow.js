class Snow {
 constructor(x,y,r)
  {
   var options = {
    density: 5,
    frictionAir: 0
    }

   this.x=x
   this.y=y
   this.r=r
   this.body = Bodies.circle(x, y, r, options);
   this.image = loadImage("snow4.webp");
   World.add(world, this.body);
   }

   display()
   {
           
           var Pos =this.body.position;		
           push()
           translate(Pos.x, Pos.y-100);
           //rectMode(CENTER)
           fill(255,0,255)
           imageMode(CENTER);
           image(this.image, 0,0,this.r, this.r)
           pop()
           
   }


}