const getUserChoice = getUserChoice => {
    getUserChoice = getUserChoice.toLowerCase();
  if (getUserChoice === 'rock' || getUserChoice === 'paper' || getUserChoice === 'scissors' || getUserChoice === 'bomb')
  {return getUserChoice;
  } else {return 'Please pick rock, paper, or scissors';
  }
};

const getComputerChoice = () => {
    randomNumber = Math.floor(Math.random() * 2);
    switch(randomNumber) {
      case 0:
        return 'rock';
        break;
      case 1:
          return 'scissors';
          break;
       case 2:
           return 'paper';
           break;
        
    }
};

const determineWinner = (getUserChoice, getComputerChoice) => {
    if (getUserChoice === getComputerChoice) {
        return 'It\'s a tie';
    } else if (getUserChoice === 'rock' && (getComputerChoice === 'paper' || getComputerChoice === 'scissors')){
        return 'You won!';
    } else if (getUserChoice === 'bomb') {
        return 'You won!';
    } else if (getUserChoice === 'scissors' && getComputerChoice === 'paper') {
        return 'You won!';
    } else if (getUserChoice === 'scissors' && getComputerChoice === 'rock') {
        return 'You lost!';
    } else if (getUserChoice === 'paper' && getComputerChoice === 'scissors') {
        return 'You lost!';
    } else (getUserChoice === 'paper' && getComputerChoice === 'rock') 
        return 'You won!';
    
};

const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log(`You threw: ${userChoice}`);
    console.log(`The computer threw: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
};

playGame();
