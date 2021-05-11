var canvas;
var backgroundImg;
var GameState = 0;
var PlayerCount;
var database;
var form;
var player;
var game;
var allPlayers;
var car1;
var car2;
var car3; 
var car4;
var cars;

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.GetState();
  game.start();
}

function draw(){
  if(PlayerCount===4){
    game.update(1);
  }

  if(GameState===1){
    clear();
    game.play();
  }
}

