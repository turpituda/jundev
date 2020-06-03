const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('invalid choice');
  };
};

function getComputerChoice () {
   let randomNumber = Math.floor(Math.random() * 3);
   switch (randomNumber) {
     case 0:
      return 'rock';
     case 1:
      return 'paper';
     case 2:
      return 'scissors';
   }
}

function determineWinner (userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'tie';
  };

  if (userChoice ==='rock') {
    if (computerChoice === 'paper') {
      return 'computer won';
    } else {
      return 'you won';
    }
  };

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'computer won';
    } else {
      return 'you won';
    }
  };

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'computer won';
    } else {
      return 'you won';
    };
  }
}

function playGame() {
  var userChoice = getUserChoice('rock');
  var computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}
console.log(playGame());
