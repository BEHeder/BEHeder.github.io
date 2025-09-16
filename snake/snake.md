---
layout: default
title: "Snake"
permalink: /snake.html/
---
<!-- HTML -->
<canvas id="gameCanvas" width="300" height="300"></canvas>

<h3>Under Construction</h3>
<p>
    Constructing this game follows the tutorial at <a href="https://www.freecodecamp.org/news/think-like-a-programmer-how-to-build-snake-using-only-javascript-html-and-css-7b1479c3339e">Think like a programmer: How to build Snake using only JavaScript, HTML & CSS</a>, with additional help from the W3Schools website. To be honest, the Free Code Camp article has typos and such, making it a little difficult to follow.
</p>

<!-- JavaScript -->
<!-- In the future, I should put this in its own JavaScript file. -->
<script>
    var c = document.getElementById("gameCanvas");
    var ctx = c.getContext("2d");
    let snake = [
        {x: 150, y: 150},
        {x: 140, y: 150},
        {x: 130, y: 150},
        {x: 120, y: 150},
        {x: 110, y: 150}
    ];
    clearCanvas();
    var dx = 10;
    var dy = 0;
    // advanceSnake();
    // dx = 0;
    // dy = -10 // This moves it upwards
    // advanceSnake();
    drawSnake();

    // Main function
    function main() {
        setTimeout(function onTick() {
            clearCanvas();
            advanceSnake();
            drawSnake();
            main();
        }, 100)
    }

    // Function for drawing the canvas, I guess?
    function clearCanvas() {
        ctx.fillStyle = "white";
        ctx.strokeStyle = "black";
        ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
        ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);
    }

    // Write the function for drawing the whole snake
    function drawSnake() {
        snake.forEach(drawSnakePart);
    }

    // Write function for drawing each part of the snake
    function drawSnakePart(snakePart) {
        ctx.fillStyle = 'lightgreen';
        ctx.strokeStyle = 'darkgreen';
        ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
        ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
    }

    // Function for moving the snake
    function advanceSnake() {
        const head = {x: snake[0].x + dx, y: snake[0].y + dy};
        snake.unshift(head);
        snake.pop();
    }
</script>