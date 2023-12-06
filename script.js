function getComputerChoice() {                                                                      //Generate a random choice by getting random element in choices array
    const choices = ['Rock', 'Paper', 'Scissors'];
    let choice = choices[Math.floor(Math.random()*choices.length)];     
    return choice;
} 

function playRound (playerSelection, computerSelection) {                                           //Play a round by comparing selections and based on them declare a winner
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    let result;
    console.log(`Player: ${playerSelection}`);
    console.log(`Computer: ${computerSelection}`);
    if( playerSelection === computerSelection ) {
       console.log("It's a tie! Play again!");  
       result = playRound(prompt("It's a draw, new pick?"), getComputerChoice());                   //If a draw is played, repeat the round
    }
    else if ( ( playerSelection === 'Rock' && computerSelection === 'Scissors' ) ||
              ( playerSelection === 'Paper' && computerSelection === 'Rock' ) ||
              ( playerSelection === 'Scissors' && computerSelection === 'Paper' ) ) {
            result = `You win! ${playerSelection} beats ${computerSelection}`;
            playerScore++;
    }
    else {
        result = `You lose! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
    }
    return result;
}
let playerScore = 0;
let computerScore = 0;

function game() {                                                                                   //Play a 5 round game with round and game outcome
    for(i = 0; i < 5; i++){
        playerSelection = prompt('Your pick?');
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
    }
    if(playerScore > computerScore){
        console.log(`PlayerScore: ${playerScore}\nComputerScore: ${computerScore}\nYou won the game!!!`);
    }
    else{
        console.log(`PlayerScore: ${playerScore}\nComputerScore: ${computerScore}\nYou lost the game!!!`)
    }
}

game();