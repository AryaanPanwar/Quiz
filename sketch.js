var canvas;
var gameState=0;
var database,contestantCount
var quiz,question,contestant;

function setup(){
  canvas = createCanvas(850,400);
  database=firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  if(ContestantCount===4){
    game.update(1);
    
  }
  if(ContestantCount===1){
    clear();
    game.play();
  }
  
}
