function getComputerChoice() {                                          //Generate a random choice by getting random element in choices array
    const choices = ['Rock', 'Paper', 'Scissors'];
    let choice = choices[Math.floor(Math.random()*choices.length)];     
    return choice;
} 

function playRound (playerSelection, computerSelection) {               //Play a round by comparing selections and based on them declare a winner
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    let result;
    console.log(playerSelection);
    console.log(computerSelection);
    if( playerSelection === computerSelection ) {
        result = "It's a tie!";
    }
    else if ( ( playerSelection === 'Rock' && computerSelection === 'Scissors' ) ||
              ( playerSelection === 'Paper' && computerSelection === 'Rock' ) ||
              ( playerSelection === 'Scissors' && computerSelection === 'Paper' ) ) {
            result = `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        result = `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    return result;
}

playerSelection = 'scissors';
computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection))