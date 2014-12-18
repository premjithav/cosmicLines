/**************************************************************************************
                                         __    __                          
                                  __  __/\ \__/\ \           __            
 _____   _ __    __    ___ ___   /\_\/\_\ \ ,_\ \ \___      /\_\    ___    
/\ '__`\/\`'__\/'__`\/' __` __`\ \/\ \/\ \ \ \/\ \  _ `\    \/\ \ /' _ `\  
\ \ \L\ \ \ \//\  __//\ \/\ \/\ \ \ \ \ \ \ \ \_\ \ \ \ \  __\ \ \/\ \/\ \ 
 \ \ ,__/\ \_\\ \____\ \_\ \_\ \_\_\ \ \ \_\ \__\\ \_\ \_\/\_\\ \_\ \_\ \_\
  \ \ \/  \/_/ \/____/\/_/\/_/\/_/\ \_\ \/_/\/__/ \/_/\/_/\/_/ \/_/\/_/\/_/
   \ \_\                         \ \____/                                  
    \/_/                          \/___/                                   
***************************************************************************************/

var context;
var circles = [];
var NUM_PARTICLES=500;
var pRadius =1;

function Circle() 
{
			this.x = (canvas.width/2);
			this.y = (canvas.height/2);

			this.dx = Math.random() * 5 - 2.5;
			this.dy = Math.random() * 5 - 2.5;
			this.color = "rgb(" + Math.floor(255 * Math.random()) + "," + Math.floor(255 * Math.random()) + "," + Math.floor(255 * Math.random()) + ")";
}


Circle.prototype.update=function()
{
		this.x += this.dx;
		this.y += this.dy;

			this.yvel += 0.3;

			if (this.x+pRadius > canvas.width || this.x-pRadius < 0) {
				this.dx = -this.dx;
			}

			if (this.y+pRadius > canvas.height || this.y-pRadius < 0) {
				this.dy = -this.dy;
			}
}


function init()
{
	if (!supports_canvas()) 
	{ 
	//alert("Your browser Not compatible for HTML 5");
	document.getElementById("redirect").innerHTML="Loading..."
	window.location = "http://www.premjith.in/main.php"; /*FIXME*/
	return false; 
	}
	else
	{
	  canvas = document.getElementById("myCanvas");
	  context= canvas.getContext('2d');
	  canvas.width  = window.innerWidth-5;
	  canvas.height = window.innerHeight-25;
	  
		for(var i = 0; i < NUM_PARTICLES; i++) 
		{
					circles[i] = new Circle();				
		}
	  
	  setInterval(draw,10); 
    }
}

function draw()
{
 
  //context.clearRect(0,0, myCanvas.width,myCanvas.height); /*Clear the Line trails*/
   for(var i=0;i< NUM_PARTICLES;i++)
   {	
	  circles[i].update();
	  context.beginPath();
	  //context.fillStyle="#0000ff";      	  
	  context.fillStyle=circles[i].color;
	  // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
	  context.arc(circles[i].x,circles[i].y,pRadius,0,Math.PI*2,true);
	  context.closePath();
	  context.fill();
	  context.shadowColor="black";
   }

}
function supports_canvas() {
  return !!document.createElement('canvas').getContext;
}
