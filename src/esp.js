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
    $('#continue-button').toggle('active');
    console.log('Continue button hidden');
    $('.show-selected-card').toggle('active');
    $('.show-secret-card').toggle('active');
    $('.msgs').toggle('active');

    let turnsRemaining = 10;
    console.log(`Turns remaining = ${turnsRemaining}`);
    console.log(`Turns played = ${turns}`);

    let score = 0;
    console.log(`Score = ${score}`);
    // $("span.theScore").text('00');
    $('div.flex-center').removeClass('ignore');
    console.log('REMOVED class IGNORE from CARDS div');
    $('div.show-secret-card').removeClass('ignore');   
    console.log('REMOVED class IGNORE from SHOW SECRET div');
  };

  randomizeCards() {
    this.cards.sort((a,b)=>{return Math.floor(Math.random()*3)-1});
    console.log('Cards have been shuffled');
    console.log(cards);
  };
  
  drawSecretCard() {
    if (turns !== 0){
      console.log('drawSecretCard(); !== 0 is running');
      $('.cards').toggle('active');
      console.log('Cards have been toggled AGAIN');
      
      $('.show-secret-card').toggle('active');
      console.log('Selected card has toggled AGAIN')
      $('.show-selected-card').toggle('active');
      console.log('Check button has toggled AGAIN')

      let deckString = (`<img src="images/ironhack-deck.png" alt="">`);
      $('.secret-card').html(deckString);
      console.log('DECK HAS BEEN RESET!!');
    };
    let index = Math.floor(Math.random()*this.cards.length);
    this.secretCard = this.cards[index];
    console.log(this);
    console.log(`The secret card is a ${this.secretCard.name} at position ${index}`);

    this.secretCards.push(this.secretCard.name);
    console.log(this.secretCards);
  };

  makeSelection() {  
    console.log('Selection has been made');
    let flipString = (`<img src="images/${answer}.png" alt="${answer}">`);
    $('.show-selected-card').html(flipString);
    console.log(`${flipString} has been flipped`);

    $('.show-secret-card').toggle('active');      
    console.log('show-secret-card has been toggled');

    $('.show-selected-card').toggle('active');
    console.log('show-selected-card has been toggled');

    $('.cards').toggle('active');
    console.log('Cards have been toggled');
  };
  
  checkAnswer() {
    // CHECK IF CORRECT, INCREMENT SCORE, FLIP CARDS, CHECK IF GAME OVER  
    if (answer === this.secretCard.name){
      // flip Secret Card
      let htmlString = (`<img src="${this.secretCard.img}" alt="${this.secretCard.name}">`);
      $('.secret-card').html(htmlString);
      // increment score      
      score++;
      $("span.theScore").text("0" + score);      
      
      // CORRECT/INCORRECT MSGS
      let msgString = (`<h1>YOU'RE AMAZING!!</h1>`);
      
      $('.msgs').html(msgString);
      
    } else {
      // flip Secret Card
      let htmlString = (`<img src="${this.secretCard.img}" alt="${this.secretCard.name}">`);
      $('.secret-card').html(htmlString);
      
      // CORRECT/INCORRECT MSGS
      let msgString = (`<h1>BETTER LUCK NEXT TIME...</h1>`);
      $('.msgs').html(msgString);
    };
    
    $('#continue-button').toggle('active');
    console.log('Continue button hidden');
    // add ignore class to check button 
    $('div.show-secret-card').addClass('ignore');   
    console.log('ADDED class IGNORE to SHOW SECRET div');
    $('div.show-secret-card').hide();

    // increment turns
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
      
      
      this.secretCards = this.clearSecretCards();
      $('#play-button').toggle('active');
      $('.show-secret-card').toggle('active');
    setTimeout(function(){
      if(!alert('GAME OVER! Play again?')){window.location.reload();}
    }, 1000);
    }
    return true;
  }
  
  clearSecretCards() {
    return [];
  }
  
};
  
  
  // setTimeout(function(){
  //   defaultString = (`<img src="../images/ironhack-deck.png" alt="">`);  <---------[***THIS***]
  //   $('.secret-card').html(defaultString);
  //   $('.cards').toggle('active');
  // }, 1000);
