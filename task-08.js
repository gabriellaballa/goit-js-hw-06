/** @format */

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const formData = event.target.elements; // Accesarea elementelor formularului

  let allFieldsFilled = true;
  for (const element of formData) {
    if (element.tagName === "INPUT" && !element.value.trim()) {
      allFieldsFilled = false;
      break;
    }
  }

  if (!allFieldsFilled) {
    alert("All fields must be filled!");
  } else {
    const formValues = {};
    for (const element of formData) {
      if (element.tagName === "INPUT") {
        formValues[element.name] = element.value;
      }
    }

    console.log(formValues);
    loginForm.reset();
  }
});
