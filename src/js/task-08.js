const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;
  if (emailInput.value === "" || passwordInput.value === "") {
    alert("All fields must be filled in");
  } else {
    const formInput = {
      email: emailInput.value,
      password: passwordInput.value,
    };
    console.log(formInput);
    loginForm.reset();
  }
});
