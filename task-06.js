/** @format */

const validationInput = document.querySelector("#validation-input");
const requiredLength = parseInt(validationInput.getAttribute("data-length"));

function checkLength() {
  const inputValue = validationInput.value.length;

  if (inputValue === requiredLength) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
}

validationInput.addEventListener("blur", checkLength);
