function getComputerChoice() {                                          //Generate a random choice by getting random element in choices array
    const choices = ['rock', 'paper', 'scissors'];
    let choice = choices[Math.floor(Math.random()*choices.length)];     
    return choice;
} 

function playRound (playerSelection, computerSelection) {               //Play a round by comparing selections and based on them declare a winner
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection);
    console.log(computerSelection);
    if( playerSelection === computerSelection ) {
        return "It's a tie!";
    }
    else if ( ( playerSelection === 'rock' && computerSelection === 'scissors' ) ||
              ( playerSelection === 'paper' && computerSelection === 'rock' ) ||
              ( playerSelection === 'scissors' && computerSelection === 'paper' ) ) {
            return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }

}

const playerSelection = 'ROck';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));