class ESPquiz{
  constructor(cards){
    this.cards = cards;
    this.secretCards = [];
    this.answer = '';
    // let secretCard;
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
    // THIS NEEDS TO BE MOVED SO THAT THE FIRST STEP OF GAMEPLAY IS SELECTING AN ANSWER
    $('div.cards').removeClass('ignore'); 
    $('div.show-secret-card').removeClass('ignore');   
  };

  randomizeCards() {
    this.cards.sort((a,b)=>{return Math.floor(Math.random()*3)-1});
    console.log('Cards have been shuffled');
    console.log(cards);
  };
  
  // makeSelection() {
    // got moved to the main.js file
  // };

  getNextCard() {
    let index = Math.floor(Math.random()*this.cards.length);
    let secretCard = this.cards[index];
    console.log(this);
    console.log(`The secret card is a ${secretCard.name} at position ${index}`);

    this.secretCards.push(secretCard.name);
    console.log(this.secretCards);

    turns++;
    console.log(`# turns played: ${turns}`);
  // };  

  // checkAnswer(secretCard, answer) {
  // CHECK IF CORRECT, INCREMENT SCORE, CHECK IF GAME OVER
    if (answer === secretCard.name){
      alert('*** CORRECT ***');
      score++;
      $("span.theScore").text("0" + score);
      $('.cards').toggle('active');

      // $('.show-secret-card').toggle('active');
      
      // flip card
      let htmlString = (`<img src="${secretCard.img}" alt="${secretCard.name}">`);
      $('.secret-card').html(htmlString);
      // end flip card

      // $('.show-selected-card').toggle('active');
      
    } else {
      alert('*** WRONG ***');
      $('.cards').toggle('active');

      // $('.show-secret-card').toggle('active');
      
      // flip card
      let htmlString = (`<img src="${secretCard.img}" alt="${secretCard.name}">`);
      $('.secret-card').html(htmlString);
      // end flip card
      
      // $('.show-selected-card').toggle('active');
    };
    console.log(`Answer: ${answer}`);
    console.log(`Score: ${score}`);
    
    this.gameOver();
  };
  
  // showSecretCard(){
  // USE THIS TO FLIP THE CARD AND SHOW IT TO THE USER
  // };

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


