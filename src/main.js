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
    
    $('#continue-button').click(function(){
      $('#continue-button').toggle('active');
      console.log('Continue button hidden');
      $('.msgs').toggle('active');
      $('div.show-secret-card').show();
    espQuiz.drawSecretCard();
    });

    $('.selection').click(function(){
    answer = $(this).children().attr('id');
    // console.log($(this).children().attr('id'));
    // console.log(answer);
    console.log(this);
    espQuiz.makeSelection();
    $('div.show-secret-card').removeClass('ignore');
    });
  
  $('.show-secret-card').click(function(){
    $('.msgs').toggle('active');

    espQuiz.checkAnswer(); // also checks if gameOver();
  });
  
  
});
