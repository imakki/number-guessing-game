let randomNumber = Math.floor(Math.random() * 100 + 1); 

const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHigh= document.querySelector('.lowOrHigh');

let guessCount = 1;
let resetButton;
guessField.focus();


//Checking user guess
function checkGuess(){
    const userGuess = Number(guessField.value);     
    
    if(guessCount === 1){
        guesses.textContent = 'Previous Guesses: ' ;
    }

    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulation your guess is right';
        lastResult.style.backgroundColor = 'green';
        lowOrHigh.textContent = '';
        setGameOver();
    }else if(guessCount === 10){
        lastResult.textContent = 'You have exceeded the maximum number of tries!!!!!';
        lastResult.style.backgroundColor = 'red';
        lowOrHigh.textContent = '';
        setGameOver();
    }else {
        lastResult.textContent = 'wrong';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            lowOrHigh.textContent = 'last guess was too low';
        } else if(userGuess > randomNumber) {
            lowOrHigh.textContent = 'last guess was too high';  
        }
    }
    
    guessCount++; 
    guessField.value = '';
    guessField.focus();

}

guessSubmit.addEventListener('click', checkGuess);


//Reset Game
function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton  = document.createElement('button');
    resetButton.textContent = 'Start New Game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;
    let resetParas = document.querySelectorAll('.resultParas p');
    for(i=0;i<resetParas.length;i++){
        resetParas[i].textContent = '';
    }
    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    lastResult.style.backgroundColor = '#fff';
    randomNumber = Math.floor(Math.random() * 100 + 1); 
}