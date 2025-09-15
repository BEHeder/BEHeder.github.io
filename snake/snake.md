---
layout: default
title: "Snake"
permalink: /snake.html/
---
<!-- Probably put the canvas style in a separate CSS file. -->
<canvas id="gameCanvas" width="300" height="300" style="border:1px solid #000000;"></canvas>

<p>
    Under Construction
    <br>
    Constructing this game follows the tutorial at <a href="https://www.freecodecamp.org/news/think-like-a-programmer-how-to-build-snake-using-only-javascript-html-and-css-7b1479c3339e">Think like a programmer: How to build Snake using only JavaScript, HTML & CSS</a>, with additional help from other resources. To be honest, the Free Code Camp article has typos and such, making it a little difficult to follow.
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
    drawSnake();

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
</script>