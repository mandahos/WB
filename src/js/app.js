const initClock = require('./clock');
const initWordGuessingGame = require("./word-guess");
const styles = require('../css/styles.css');


// handles page loading logic
let interval = setInterval(function () {
  if (document.readyState === 'complete') {
    clearInterval(interval);

    initClock();

    // if on word guessing game page, init guessing game
    if (window.location.pathname === '/word-guess.html') {
      initWordGuessingGame();
    }
  }
}, 100);


function setCardImage() {
  const cardImg = document.getElementById('card-word-guessing-game-image');
  
  cardImg.setAttribute('src', cardImage.default);
}

setCardImage();








