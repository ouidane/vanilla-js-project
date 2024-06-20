let timeLeft = document.querySelector(".timer span");
let score = document.querySelector(".score span");
const squire = document.querySelectorAll(".squire");
let currentTime = 10; // parseInt(timeLeft.textContent);
let result = 0;

function randomSquares() {
  squire.forEach((elem) => {
    elem.classList.remove("mole");
    elem.classList.remove("is-clicked");
  });
  let arr = [];
  numOfMoles(arr);
  for (let i = 0; i < arr.length; i++) {
    squire[arr[i]].classList.add("mole");
  }
}

function numOfMoles(arr) {
  let randomNum = Math.ceil(Math.random() * 3);

  for (let i = 0; i < randomNum; i++) {
    var molePosition = Math.floor(Math.random() * 9);
    if (!arr.includes(molePosition)) {
      arr.push(molePosition);
    }
  }
}

squire.forEach((elem) => {
  elem.addEventListener("click", () => {
    if (elem.classList.contains("mole")) {
      elem.classList.add("is-clicked");
      result += 1;
      score.textContent = result;
    }
  });
});

function countDown() {
  currentTime -= 1;
  timeLeft.textContent = currentTime;
  if (currentTime === 0) {
    clearInterval(randomSquaresTimer);
    clearInterval(timerId);
    squire.forEach((elem) => {
      elem.classList.remove("mole");
      elem.classList.remove("is-clicked");
    });
  }
}

let randomSquaresTimer = setInterval(randomSquares, 1500);
let timerId = setInterval(countDown, 1000);
