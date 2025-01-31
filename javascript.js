function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*3)
    switch (computerChoice) {
        case 0: 
        return "rock";
        case 1:
        return "paper";
        case 2:
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    console.log(humanChoice);
    console.log(computerChoice);
    if((humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "scissors" && computerChoice === "paper")){
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    }
    else if(humanChoice === computerChoice) {
        console.log(`You both picked ${humanChoice}! It's a draw.`);
    }
    else{
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
    }
}

function playGame() {

    let computerSelection = getComputerChoice();
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button => {
        button.addEventListener("click", () => {
            playRound(button.id, computerSelection);
        });
    }));
    // if(humanScore > computerScore){
    //     console.log("Congratulations! You're the winner!");
    // }
    // else{
    //     console.log("Computer wins the game! Better luck next time!");
    // }
}

let humanScore = 0;
let computerScore = 0;

playGame();