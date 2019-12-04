function game(){
    //play a 5 round game that keeps score and reports a winner or loser at the end.
    let playerScore = 0;
    let compScore = 0;
    for(let i = 0; i < 3; i++){
        //Use prompt() to get input from the user
        let playerSelection = prompt('rock, paper, scissors?');

        //randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
        let computerSelection;
        let val = Math.floor(Math.random() * 3);
        if (val === 1 ) {
            computerSelection = "rock";
        } else if (val === 2 ) {
            computerSelection = "paper";
        } else {
            computerSelection = "scissors";
        }
        console.log('Player: '+playerSelection+ ',' + 'Computer: ' + computerSelection);
        let result;
        
        
        //return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
        if(playerSelection === 'paper' && computerSelection === 'paper'){
            result ='Draw';
        } else if(playerSelection === 'paper' && computerSelection === 'rock'){
            result ='You win! Paper beats Rock';
            playerScore++;
        } else if(playerSelection === 'paper' && computerSelection === 'scissors'){
            result ='You lose! Scissors beats Paper';
            compScore++;
        } else if(playerSelection === 'rock' && computerSelection === 'rock'){
            result ='Draw';
        } else if(playerSelection === 'rock' && computerSelection === 'paper'){
            result ='You lose! Paper beats Rock';
            compScore++;
        } else if(playerSelection === 'rock' && computerSelection === 'scissors'){
            result ='You win! Rock beats Scissors';
            playerScore++;
        } else if(playerSelection === 'scissors' && computerSelection === 'scissors'){
            result ='Draw';
        } else if(playerSelection === 'scissors' && computerSelection === 'rock'){
            result ='You lose! Rock beats Scissors';
            compScore++;
        } else if(playerSelection === 'scissors' && computerSelection === 'paper'){
            result ='You win! Scissors beats Paper';
            playerScore++;
        }

        console.log(result);
        
        if(i === 2){
            console.log('Final score: Player: '+ playerScore + ',' + 'Computer: '+ compScore);
        } else {
            console.log('Player score: '+ playerScore + ',' + 'Computer score: '+ compScore);
        }

    }
    
}

game();