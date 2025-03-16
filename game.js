let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = Math.min(800, window.innerWidth * 0.9);
    canvas.height = Math.min(500, window.innerHeight * 0.7);
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const paddleHeight = 10, ballRadius = 8;
let paddleWidth = canvas.width * 0.2;

let paddleX = (canvas.width - paddleWidth) / 2;
let ballX = canvas.width / 2;
let ballY = canvas.height / 2;
let ballSpeedX = 3, ballSpeedY = -3;
let rightPressed = false, leftPressed = false;

function drawBall() {
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    ctx.fillStyle = "black";
    ctx.fillRect(paddleX, canvas.height - paddleHeight - 10, paddleWidth, paddleHeight);
}

canvas.addEventListener("touchmove", (e) => {
    let touchX = e.touches[0].clientX - canvas.offsetLeft;
    paddleX = touchX - paddleWidth / 2;
    paddleX = Math.max(0, Math.min(paddleX, canvas.width - paddleWidth));
});

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") rightPressed = true;
    else if (e.key === "ArrowLeft") leftPressed = true;
});
document.addEventListener("keyup", (e) => {
    if (e.key === "ArrowRight") rightPressed = false;
    else if (e.key === "ArrowLeft") leftPressed = false;
});

let animation;
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPaddle();
    drawBall();

    if (rightPressed && paddleX < canvas.width - paddleWidth) paddleX += 5;
    if (leftPressed && paddleX > 0) paddleX -= 5;

    ballX += ballSpeedX;
    ballY += ballSpeedY;

    if (ballX + ballRadius > canvas.width || ballX - ballRadius < 0) ballSpeedX = -ballSpeedX;
    if (ballY - ballRadius < 0) ballSpeedY = -ballSpeedY;

    if (ballY + ballRadius > canvas.height - paddleHeight - 10 && ballX > paddleX && ballX < paddleX + paddleWidth) {
        ballSpeedY = -ballSpeedY;
    }

    if (ballY - ballRadius > canvas.height) {
        setTimeout(() => {
            if (confirm("Вы проиграли! Хотите начать заново?")) {
                restartGame();
            } else {
                cancelAnimationFrame(animation);
            }
        }, 100);
        return;
    }

    animation = requestAnimationFrame(draw);
}

function restartGame() {
    paddleX = (canvas.width - paddleWidth) / 2;
    ballX = canvas.width / 2;
    ballY = canvas.height / 2;
    ballSpeedX = 3;
    ballSpeedY = -3;
    draw();
}

draw();
