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
    if((humanChoice === "paper" && computerChoice === "rock") || 
    (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "scissors" && computerChoice === "paper")){
            humanScore++;
            divInfo.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        }
        else if(humanChoice === computerChoice) {
            divInfo.textContent = `You both picked ${humanChoice}! It's a draw.`;
        }
        else{
            computerScore++;
            divInfo.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
        }
        container.appendChild(divInfo);
    }
    
function playGame() {
    
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button => {
        button.addEventListener("click", () => {
            let computerSelection = getComputerChoice();
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
const container = document.querySelector(".container-header");
const divInfo = document.createElement("div");

playGame();