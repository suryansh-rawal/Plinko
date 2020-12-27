class Ground{
    constructor(x,y,w,h) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,w,h,options);
      this.w = w; 
      this.h = h;
      World.add(world, this.body);
    }
    display(){
      var Color = color(random(0, 255), random(0, 255), random(0, 255));
      var pos =this.body.position;
      rectMode(CENTER);
      fill(Color);
    rect(pos.x, pos.y, this.w,this.h);
    }
  };