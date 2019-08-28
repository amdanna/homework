const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') ? return userInput; : console.log('Please pick rock, paper, or scissors');
};