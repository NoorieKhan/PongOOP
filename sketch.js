var playerPaddle;

function setup() {
  createCanvas(400, 400);
  playerPaddle = new Paddle();
}

function draw() {
  //Refresh the screen
  background("lightblue");
  playerPaddle.xPosition = 390;
  playerPaddle.yPosition = mouseY;
  //Draws a Player Paddle
  playerPaddle.view();
  //Draws a computer Paddle
 
  //Draws the ball
  rect(185,185,10,10);
  
}