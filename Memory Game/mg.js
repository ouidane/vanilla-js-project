const blocksContainer = document.querySelector(".game-blocks");
let blocks = Array.from(blocksContainer.children);
let orderRange = [...Array(blocks.length).keys()];
shuffle(orderRange);
function shuffle(arr) {
  let currentI = arr.length,
    randomI;
  while (currentI != 0) {
    randomI = Math.floor(Math.random() * currentI);
    currentI--;
    [arr[currentI], arr[randomI]] = [arr[randomI], arr[currentI]];
  }
}

blocks.forEach((block, index) => {
  block.style.order = orderRange[index];
  block.addEventListener("click", () => {
    block.classList.add("is-fliped");
    let flipedBlocks = blocks.filter((e) => e.classList.contains("is-fliped"));
    if (flipedBlocks.length === 2) {
      stopClicking();
      checkMatchedCards(flipedBlocks[0], flipedBlocks[1]);
    }
  });
});

function checkMatchedCards(cardOne, cardTwo) {
  const numTries = document.querySelector(".tries span");

  if (cardOne.dataset.animal === cardTwo.dataset.animal) {
    cardOne.classList.remove("is-fliped");
    cardTwo.classList.remove("is-fliped");
    cardOne.classList.add("is-matched");
    cardTwo.classList.add("is-matched");
  } else {
    numTries.textContent = parseInt(numTries.textContent) + 1;
    setTimeout(() => {
      cardOne.classList.remove("is-fliped");
      cardTwo.classList.remove("is-fliped");
    }, 500);
  }
}

function stopClicking() {
  blocksContainer.classList.add("no-click");
  setTimeout(() => {
    blocksContainer.classList.remove("no-click");
  }, 500);
}
