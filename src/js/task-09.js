const changeColorBtn = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

changeColorBtn.addEventListener("click", () => {
  const randomHexColor = getRandomHexColor();
  document.body.style.background = randomHexColor;
  spanEl.textContent = randomHexColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
