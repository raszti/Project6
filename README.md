# DeBugger Game
-------------
This project is **a web-based application**.
A simple game which can be controlled by the keyboard.

## Install
----------
Download or clone project folder.
Open index.html in the main project directory by using a web browser that supports html5 and css3.
To successfully run the application you will need an active internet connection.

## The gameplay
---------------

### The characters
The player can choose from 4 characters.

### The board
There is a board of 6x5 fields.
2 rows of green grass fields.
3 rows of roads fields.
1 row of water fields.

### The rules
Player starts from the green area, and have to cross the road avoiding the enemy objects crossing the road.
When the player successfully crossed the roads and reached the water area one point is earned and the player
restarts from the green field. The player has 3 lives. Every time a bug touches the player it loses a life
and it has to go back to the green field and try again.

### The moves
The player can control the game with the arrow buttons of the keyboard.

### The points
The player earns point for successful crossing. The current collected points can be monitored on the right top
corner of the canvas.

### The hearts
The lives of the player are visible in the top left corner of the canvas.

### Pause function
When the player clicks on the canvas the game will be paused, and it can be continued after another click.

## The JavaScript files used to make the application work
--------------------------------------------------------
### app.js
Responsible for creating enemy object, player object and the game object.

### engine.js
The engine of the game is responsible for drawing and updating the canvas.

### resources.js
It eases the process of loading image files so that they can be used in the game.

## The application uses the following external libraries and frameworks
-----------------------------------------------------------------------

- [jQuery 3.2.1 JavaScript library](https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js)
- [Special fonts used](https://fonts.googleapis.com/css?family=Indie+Flower)
- [The starter code provided by UDACITY (Richard Kalehoff)](https://github.com/udacity/frontend-nanodegree-arcade-game)

# How to contribute

First off, thanks for taking the time to contribute!

## Reporting bugs

Bugs are tracked as GitHub issues. After you've determined which repository your bug is related to, create an issue on that repository and provide the following information.

Explain the problem and include additional details to help maintainers reproduce the problem.

## License
----------
Copyright [2017] [Gabor Furesz]

Licensed under the [Apache License, Version 2.0 (the "License")](http://www.apache.org/licenses/LICENSE-2.0);
you may not use this file except in compliance with the License.
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
