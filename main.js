$(document).ready(function() {
    var pong = new Pong();
    pong.init();
});

var Pong = function() {

}

Pong.prototype.init = function() {
    this.canvas = document.getElementById("myCanvas"),
    this.ctx = this.canvas.getContext('2d');

    this.leftPaddle = new Paddle(10);
    this.rightPaddle = new Paddle(this.canvas.width - 20);

    this.ball = new Ball();


    this.redraw(); // Initial draw
    var ref = this;
    this.drawLoop = setInterval(this.redraw.bind(this), 10); // Redraw loop
}

Pong.prototype.redraw = function() {
    this.update();

    this.clearCanvas();
    this.drawBackground();
    this.drawPaddles();
    this.drawBall();
}

Pong.prototype.clearCanvas = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
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

Pong.prototype.update = function() {
    this.ball.move();
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

    this.radius = 10;

    this.velx = 5;
    this.vely = 5;

    // Remove
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height / 2;
}

Ball.prototype.draw = function() {
    this.ctx.fillStyle = "#00FF00";
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true); 
    this.ctx.closePath();
    this.ctx.fill();
}

Ball.prototype.move = function() {
    this.checkWalls();

    this.x += this.velx;
    this.y += this.vely;
}

Ball.prototype.checkWalls = function() {
    if(this.y - this.radius + this.vely < 0 ||
       this.y + this.radius + this.vely > this.canvas.height) {
        this.vely = -1 * this.vely;
    }

    if(this.x - this.radius + this.velx < 0 ||
       this.x + this.radius + this.velx > this.canvas.width) {
        this.velx = -1 * this.velx;
    }
}