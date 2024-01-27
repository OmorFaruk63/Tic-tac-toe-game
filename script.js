const boxes = document.querySelectorAll(".box");
const winnerElement = document.querySelector(".winner");
const resetBtn = document.getElementById("reset-btn");
let isTurnX = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", handleBoxClick);
});

function handleBoxClick() {
  if (isTurnX) {
    this.innerText = "o";
    isTurnX = false;
  } else {
    this.innerText = "x";
    isTurnX = true;
  }
  this.removeEventListener("click", handleBoxClick);
  checkWin();
}

function checkWin() {
  for (let winPattern of winPatterns) {
    const [pos1, pos2, pos3] = winPattern;
    const value1 = boxes[pos1].innerText;
    const value2 = boxes[pos2].innerText;
    const value3 = boxes[pos3].innerText;

    if (value1 && value1 === value2 && value2 === value3) {
      console.log("winner");
      showWinner(value1);
      disableAllBoxes();
    }
  }
}

function showWinner(winner) {
  winnerElement.innerHTML = `Winner is ${winner}`;
  winnerElement.classList.remove("hide");
}

function disableAllBoxes() {
  boxes.forEach((box) => {
    box.removeEventListener("click", handleBoxClick);
  });
}

resetBtn.addEventListener("click", () => {
  location.reload();
});
