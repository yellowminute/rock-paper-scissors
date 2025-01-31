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

// function getHumanChoice() {
//     while(true){
//         let humanChoice = window.prompt("Pick one: rock, paper or scissors!");
//         if(humanChoice.toLowerCase() === "rock" || 
//             humanChoice.toLowerCase() === "paper" || 
//             humanChoice.toLowerCase() === "scissors"){
//             return humanChoice;
//         } 
//         alert("Invalid choice!");
//     }
// }

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    console.log(humanChoice);
    console.log(computerChoice);
    if((humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock")){
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
}

function playGame() {
    /* for(i=0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    } */
    if(humanScore > computerScore){
        console.log("Congratulations! You're the winner!");
    }
    else{
        console.log("Computer wins the game! Better luck next time!");
    }
}

let humanScore = 0;
let computerScore = 0;


const buttons = document.querySelectorAll("button");
const containerHeader = document.querySelector(".container-header");
const gameInfo = document.createElement("div");
gameInfo.classList.add("gameInfo");
containerHeader.appendChild(gameInfo);

buttons.forEach((button => {
    button.addEventListener("click", () => {
        const computerSelection = getComputerChoice();
        playRound(button.id, computerSelection);
    });
}));





// playGame();