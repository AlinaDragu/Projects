document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));


const choices = ['rock', 'paper', 'scissors'];

function computerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'GUD';
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'Youuuu  Woooooonnnn!';
  } else {
    return "Got'cha , loser!";
  }
}

function playGame(playerChoice) {
  const compChoice = computerChoice();
  const result = determineWinner(playerChoice, compChoice);
  document.getElementById('result').innerText = `You🙈 ${playerChoice}. PC🐼 ${compChoice}. ${result}`;
}

