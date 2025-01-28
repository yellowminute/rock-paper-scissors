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

console.log(getComputerChoice());
console.log(getHumanChoice());