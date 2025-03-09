let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");


const paddleWidth = 80, paddleHeight = 10, ballRadius = 8;

let paddleX = (canvas.width - paddleWidth)/2;
let ballX = canvas.width/2;
let ballY = canvas.height/2;

let ballSpeedX = 3;
let ballSpeedY = -3;

let rightPressed = false, leftPressed = false;

function drawBall(){
    ctx.beginPath();
    ctx.arc(ballX,ballY, ballRadius, 0, Math.PI*2);
    ctx.fillstyle = "red";
    ctx.fill();
    ctx.closePath();
}

function drawPaddle(){
    ctx.fillstyle = "black";
    ctx.fillRect(paddleX,canvas.height-paddleHeight-10,paddleWidth,paddleHeight);
}

canvas.addEventListener("touchmove",(e)=>{
    let touchX = e.touches[0].clientX;
    paddleX= touchX - paddleWidth/2;
})

document.addEventListener("keydown",keyDownHandler)
document.addEventListener("keyup",keyUpHandler)

function keyDownHandler(e){
    if (e.key === "ArrowRight") rightPressed = true;
    else if (e.key === "ArrowLeft") leftPressed = true;
}

function keyUpHandler(e){
    if (e.key === "ArrowRight") rightPressed = false;
    else if (e.key === "ArrowLeft") leftPressed = false;
}

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    drawPaddle();
    drawBall();

    if (rightPressed && paddleX<canvas.width-paddleWidth) paddleX +=5;

    if (leftPressed && paddleX>0) paddleX -=5;

    ballX+=ballSpeedX;
    ballY+=ballSpeedY;

    if (ballX+ballRadius>canvas.width || ballX-ballRadius<0) ballSpeedX= -ballSpeedX;

    if (ballY-ballRadius<0) ballSpeedY=-ballSpeedY;

    if (ballY+ballRadius>canvas.height-paddleHeight-10 && ballX>paddleX && ballX<paddleX+paddleWidth) ballSpeedY = -ballSpeedY;

    //alert("Вы проиграли. Начните заново");
    //document.location.reload();
    requestAnimationFrame(draw);
}

draw();


