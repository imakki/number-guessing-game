var randomNumber = Math.floor(Math.random() * 100 + 1); //why use floor instead of ceil

var guessField = document.querySelector('.guessField');
var guessSubmit = document.querySelector('.guessSubmit');
var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHigh= document.querySelector('.lowOrHigh');

var guessCount = 1;
guessField.focus();

console.log(randomNumber);

function checkGuess(){
    var userGuess = Number(guessField.value); //why putting number?
    
    if(guessCount === 1){
        guesses.textContent = 'Previous Guesses: ' ;
    }

    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulation your guess is right';
        lastResult.style.backgroundColor = 'green';
        lowOrHigh.textContent = '';
    }else if(guessCount === 10){
        lastResult.textContent = 'You have exceeded the maximum number of tries!!!!!';
        lastResult.style.backgroundColor = 'red';
        lowOrHigh.textContent = '';
    }else {
        lastResult.textContent = 'wrong';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            lowOrHigh.textContent = 'last guess was too low';
        } else if(userGuess > randomNumber) {
            lowOrHigh.textContent = 'last guess was too high';  
        }
    }
    
    guessCount++; //why guessCount is incremented here?? aq1

}

guessSubmit.addEventListener('click', checkGuess);

