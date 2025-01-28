function getComputerChoice () {
    let computerChoice = Math.floor(Math.random()*3)
    console.log(computerChoice);
    switch (computerChoice) {
        case 0: 
        return "rock";
        case 1:
        return "paper";
        case 2:
        return "scissors";
    }
}

function getHumanChoice () {
    while(true){
        let humanChoice = window.prompt("Pick one: rock, paper or scissors!");
        if(humanChoice.toLowerCase() === "rock" || humanChoice.toLowerCase() === "paper" || humanChoice.toLowerCase() === "scissors"){
            return humanChoice;
        } 
        alert("Invalid choice!");
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if((humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock")){
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

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(humanSelection);
console.log(computerSelection);

playRound(humanSelection, computerSelection);