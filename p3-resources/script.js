let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget(){
  return Math.floor(Math.random()*10)
}

function compareGuesses(humanGuess, computerGuess, secretNumber){
  if(Math.abs(humanGuess-secretNumber) <= Math.abs(computerGuess-secretNumber)){
    return true;
  }else{
    return false;
  }
}

function updateScore(winner){
  if(winner==='human'){
    humanScore += 1;
  }else if(winner === 'computer'){
    computerScore += 1;
  }
  console.log(`humanscore is ${humanScore}`);
  console.log(`computerscore is ${computerScore}`);
}

function advanceRound(){
  currentRoundNumber +=1;
  console.log(`round is ${currentRoundNumber}`);
}


