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
    drawSnake();
    createFood();
    snake.forEach(function isFoodOnSnake(part) {
        const foodIsOnSnake = part.x == foodX && part.y == foodY;
        if (foodIsOnSnake) {
            createFood();
        }
    })
    main();
    document.addEventListener("keydown", changeDirection);

    // Main function
    function main() {
        setTimeout(function onTick() {
            clearCanvas();
            drawFood();
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

    // Changing the snake's direction
    function changeDirection(event) {
        // I guess these are the key codes for the arrow keys...
        const LEFT_KEY = 37;
        const RIGHT_KEY = 39;
        const UP_KEY = 38;
        const DOWN_KEY = 40;
        const keyPressed = event.keyCode;

        // These are to help check if the snake is moving a certain direction
        const goingUp = dy === -10;
        const goingDown = dy === 10;
        const goingRight = dx === 10;
        const goingLeft = dx === -10;

        // This is where the action starts to happen when an arrow key is pressed
        // We also make sure to prevent the snake from reversing
        if (keyPressed === LEFT_KEY && !goingRight) {
            dx = -10;
            dy = 0;
        }
        if (keyPressed === UP_KEY && !goingDown) {
            dx = 0;
            dy = -10;
        }
        if (keyPressed === RIGHT_KEY && !goingLeft) {
            dx = 10;
            dy = 0;
        }
        if (keyPressed === DOWN_KEY && !goingUp) {
            dx = 0;
            dy = 10;
        }
    }

    // Function for moving the snake and checking if it's eating food
    function advanceSnake() {
        const head = {x: snake[0].x + dx, y: snake[0].y + dy};
        snake.unshift(head);
        const didEatFood = snake[0].x === foodX && snake[0].y === foodY;
        if (didEatFood) {
            createFood();
        }
        else {
            snake.pop();
        }
    }

    // Create the food, which asks for two random coordinates
    function createFood() {
        foodX = randomTen(0, gameCanvas.width - 10);
        foodY = randomTen(0, gameCanvas.height - 10);
    }

    // Generate each random coordinate for the food
    function randomTen(min, max) {
        return Math.round((Math.random() * (max-min) + min) / 10) * 10;
    }

    // Make sure to draw the food
    function drawFood() {
        ctx.fillStyle = 'red';
        ctx.strokeStyle = 'darkred';
        ctx.fillRect(foodX, foodY, 10, 10);
        ctx.strokeRect(foodX, foodY, 10, 10);
    }
</script>