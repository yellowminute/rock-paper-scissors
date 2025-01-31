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
    if( (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "scissors" && computerChoice === "paper")){
            humanScore++;
            gameInfo.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        }
    else if(humanChoice === computerChoice) {
            gameInfo.textContent = `You both picked ${humanChoice}! It's a draw.`;
        }
    else{
            computerScore++;
            gameInfo.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
        }
    gameScore.textContent = `Player: ${humanScore}\n Computer: ${computerScore}`;
}

function playGame() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            let computerSelection = getComputerChoice();
            playRound(button.id, computerSelection);
        });
    });
}

let humanScore = 0;
let computerScore = 0;
const container = document.querySelector(".container-header");
const gameInfo = document.createElement("div");
const gameScore = document.createElement("div");
gameScore.textContent = `Player: ${humanScore}\n Computer: ${computerScore}`;
container.appendChild(gameInfo);
container.appendChild(gameScore);
playGame();