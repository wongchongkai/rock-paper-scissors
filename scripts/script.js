let moves = ["ROCK", "PAPER", "SCISSORS"];
const playerWin = 0;
const computerWin = 1;
const tie = 2;


function computerPlay(){
    return moves[Math.floor(Math.random() * moves.length)];
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    console.log(`Player: ${playerSelection}\nComputer: ${computerSelection}`);

    switch(playerSelection){
        case "ROCK":
            switch(computerSelection){
                case "ROCK":
                    console.log("Both players chose Rock. It's a tie!");
                    return tie;
                case "PAPER":
                    console.log("Sorry, you lose! Paper beats Rock.");
                    return computerWin;
                case "SCISSORS":
                    console.log("Congratulations, you win! Rock beats Scissors.");
                    return playerWin;
            }
            break;
        case "PAPER":
            switch(computerSelection){
                case "ROCK":
                    console.log("Congratulations, you win! Paper beats Rock.");
                    return playerWin;
                case "PAPER":
                    console.log("Both players chose Paper. It's a tie!");
                    return tie;
                case "SCISSORS":
                    console.log("Sorry, you lose! Scissors beats Paper.");
                    return computerWin;
            }
            break;
        case "SCISSORS":
            switch(computerSelection){
                case "ROCK":
                    console.log("Sorry, you lose! Rock beats Scissors.");
                    return computerWin;
                case "PAPER":
                    console.log("Congratulations, you win! Scissors beats Paper.");
                    return playerWin;
                case "SCISSORS":
                    console.log("Both players chose Scissors. It's a tie!");
                    return tie;
            }
            break;
        default:
            throw `Invalid move entered: ${playerSelection}`;
    }
}

function game(){
    console.log("Best of 5 Rock-Paper-Scissors!");

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++)
    {
        if(playerScore >= 3 || computerScore >= 3){
            break;
        }

        let isTie = true;

        while(isTie){
            let playerMove = window.prompt("Enter your move (Rock, Paper, or Scissors):");

            var result = playRound(playerMove, computerPlay());
    
            if (result === playerWin){
                playerScore++;
                isTie = false;
            } else if (result === computerWin){
                computerScore++;
                isTie = false;
            }

            console.log(`Player: ${playerScore}\nComputer: ${computerScore}\n`);
        }
    }

    if(playerScore > computerScore){
        console.log("Congratulations! You win!");
    }
    else{
        console.log("Sorry, you lost.");
    }
}