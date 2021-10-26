var hairPosX = 200;
var hairPosY = 700;
var hairSpeedX = 20;
var hairSpeedY = 30;

function setup() { 
  var canvas = createCanvas(800, 800);
  
}

function draw() { 
  background(220);
  var trumpX = mouseX;
  var trumpY = mouseY;
	var hairX = hairPosX;
	var hairY = hairPosY;
	var bannerSize = 30;

	//Function for body shape
  var potus = function(x, y) {
    
    noStroke();
    
    //SKIN
    fill(255,180,90);
    ellipse(x,y,60);
    ellipse(x-66,y+84,20);
    ellipse(x+66,y+84,20);
    
    //COLLAR SHIRT
    fill(255);
    rect(x-20,y+30,40,80);
    
    //TIE
    fill(255,0,0);
    triangle(x-10,y+25,x+10,y+25,x,y+40);
    quad(x,y+30,x+10,y+90,x,y+100,x-10,y+90);
    
    //SHOES
    fill(50,0,0);
    quad(x-30,y+195,x-5,y+195,x-3,y+210,x-32,y+210);
    quad(x+30,y+195,x+5,y+195,x+3,y+210,x+32,y+210);
    
    //SUIT
    fill(0,0,255);
    triangle(x-15,y+25,x,y+90,x-15,y+90);						//CHEST
    triangle(x+15,y+25,x,y+90,x+15,y+90);
    quad(x-30,y+35,x-10,y+25,x-10,y+105,x-41,y+112);
    quad(x+30,y+35,x+10,y+25,x+10,y+105,x+41,y+112);
    rect(x-10,y+90,20,15);
    ellipse(x,y+110,80,45);													//WAIST
    rect(x-30,y+115,25,80);													//LEGS
    rect(x+5,y+115,25,80);
    quad(x-30,y+35,x-10,y+45,x-55,y+90,x-70,y+75);	//ARMS
    quad(x+30,y+35,x+10,y+45,x+55,y+90,x+70,y+75);
    
    
  };
  
	//Function for hair
  var toupee = function(x,y) {
    fill(255,255,125);
    ellipse(x,y-20,60,30);
    ellipse(x-25,y-5,20,35);
    triangle(x+25,y-30,x+35,y-10,x+20,y-10);
    triangle(x-35,y,x-35,y+15,x-20,y+10);
  };
		
	hairPosX += hairSpeedX;
	hairPosY += hairSpeedY;
	
	//Making the hair bounce
	if (hairPosX >= width-30 || hairPosX <= 35) {
		hairSpeedX = hairSpeedX * -1.01;
	}
	
	if (hairPosY >= height - 15 || hairPosY <= 30) {
		hairSpeedY = hairSpeedY * -1;
	}
	
	//Making it possible to catch hair
	if (trumpX >= hairX - 75 && trumpX <= hairX + 75) {
		if (trumpY >= hairY - 75 && trumpY <= hairY + 75) {
			hairPosX = trumpX;
			hairPosY = trumpY;
			textSize(bannerSize);
			text("You caught it! Wanna let go?", 110, height - 50);
			fill(random(255));
			text("SHAKE IT OFF!", 500, height - 50);
		}
	}
	  
  potus(trumpX,trumpY);
  toupee(hairX,hairY);
	
	textSize(bannerSize);
	text("Catch your hair, Donald! Move your cursor!", 110, height - 110);	//Catch phrase
	
}