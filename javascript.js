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
    gameScore.textContent = `Player: ${humanScore}\r\n Computer: ${computerScore}`;
}

function playGame(event) {
    let computerSelection = getComputerChoice();
    playRound(event.currentTarget.id, computerSelection);
    if(computerScore === 5 || humanScore === 5){
        buttons.forEach((button) => {
            button.removeEventListener("click", playGame);
        });
        computerScore === 5 ? gameInfo.textContent += "COMPUTER WINS THE GAME!" :
        gameInfo.textContent += "CONGRATULATIONS!";
    };
}




let humanScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", playGame);                      
});
const container = document.querySelector(".container-header");
const gameInfo = document.createElement("div");
const gameScore = document.createElement("div");
gameScore.classList.add = ("gameScore");
gameInfo.classList.add = ("gameInfo");
gameScore.textContent = `Player: ${humanScore}\r\n Computer: ${computerScore}`;
container.appendChild(gameScore);
container.appendChild(gameInfo);