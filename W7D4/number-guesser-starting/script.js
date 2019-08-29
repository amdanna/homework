let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Return a random number 0-9

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const getAbsoluteDistance = (num1, num2) => {
    return Math.abs(num1 - num2);
}

const compareGuesses = (humanGuessInput, computerGuessDisplay, target) => {
    human = getAbsoluteDistance(humanGuessInput, target);
    computer = getAbsoluteDistance(computerGuessDisplay, target);
    return human <= computer;
}

const updateScore = (winner) => {
    if (winner === 'human') {humanScore ++;
    } else (computerScore ++);
}

const advanceRound = () => currentRoundNumber ++;
}
