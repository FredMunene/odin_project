
// getComputerChoice - a random number generator
let humanScore = 0;
let computerScore = 0;
function getComputerChoice(){
    const number = Math.floor(Math.random() * 3)
    switch (number) {
        case 0:
            return 'rock'
        case 1:
            return 'paper'
        case 2:
            return 'scissors'
    }
}

function getHumanChoice(){
    return prompt("What's your sign").toLowerCase();
}


 function playRound(humanChoice, computerChoice){
    if (humanChoice === "paper" && computerChoice === 'rock' ||
        humanChoice === "scissors" && computerChoice === 'paper'||
         humanChoice === "rock" && computerChoice === 'scissors'
    ){
        humanScore++
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
    } else if(humanChoice === computerChoice) {
        console.log(`You draw! ${computerChoice} and ${humanChoice}`)
    } else{
        computerScore++
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
    }

}

export function playGame(){
    let rounds = 0;

    while (rounds < 5){
        playRound(getHumanChoice(),getComputerChoice())
        rounds++
    }
    if (humanScore > computerScore) {
        console.log(`You won with ${humanScore} points!`)
    }else {
        console.log(`You lost with ${humanScore} points!`)
    }
    humanScore = 0;
    computerScore = 0;
}





   

