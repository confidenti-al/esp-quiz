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
    let ind = [0,1,2,3,4];

  
  $('#play-button').click(function(){
    let espQuiz = new ESPquiz(cards);
    espQuiz.startGame();
    espQuiz.randomizeCards();
    
    // The below should be espQuiz.makeSelection();
    // and should be in the esp.js file
  $('.selection').click(function(){
    console.log("Selection has been made")
    
    answer = $(this).children().attr('id');
      console.log(answer)
      
      let flipString = (`<img src="images/${answer}.png" alt="${answer}">`);
      $('.show-selected-card').html(flipString);
      console.log(`${flipString} has been flipped`);

      $('.show-secret-card').toggle('active');      
      console.log('show-secret-card has been toggled');

      $('.show-selected-card').toggle('active');
      console.log('show-selected-card has been toggled');

      $('.cards').toggle('active');
      console.log('Cards have been toggled');
    });
    // end where makeSelection(); should end

  $('.show-secret-card').click(function(){
    espQuiz.checkAnswer();
  });

    // this is where the listener for the get-next button should trigger
    // hiding the big cards and showing the selection cards buttons
  $('.get-next').click(function(){
    espQuiz.makeSelection();
  });

});


