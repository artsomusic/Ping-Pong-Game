const scoreH1 = document.querySelector("#P1");
const scoreH2 = document.querySelector("#P2");
const firstButton = document.querySelector("#Player1");
const secondButton = document.querySelector("#Player2");
const resetButton = document.querySelector("#Reset");
let p1Score = 0;
let p2Score = 0;
const selectPlay = document.querySelector("#playto");
let winningScore = 3;
let isGameOver = false;
firstButton.addEventListener("click", () => {
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

secondButton.addEventListener("click", () => {
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
  p1Score = 0;
  p2Score = 0;
  scoreH1.innerText = 0;
  scoreH2.innerText = 0;
  scoreH1.classList.remove("has-text-success", "has-text-danger");
  scoreH2.classList.remove("has-text-success", "has-text-danger");
  firstButton.disabled = false;
  secondButton.disabled = false;
}
