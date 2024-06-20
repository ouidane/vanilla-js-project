const clickMe = document.querySelector(".click-me");
const bg = document.querySelector("section");
const spn = document.querySelector("span");
const btns = document.querySelectorAll(".color-format .btn");
const hex = document.querySelector(".hex");
const simple = document.querySelector(".simple");

btns.forEach(function (btn) {
  btn.addEventListener("click", (e) => {
    btns.forEach(function (blc) {
      blc.classList.remove("active");
    });
    e.target.classList.add("active");
    clickMe.click();
  });
});

clickMe.addEventListener("click", () => {
  if (hex.classList.contains("active")) {
    hexColor();
  } else if (simple.classList.contains("active")) {
    simpleColor();
  }
});

function simpleColor() {
  let colors = ["red", "green", "orange", "blue", "aqua", "violet", "brown"];
  let randomIndex = Math.floor(Math.random() * colors.length);
  bg.style.backgroundColor = colors[randomIndex];
  spn.textContent = colors[randomIndex];
}

function hexColor() {
  let hexLeters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let randomColor = ["#"];
  for (let i = 0; i < 6; i++) {
    let randomI = Math.floor(Math.random() * hexLeters.length);
    randomColor.push(hexLeters[randomI]);
  }
  bg.style.backgroundColor = randomColor.join("");
  spn.textContent = randomColor.join("");
}
