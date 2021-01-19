class Ball {
    constructor(x,y,width,height,angel) {
      var options = {
           'frictionAir' : 0.005,
           'density': 1

      }
      this.image=loadImage("Superhero-01.png")
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      ellipse(0, 0, this.width, this.height);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width + 100,this.height + 50);
      pop(); 
    }
  };
