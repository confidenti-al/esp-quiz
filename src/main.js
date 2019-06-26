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

  
  $('#play-button').click(function(){
    let espQuiz = new ESPquiz(cards);
    espQuiz.startGame();
    espQuiz.randomizeCards();
    espQuiz.drawSecretCard();
    
  $('.selection').click(function(){    // ON CLICK WILL SWAP CLASS ON THE BUTTON TO GET-NEXT
    answer = $(this).children().attr('id');
    // console.log($(this).children().attr('id'));
    // console.log(answer);
    console.log(this);
    espQuiz.makeSelection();
  });
  
  $('.show-secret-card').click(function(){ // ***PROBLEM*** THiS IS LISTENING FOR THE DIV CLASS, NOT BUTTON
    espQuiz.checkAnswer(); // also checks if gameOver();
  });
  
    // IF NOT FIRST ROUND, RUN BELOW
    // this is where the listener for the get-next [NEEDS DIFFERENT CLASS] button should trigger
    // hiding the big cards and showing the selection cards buttons
  $('.center-button').click(function(){
    alert('Center button onclick event has fired!');
    espQuiz.drawSecretCard();
  });
  
});
