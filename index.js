function getComputerChoice() {
    compNumber = Math.floor(Math.random() * 3);

    switch(compNumber){
        case 0:
            return "Paper";
            break;
        case 1:
            return "Rock";
            break;
        case 2:
            return "Scissors";
            break;
        default:
            return "You fucked up!"
            break;
    }
}


function playRound(computerChoice, playerChoice) {

    console.log(`Computer's choice: ${computerChoice}\nPlayer's choice: ${playerChoice}\n\n`);
    if(
        playerChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper" ||
        playerChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissors" ||
        playerChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "rock"
        ) {
        console.log(`You lose, ${computerChoice} beats ${playerChoice}!`)
    } else if(
        playerChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors" ||
        playerChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock" ||
        playerChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper"
        ) {
        console.log(`You win, ${playerChoice} beats ${computerChoice}`);
    } else {
        console.log(`It's a tie!`);
    }
}

function game(rounds) {
    for(let i = 0; i < rounds; i++) {
        let computerChoice = getComputerChoice();
        let playerAnswer = window.prompt("Hey, we are playing Rock Paper Scissors\n Choose your weapon:").toLowerCase();
        let playerChoice = playerAnswer.charAt(0).toUpperCase() + playerAnswer.slice(1);

        playRound(computerChoice, playerChoice)
    }
}

game(5);