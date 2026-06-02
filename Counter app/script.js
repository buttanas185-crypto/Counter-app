const counter = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");
const resetBtn = document.getElementById("resetBtn");

let count = 0;

// update count

function updateCounter() {
  counter.textContent = count;
}

// For increment btn

incrementBtn.addEventListener("click", () => {
  count++;
  updateCounter();
});

// for Decrement btn

decrementBtn.addEventListener("click", () => {
  count--;
  updateCounter();
});

// for Reset btn

resetBtn.addEventListener("click", () => {
  count = 0;
  updateCounter();
});
