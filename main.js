$(document).ready(function() {
    var pong = new Pong();
    pong.init();
    pong.draw();
});

var Pong = function() {

}

Pong.prototype.init = function() {
    this.canvas = document.getElementById("myCanvas"),
    this.ctx = this.canvas.getContext('2d');

    this.leftPaddle = new Paddle(10);
    this.rightPaddle = new Paddle(this.canvas.width - 20);

    this.ball = new Ball();
}

Pong.prototype.draw = function() {
    this.drawBackground();
    this.drawPaddles();
    this.drawBall();
}

Pong.prototype.drawBackground = function() {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
}

Pong.prototype.drawPaddles = function() {
    this.leftPaddle.draw();
    this.rightPaddle.draw();
}

Pong.prototype.drawBall = function() {
    this.ball.draw();
}


var Paddle = function(x) {
    this.canvas = document.getElementById("myCanvas"),
    this.ctx = this.canvas.getContext('2d');

    this.x = x;
    this.y = 10; //remove
}

Paddle.prototype.draw = function() {
    this.ctx.fillStyle = "#00FF00";
    this.ctx.fillRect(this.x, this.y, 10, 75);
}



var Ball = function() {
    this.canvas = document.getElementById("myCanvas"),
    this.ctx = this.canvas.getContext('2d');

    // Remove
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height / 2;
}

Ball.prototype.draw = function() {
    this.ctx.fillStyle = "#00FF00";
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, 10, 0, Math.PI*2, true); 
    this.ctx.closePath();
    this.ctx.fill();
}