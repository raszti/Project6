// Enemy objetcs
var Enemy = function() {

    this.speed = Math.random() + 1.5;
    this.x = -1 * (Math.random()*5 + 1);
    this.y = Math.floor(Math.random()*3) + 1;

    this.sprite = "images/enemy-bug.png";
};

// Updates the enemy's position
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

    this.x += this.speed*dt;

    if (this.x > 5){
      this.x = -1 * (Math.random() + 1);
      this.y = Math.floor(Math.random()*3) + 1;
      this.speed = (Math.random() + 1.5) * (Math.random() + 1);
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x * 101, ((this.y - 0.35) * 83));
};

// Now write your own player class
var Player = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = 2;
    this.y = 5;
    this.lives = 3;
    this.points = 0;
    // The image/sprite for our player, this uses
    // a helper we've provided to easily load images
    this.sprite = "images/char-boy.png";
};

// Updates player position
Player.prototype.update = function(dt) {
    this.x += moveX;
    this.y += moveY;
    moveX = 0;
    moveY = 0;
}

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x * 101, ((this.y - 0.5) * 83));
}

// Increasing the number of collected points by one and update it on the screen
Player.prototype.addPoint = function(){
  this.points ++;
  $(".score").replaceWith(`<p class="score">Points: ${this.points}</p>`);
}

// Reduce the number of lives the player has left and update it on the screen
Player.prototype.lifeLost = function(){
  this.lives--;
  $(".heart").last().removeClass("heart").addClass("heart-lost");
  if (!this.lives){
    game.paused = true;
    $(".score-result").replaceWith(`<p class="score-result">You made ${player.points} points.</p>`);
    $(".modal").css("display", "block");
  }
}

var moveX = 0;
var moveY = 0;

// Handle the key inputs for player movements, stores the movement in a variable
// for the update method to use
Player.prototype.handleInput = function(key){
  if (!game.paused){
    switch (key) {
      case "left":
        if (this.x > 0){
        //this.x -= 1;
        moveX = -1;
        }
        break;
      case "up":
        if (this.y > 1){
        //this.y -= 1;
        moveY = -1;
        } else {
          this.y = 5;
          this.x = 2;
          player.addPoint();
        }
        break;
      case "right":
        if (this.x < 4){
        //this.x += 1;
        moveX = 1;
        }
        break;
      case "down":
        if (this.y < 5){
        //this.y += 1;
        moveY = 1;
        }
        break;
    }
  }
}

// Create a game to help pause the game and creates
var Game = function(){
  this.paused = false;
  allEnemies = [];
  var enemy1 = new Enemy();
  var enemy2 = new Enemy();
  var enemy3 =  new Enemy();
  allEnemies.push(enemy1,enemy2,enemy3);
}

// Create a new game (with enemies and player)
var allEnemies = [],
    game = new Game(),
    player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method.
document.addEventListener("keyup", function(e) {
    var allowedKeys = {
        37: "left",
        38: "up",
        39: "right",
        40: "down"
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

// Select or change character to play
$(".players-options").on("click", function(event){
  var character = $(event.target).attr("alt");
  switch (character){
    case "boy":
        player.sprite = "images/char-boy.png";
        break;
    case "cat_girl":
        player.sprite = "images/char-cat-girl.png";
        break;
    case "pink_girl":
        player.sprite = "images/char-pink-girl.png";
        break;
    case "princess_girl":
        player.sprite = "images/char-princess-girl.png";
        break;
  }
});
