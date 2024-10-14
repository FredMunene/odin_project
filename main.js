// Keep track of scores
let humanScore = 0;
let computerScore = 0;

// Function to get a random computer choice
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to play a single round
function playRound(humanChoice, computerChoice) {
    // Normalize to lowercase to compare
    const human = humanChoice.toLowerCase();
    const computer = computerChoice.toLowerCase();

    let div = document.createElement('div')
    let p1 = document.createElement('p')
    p1.textContent = `Your Score ${humanScore}`
    let p2 = document.createElement('p')
    p2.textContent = `Computer Score ${computerScore}`

    div.append(p1)
    div.append(p2)
    body.append(div)

    // Determine the winner
    if (
        (human === 'rock' && computer === 'scissors') ||
        (human === 'scissors' && computer === 'paper') ||
        (human === 'paper' && computer === 'rock')
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    } else if (human === computer) {
        return `It's a draw! You both chose ${humanChoice}`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
}

// Function to play the game
export function playGame(humanChoice) {
    const computerChoice = getComputerChoice(); // Get computer's choice
    const result = playRound(humanChoice, computerChoice); // Play a round
    console.log(result); // Output the result

    // Display current scores
    console.log(`Human: ${humanScore}, Computer: ${computerScore}`);

    // Check if either player has reached a winning score
    if (humanScore >= 5) {
        console.log('Congratulations! You won the game!');
        resetGame();
    } else if (computerScore >= 5) {
        console.log('Sorry! The computer won the game!');
        resetGame();
    }
}

// Function to reset the game after someone wins
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    console.log('Game has been reset.');
}
