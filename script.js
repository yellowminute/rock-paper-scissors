function getComputerChoice() {                                          //Generate a random choice by getting random element in choices array
    const choices = ['rock', 'paper', 'scissors'];
    let choice = choices[Math.floor(Math.random()*choices.length)];     
    return choice;
} 

console.log(getComputerChoice());