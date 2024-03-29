function computerPlay(){
    let val = Math.floor(Math.random() * 3);
    if (val === 1 ) {
        return("rock");
    } else if (val === 2 ) {
        return("paper");
    } else {
        return("scissors");
    }
};

function playRound(playerSelection, computerSelection){
    if(playerSelection === 'paper' && computerSelection === 'paper'){
        return('Draw');
    } else if(playerSelection === 'paper' && computerSelection === 'rock'){
        return('You win!');
    } else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        return('You lose! Scissors beats paper');
    } else if(playerSelection === 'rock' && computerSelection === 'rock'){
        return('Draw');
    } else if(playerSelection === 'rock' && computerSelection === 'paper'){
        return('You lose! Paper beats rock');
    } else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        return('You win!');
    } else if(playerSelection === 'scissors' && computerSelection === 'scissors'){
        return('Draw');
    } else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        return('You lose! Rock beats scissors');
    } else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        return('You win!');
    }
};




function game(){
    let result;
    let playerScore = 0;
    let compScore = 0;
    for (let i = 0; i < 3; i++){
        let playerSelection = prompt('rock, paper, scissors?');
        playerSelection = playerSelection.toLowerCase();
        playerSelection = playerSelection.trim();
        let computerSelection = computerPlay();
        let playerCompSelection = 'Player: '+ playerSelection+'; '+ 'Computer: '+ computerSelection;
        alert(playerCompSelection);
        result = playRound(playerSelection, computerSelection);
        alert(result);

        if(result === 'You win!'){
             playerScore++;
            
        } else if(result === 'You lose! Scissors beats paper' || result === 'You lose! Paper beats rock' || result === 'You lose! Rock beats scissors') {
             compScore ++;
        }

        alert('Current score: Player: '+ playerScore + ',' + ' Computer: ' + compScore);
    }
    
    if (playerScore > compScore){
        alert('Final result: Player wins!');
    } else if (compScore > playerScore) {
        alert('Final result: Computer wins!');
    } else{
        alert('Final result: Draw!');
    }
}

game();