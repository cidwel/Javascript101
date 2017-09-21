let drawModule = (function(){

    let snakeBody = function (x,y){
        ctx.fillStyle='green';
        ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize,snakeSize);
        ctx.strokeStyle = 'darkgreen';
        ctx.strokeRect(x*snakeSize,y*snakeSize,snakeSize,snakeSize);
    }
    let pizza = function(x, y){
        ctx.fillStyle = 'yellow';
        ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
        ctx.fillStyle = 'red';
        ctx.fillRect(x*snakeSize+1, y*snakeSize+1, snakeSize-2, snakeSize-2);
    }
    let scoreText = function (){
        let score_text = "Score " + score;
        ctx.fillStyle = 'blue';
        ctx.fillText(score_text,145, 10);
    }
    let drawSnake = function(){
        let length = 5;
        snake = [];
        for(let i = length -1; i>=0; i--){
            snake.push({x:i,y:0});
        }
    }
    let createFood = function (){
        food ={
            x: Math.floor((Math.random() *35)+1),
            y: Math.floor((Math.random() *35)+1)
        }
        for(let i=0;i>snake.length; i++){
            let snakeX = snake[i].x;
            let snakeY = snake[i].y;

            if(food.x === snakeX && food.y === snakeY || food.y === snakeY && food.x === snakeX){
                food.x = Math.floor((Math.random() *35) + 1);
                food.y = Math.floor((Math.random() *35) + 1);
            }
        }
    }
    let paint = function () {
        let base_image = new Image();
        base_image.src = 'res/enemybackground.png';
        ctx.backgroundImage = base_image;
        ctx.fillRect(0,0,w,h);


        btnStart.setAttribute('disabled', false);

        let snakeX = snake[0].x;
        let snakeY = snake[0].y;

        if (direction == 'right') {
            snakeX++;
        }
        else if (direction == 'left') {
            snakeX--;
        }
        else if (direction == 'up') {
            snakeY--;
        }
        else if (direction == 'down') {
            snakeY++;
        }

        if (snakeX == -1 || snakeX == w / snakeSize || snakeY == -1 || snakeY == h / snakeY || checkCollision(snakeX, snakeY, snake)) {
            
            btnStart.removeAttribute('disabled',false);

            ctx.clearRect(0, 0, w, h);
            gameloop = clearInterval(gameloop);
            return;
        }

        if (snakeX == food.x && snakeY == food.y) {
            var tail = {x: snakeX, y: snakeY}; //Create a new head instead of moving the tail
            score++;

            createFood();
        }else{
            var tail = snake.pop(); //pops out the las cell
            tail.x = snakeX;
            tail.y = snakeY;
        }
        //the snake can now eat the food
        snake.unshift(tail); //puts back the tail as the first cell

        for(let i=0; i< snake.length; i++){
            snakeBody(snake[i].x,snake[i].y);
        }
        pizza(food.x,food.y);

        scoreText();
    }

    let checkCollision = function(x,y,array){
        for(let i=0;i<array.length; i++){
            if(array[i].x === x && array[i].y === y){
                return true;
                console.log("doner - true");
            }else{
                console.log("doner - false");

                return false;
            }
        }
    }
    let init = function () {
        direction = 'down';
        drawSnake();
        createFood();
        gameloop = setInterval(paint, 60);
    }

    return{
        init : init
    };

}());


