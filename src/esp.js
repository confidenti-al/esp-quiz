class ESPquiz{
  constructor(cards){
    this.cards = cards;
    this.secretCards = [];
    // this.answer = '';
  };
  
  startGame() {
    $('#play-button').toggle('active');
    $('.show-secret-card').toggle('active');
    $('.show-selected-card').toggle('active');
    console.log('Play button hidden');
    let turnsRemaining = 10;
    console.log(`Turns remaining = ${turnsRemaining}`);
    let score = 0;
    console.log(`Score = ${score}`);
    $('div.cards').removeClass('ignore'); 
    $('div.show-secret-card').removeClass('ignore');   
  };

  randomizeCards() {
    this.cards.sort((a,b)=>{return Math.floor(Math.random()*3)-1});
    console.log('Cards have been shuffled');
    console.log(cards);
  };
  
  // makeSelection() {
    // got moved to the main.js file, but should be here
  // };

  checkAnswer() {
    let index = Math.floor(Math.random()*this.cards.length);
    let secretCard = this.cards[index];
    console.log(this);
    console.log(`The secret card is a ${secretCard.name} at position ${index}`);

    this.secretCards.push(secretCard.name);
    console.log(this.secretCards);

    turns++;
    console.log(`# turns played: ${turns}`);

    // CHECK IF CORRECT, INCREMENT SCORE, CHECK IF GAME OVER
    // checkAnswer(); should be here, and should be called from end of makeSelection();
    
    if (answer === secretCard.name){
      // flip secret card
      let htmlString = (`<img src="${secretCard.img}" alt="${secretCard.name}">`);
      $('.secret-card').html(htmlString);
      // end flip secret card
      
      score++;
      $("span.theScore").text("0" + score);
      alert('*** CORRECT ***');
      
      // flip Check to Next
      let nextString = (`<button id="next" class="btn get-next active">Next &#9658;</button>`);
      $('.show-secret-card').html(nextString);
      // end flip Check to Next
      $('.cards').toggle('active');
      // console.log('Cards have been toggled');
      // $('.show-secret-card').toggle('active');
      // $('.show-selected-card').toggle('active');
      
    } else {
      // flip secret card
      let htmlString = (`<img src="${secretCard.img}" alt="${secretCard.name}">`);
      $('.secret-card').html(htmlString);
      // end flip secret card
      alert('*** WRONG ***');
      
      // flip Check to Next
      let nextString = (`<button id="next" class="btn get-next active">Next &#9658;</button>`);
      $('.show-secret-card').html(nextString);
      // end flip Check to Next
      $('.cards').toggle('active');
      // console.log('Cards have been toggled');
      // $('.show-secret-card').toggle('active');
      // $('.show-selected-card').toggle('active');
    };
    console.log(`Answer: ${answer}`);
    console.log(`Score: ${score}`);
    
    this.gameOver();
  };
  
  gameOver(){
    if(turns === 10) {
      $('div.show-secret-card').toggleClass('ignore');
      $('div.cards').toggleClass('ignore');
      alert('Game Over!');
      $("span.theScore").text('00');
      this.secretCards = this.clearSecretCards();
      $('#play-button').toggle('active');
      $('.show-secret-card').toggle('active');
      $('.show-selected-card').toggle('active');
    }
    return true;
  }
  
  clearSecretCards() {
    return [];
  }
  
};
  
  
  // setTimeout(function(){
  //   defaultString = (`<img src="../images/ironhack-deck.png" alt="">`);
  //   $('.secret-card').html(defaultString);
  //   $('.cards').toggle('active');
  // }, 1000);
