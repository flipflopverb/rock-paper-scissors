let generator = Math.random();
let computerHand;
let humanHand;
let humanSubmission;
let computerSubmission;
let submitButton;
let round = 0;
let humanScore = 0;
let computerScore = 0;
let humanGameScore = 0;
let computerGameScore = 0;

function computerPlay() {
  rnd = Math.random();
  stringOfRnd = rnd.toString();
  fourthDigit = stringOfRnd.charAt(4);
  if (fourthDigit <= 3) {
    document.getElementById('computerChoice').innerHTML = 'Rock';
    computerHand = 'Rock';
  } else if (fourthDigit >= 8) {
    document.getElementById('computerChoice').innerHTML = 'Paper';
    computerHand = 'Paper';
  } else {
    document.getElementById('computerChoice').innerHTML = 'Scissors';
    computerHand = 'Scissors';
  }
  console.log(computerHand);
}

function humanPlay(e) {
  const x = e.target.value;
  humanHand = x;
  document.getElementById('humanChoice').innerHTML = humanHand;
  computerPlay();
  //alert('human ' + humanHand + ' vs computer:' + computerHand);
  roundDeclaration();

  if (round % 10 == 0) {
    if (humanScore > computerScore) {
      humanGameScore++;
      computerScore = 0;
      humanScore = 0;
    } else {
      computerGameScore++;
      computerScore = 0;
      humanScore = 0;
    }

    document.getElementById('humanGameScoreCount').innerHTML = humanGameScore;
    document.getElementById('computerGameScoreCount').innerHTML =
      computerGameScore;
    document.getElementById('computerScoreCount').innerHTML = computerScore;
    document.getElementById('humanScoreCount').innerHTML = humanScore;

    //document.getElementById('submitButton').disable = true;
  } else {
    //document.getElementById('submitButton').disable = false;
  }
}

// old functionality
//function humanPlay(){
//humanHand = document.getElementById("humanInput").value.toLowerCase()
//document.getElementById("humanChoice").innerHTML = humanHand
//console.log(humanHand+" human")
//}

function roundDeclaration() {
  round++;
  document.getElementById('roundCount').innerHTML = round;
  if (humanHand == computerHand) {
    document.getElementById('roundResult').innerHTML = 'tie for ';
  } else if (humanHand == 'Rock' && computerHand == 'Paper') {
    document.getElementById('roundResult').innerHTML = 'human loses';
    computerScore++;
  } else if (humanHand == 'Rock' && computerHand == 'Scissors') {
    document.getElementById('roundResult').innerHTML = 'human wins';
    humanScore++;
  } else if (humanHand == 'Paper' && computerHand == 'Rock') {
    document.getElementById('roundResult').innerHTML = 'human wins';
    humanScore++;
  } else if (humanHand == 'Paper' && (computerHand = 'Scissors')) {
    document.getElementById('roundResult').innerHTML = 'human loses';
    computerScore++;
  } else if (humanHand == 'Scissors' && computerHand == 'Paper') {
    document.getElementById('roundResult').innerHTML = 'human wins';
    humanScore++;
  } else if (humanHand == 'Scissors' && computerHand == 'Rock') {
    document.getElementById('roundResult').innerHTML = 'human loses';
    computerScore++;
  } else {
    document.getElementById('roundResult').innerHTML =
      'due to incompetent spelling the human loses';
    computerScore++;
  }

  document.getElementById('computerScoreCount').innerHTML = computerScore;
  document.getElementById('humanScoreCount').innerHTML = humanScore;
}

function gameDeclaration() {
  if (round % 10 == 0) {
    if (humanScore > computerScore) {
      humanGameScore++;
      computerScore = 0;
      humanScore = 0;
    } else {
      computerGameScore++;
      computerScore = 0;
      humanScore = 0;
    }

    document.getElementById('humanGameScoreCount').innerHTML = humanGameScore;
    document.getElementById('computerGameScoreCount').innerHTML =
      computerGameScore;
    document.getElementById('computerScoreCount').innerHTML = computerScore;
    document.getElementById('humanScoreCount').innerHTML = humanScore;

    document.getElementById('submitButton').disable = true;
  } else {
    document.getElementById('submitButton').disable = false;
  }
}

const rockButton = document.querySelector('#rockButton');
rockButton.addEventListener('click', humanPlay);

const paperButton = document.querySelector('#paperButton');
paperButton.addEventListener('click', humanPlay);

const scissorsButton = document.querySelector('#scissorsButton');
scissorsButton.addEventListener('click', humanPlay);
