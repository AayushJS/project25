class paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2			
			}
		this.x=x;
		this.y=y;
		this.r = r;
        this.body=Bodies.circle(x, y, r/2, options);
 		World.add(world, this.body);
        this.image =loadImage("paper.png");

	}
	display()
	{
			var paperPos=this.body.position;		
			push()
			translate(paperPos.x, paperPos.y);
			rotate(this.body.angle)
			imageMode(CENTER);
            image(this.image, 0, 0, this.r/2,this.r/2);
			pop()
			
	}

    
}