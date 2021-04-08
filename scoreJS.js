let score1 = 0;
let score2 = 0;
let winningScore = 5;
const scores = document.querySelector('#scores');
const winningScoreSelect = document.querySelector('#goal');
const p1Button = document.querySelector('#player1');
const p2Button = document.querySelector('#player2');
const resetButton = document.querySelector('#reset');
const scoreUpdate = () => {
  scores.innerText = `${score1} to ${score2}`
}
const scoreReset = () => {
  score1 = 0;
  score2 = 0;
  scoreUpdate();
}

p1Button.addEventListener("click", function(){
  score1 += 1;
  scoreUpdate();
  if (score1 == winningScore) {
    setTimeout(function(){
      alert('Player 1 Wins!!');
    }, 100);
    setTimeout(function() {
      scoreReset();
    }, 100);
  }
})

p2Button.addEventListener("click", function(){
  score2 += 1;
  scoreUpdate();
  if (score2 == winningScore) {
    setTimeout(function(){
      alert('Player 2 Wins!!');
    }, 100);
    setTimeout(function() {
      scoreReset();
    }, 100);
  }
})

resetButton.addEventListener("click", function() {
  scoreReset();
})

winningScoreSelect.addEventListener('change', function() {
  winningScore = parseInt(this.value);
})
