/** @format */

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColor = document.querySelector(".change-color");
const textColor = document.querySelector(".color");
const body = document.body;
changeColor.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  textColor.textContent = randomColor;
});
