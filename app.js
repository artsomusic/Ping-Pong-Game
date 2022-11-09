const p1 = {
  score: 0,
  button: document.querySelector("#Player1"),
  display: document.querySelector("#P1"),
};

const p2 = {
  score: 0,
  button: document.querySelector("#Player2"),
  display: document.querySelector("#P2"),
};

function updateScores(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.innerText = player.score;
  }
}

const resetButton = document.querySelector("#Reset");
const selectPlay = document.querySelector("#playto");
let winningScore = 3;
let isGameOver = false;
p1.button.addEventListener("click", () => {
  updateScores(p1, p2);
  if (!isGameOver) {
    p1Score += 1;
    if (p1Score === winningScore) {
      isGameOver = true;
      scoreH1.classList.add("has-text-success");
      scoreH2.classList.add("has-text-danger");
      firstButton.disabled = true;
      secondButton.disabled = true;
    }
    scoreH1.innerText = p1Score;
  }
});

p2.button.addEventListener("click", () => {
  updateScores(p2, p1);
  if (!isGameOver) {
    p2Score += 1;
    if (p2Score === winningScore) {
      isGameOver = true;
      scoreH2.classList.add("has-text-success");
      scoreH1.classList.add("has-text-danger");
      firstButton.disabled = true;
      secondButton.disabled = true;
    }
    scoreH2.innerText = p2Score;
  }
});
selectPlay.addEventListener("change", function () {
  select = parseInt(this.value);
  winningScore = select;
  reset();
});

resetButton.addEventListener("click", reset);
function reset() {
  isGameOver = false;
  p1.score = 0;
  p2.score = 0;
  p1.display.innerText = 0;
  p2.display.innerText = 0;
  p1.display.classList.remove("has-text-success", "has-text-danger");
  p2.display.classList.remove("has-text-success", "has-text-danger");
  p1.button.disabled = false;
  p2.button.disabled = false;
}
