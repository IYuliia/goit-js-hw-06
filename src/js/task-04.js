const span = document.querySelector("#value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

let counterValue = 0;

decrementBtn.addEventListener("click", onRemoveNumber);

incrementBtn.addEventListener("click", onAddNumber);

function onRemoveNumber() {
  counterValue -= 1;
  span.textContent = counterValue;
}

function onAddNumber() {
  counterValue += 1;
  span.textContent = counterValue;
}
