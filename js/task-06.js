const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  const setLength = input.dataset.length;
  const inputLength = input.value.length;

  if (inputLength == setLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});
