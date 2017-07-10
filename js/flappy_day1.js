// the Game object used by the phaser.io library
var stateActions = { preload: preload, create: create, update: update };

// Phaser parameters:
// - game width
// - game height
// - renderer (go for Phaser.AUTO)
// - element where the game will be drawn ('game')
// - actions on the game state (or null for nothing)
var game = new Phaser.Game(790, 400, Phaser.AUTO, 'game', stateActions);
var score = 10;
/*
 * Loads all resources for the game and gives them names.
 */
function preload() {
game.load.image("playerImg", "../assets/jamesBond.gif");
game.load.image("pipeBlock","../assets/pipe.png");
}

/*
 * Initialises the game. This function is only called once.
 */
function create() {
    // set the background colour of the scene
      game.physics.startSystem(Phaser.Physics.ARCADE);
game.stage.setBackgroundColor("#FFD333");
game.add.text(280, 200, "Welcome to my game", {font: "30px Arial", fill: "#FFFFFF"});
//game.input.onDown.add(clickHandler);
labelScore = game.add.text(20, 20, "0", {fill: "#FFFFFF"});
player = game.add.sprite(400, 200, "playerImg");
game.physics.arcade.enable(player);
player.body.velocity.x = 100;
player.body.velocity.y = -100;
player.body.gravity.y = 100;
game.add.sprite(20, 0, "pipeBlock");
game.add.sprite(20, 50, "pipeBlock");
game.add.sprite(20, 100, "pipeBlock");
game.add.sprite(20, 150, "pipeBlock");

for(var count=0; count<8; count=count +1){
  if(count!=3 && count!=4){
    game.add.sprite(400, count*50, "pipeBlock");
  }
}

}

/*
 * This function updates the scene. It is called for every new frame.
 */
function update() {

}

function clickHandler(event) {
    alert("Annalisa");
}
