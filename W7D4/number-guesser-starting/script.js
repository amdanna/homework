let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Return a random number 0-9

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuessInput, computerGuessDisplay, target) => {
    human = Math.abs(humanGuessInput - target);
    computer = Math.abs(computerGuessDisplay - target);
    if (human === computer || human < computer) {
        return true;
    } else return false;
}

const updateScore = (winner) => {
    if (winner === 'human') {humanScore ++;
    } else (computerScore ++);
}

const advanceRound = () => {
    currentRoundNumber ++;
}
