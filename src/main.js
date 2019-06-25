var cards = [
  { name: 'circle', img: 'images/circle.png' },
  { name: 'circle', img: 'images/circle.png' },
  { name: 'circle', img: 'images/circle.png' },
  { name: 'circle', img: 'images/circle.png' },
  { name: 'circle', img: 'images/circle.png' },
  
  { name: 'plus', img: 'images/plus.png' },
  { name: 'plus', img: 'images/plus.png' },
  { name: 'plus', img: 'images/plus.png' },
  { name: 'plus', img: 'images/plus.png' },
  { name: 'plus', img: 'images/plus.png' },
  
  { name: 'waves', img: 'images/waves.png' },
  { name: 'waves', img: 'images/waves.png' },
  { name: 'waves', img: 'images/waves.png' },
  { name: 'waves', img: 'images/waves.png' },
  { name: 'waves', img: 'images/waves.png' },

  { name: 'square', img: 'images/square.png' },
  { name: 'square', img: 'images/square.png' },
  { name: 'square', img: 'images/square.png' },
  { name: 'square', img: 'images/square.png' },
  { name: 'square', img: 'images/square.png' },

  { name: 'star', img: 'images/star.png' },
  { name: 'star', img: 'images/star.png' },
  { name: 'star', img: 'images/star.png' },
  { name: 'star', img: 'images/star.png' },
  { name: 'star', img: 'images/star.png' }
];

    let secretCards = [];
    let turns = 0;
    let score = 0;
    let answer = '';
    // let ind = [0,1,2,3,4];

  
  $('#play-button').click(function(){
    let espQuiz = new ESPquiz(cards);
    espQuiz.startGame();
    espQuiz.randomizeCards();
    // SEPARATED OUT TO DRAW THE FIRST CARD BEFORE MAKING MY FIRST ANSWER SELECTION
    espQuiz.drawSecretCard();
    
  $('.selection').click(function(){
    espQuiz.makeSelection();
    console.log("Selection has been made")
  });
  
  $('.show-secret-card').click(function(){
    espQuiz.checkAnswer(); // also checks if gameOver();
  });
  
    // IF NOT FIRST ROUND, RUN BELOW
    // this is where the listener for the get-next button should trigger
    // hiding the big cards and showing the selection cards buttons
  $('.get-next').click(function(){
    espQuiz.drawSecretCard();
  });
  
});
