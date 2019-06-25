class ESPquiz{
  constructor(cards){
    this.cards = cards;
    this.secretCards = [];
    // this.secretCard;
    // this.answer = '';
  };
  
  startGame() {
    $('#play-button').toggle('active');
    console.log('Play button hidden');
    $('.show-secret-card').toggle('active');
    $('.show-selected-card').toggle('active');

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
  
  // MOVING THIS OUT OF checkAnswer(); TO DRAW A CARD FROM THE SECRET CARDS PILE
  drawSecretCard() {
    let index = Math.floor(Math.random()*this.cards.length);
    this.secretCard = this.cards[index];
    console.log(this);
    console.log(`The secret card is a ${this.secretCard.name} at position ${index}`);

    this.secretCards.push(this.secretCard.name);
    console.log(this.secretCards);
  };

  makeSelection() {  
    let flipString = (`<img src="images/${answer}.png" alt="${answer}">`);
    $('.show-selected-card').html(flipString);
    console.log(`${flipString} has been flipped`);

    $('.show-secret-card').toggle('active');      
    console.log('show-secret-card has been toggled');

    $('.show-selected-card').toggle('active');
    console.log('show-selected-card has been toggled');

    $('.cards').toggle('active');
    console.log('Cards have been toggled');

    $('.instructions').toggle('active');
    console.log('Instructions have been toggled');
  };
  
  checkAnswer() {
    // CHECK IF CORRECT, INCREMENT SCORE, CHECK IF GAME OVER  
    if (answer === this.secretCard.name){
      // flip secret card
      let htmlString = (`<img src="${this.secretCard.img}" alt="${this.secretCard.name}">`);
      $('.secret-card').html(htmlString);
      // end flip secret card
      
      score++;
      $("span.theScore").text("0" + score);
      
      // alert('*** CORRECT ***');
      
      // flip Check to Next
      let nextString = (`<button id="next" class="btn get-next active">CORRECT! &#9658;</button>`);
      $('.show-secret-card').html(nextString);
      // end flip Check to Next
      $('.cards').toggle('active');
      // console.log('Cards have been toggled');
      // $('.show-secret-card').toggle('active');
      // $('.show-selected-card').toggle('active');
      
    } else {
      // flip secret card
      let htmlString = (`<img src="${this.secretCard.img}" alt="${this.secretCard.name}">`);
      $('.secret-card').html(htmlString);
      // end flip secret card

      // alert('*** WRONG ***');
      
      // flip Check to Next
      let nextString = (`<button id="next" class="btn get-next active">WRONG! &#9658;</button>`);
      $('.show-secret-card').html(nextString);
      // end flip Check to Next
      $('.cards').toggle('active');
      // console.log('Cards have been toggled');
      // $('.show-secret-card').toggle('active');
      // $('.show-selected-card').toggle('active');
    };
    turns++;
    console.log(`# turns played: ${turns}`);
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
