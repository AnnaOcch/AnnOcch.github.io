// the Game object used by the phaser.io library
var stateActions = { preload: preload, create: create, update: update };

// Phaser parameters:
// - game width
// - game height
// - renderer (go for Phaser.AUTO)
// - element where the game will be drawn ('game')
// - actions on the game state (or null for nothing)
var game = new Phaser.Game(790, 400, Phaser.AUTO, 'game', stateActions);
var score = 0;
var labelScore;
var player;
var pipes = [];

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
  game.physics.startSystem(Phaser.Physics.ARCADE);
    // set the background colour of the scene
    game.stage.setBackgroundColor("#F3D3A3");
  //  game.input.onDown.add(clickHandler);
  //  labelScore = game.add.text(20, 20, "0");
    labelScore = game.add.text(20, 20, "0", {fill: "#FFFFFF"});
    player = game.add.sprite(10, 200, "playerImg");
    game.physics.arcade.enable(player);
    player.body.velocity.x =5;
    player.body.velocity.y = -10;
    player.body.gravity.y = 100;
    game.input.keyboard.addKey(Phaser.Keyboard.RIGHT)
                   .onDown.add(moveRight);
//     for(var count=0; count<8; count+=1){
//       if(count != 4){
//          game.add.sprite(300, 50 * count, "pipeBlock");
//      }
//    }
// game.add.sprite(20, 0, "pipeBlock");
// game.add.sprite(20, 50, "pipeBlock");
// game.add.sprite(20, 100, "pipeBlock");
// game.add.sprite(20, 150, "pipeBlock");
// game.add.sprite(20, 200, "pipeBlock");
// game.add.sprite(20, 250, "pipeBlock");
// game.add.sprite(20, 300, "pipeBlock");
// game.add.sprite(20, 350, "pipeBlock");
game.input.keyboard
    .addKey(Phaser.Keyboard.SPACEBAR)
    .onDown
    .add(playerJump);

var pipeInterval = 1.75 * Phaser.Timer.SECOND;
game.time.events.loop(
    pipeInterval,
    generatePipe
);


}

/*
 * This function updates the scene. It is called for every new frame.
 */
function update() {
  game.physics.arcade.overlap(
          player,
  		  pipes,
  		  gameOver);

}



function clickHandler(event) {
    alert("Click!");
}


function changeScore() {
    score = score + 1;
    labelScore.setText(score.toString());
}

function moveRight() {
	player.x = player.x + 1;
}

// function generatePipe(){
//     var gapStart = game.rnd.integerInRange(1, 5);
//     for (var count=0; count<8; count=count+1) {
//         if(count != gapStart && count != gapStart + 1) {
//             game.add.sprite(0, count * 50, "pipeBlock");
//         }
//     }
// }

// //generatePipe with addPipeBlock
// function generatePipe() {
//     // calculate a random position for the gap
//     var gap = game.rnd.integerInRange(1 ,5);
//     // generate the pipes, except where the gap should be
//     for (var count=0; count<8; count++) {
//         if (count != gap && count != gap+1) {
//             addPipeBlock(40, count*50);
//         }
//     }
// }


// add pipeBlock with Phaser
function addPipeBlock(x, y) {
    var pipeBlock = game.add.sprite(x,y,"pipeBlock");
    pipes.push(pipeBlock);
    game.physics.arcade.enable(pipeBlock);
    pipeBlock.body.velocity.x = -200;
}

function generatePipe() {
    var gap = game.rnd.integerInRange(1 ,5);
    for (var count = 0; count < 8; count++) {
        if (count != gap && count != gap+1) {
            addPipeBlock(750, count * 50);
        }
    }
    changeScore();
}


// function addPipeBlock(x, y) {
//     // create a new pipe block
//     var block = game.add.sprite(x,y,"pipeBlock");
//     // insert it in the 'pipes' array
//     pipes.push(block);
// }

function playerJump() {
    player.body.velocity.y = -100;
}

function gameOver(){
  game.destroy();
//  registerScore(score);
  //score = 0;
  //game.state.restart();
}
