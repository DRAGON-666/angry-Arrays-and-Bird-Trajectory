class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimg = loadImage("sprites/smoke.png");
    this.path=[];
  }

  display() {
    var position=[this.body.position.x,this.body.position.y];
    if(this.body.speed>10 && this.body.position.x>200){
      this.path.push(position);
    }
    
    console.log(position);
    
    for(var i =0;i<this.path.length;i++){
      image(this.smokeimg, this.path[i][0] ,this.path[i][1]);
    }
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
  }
}
