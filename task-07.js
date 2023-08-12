/** @format */

const fontSize = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
fontSize.addEventListener("input", () => {
  const sizeValue = fontSize.value;
  text.style.fontSize = `${sizeValue}px`;
});
