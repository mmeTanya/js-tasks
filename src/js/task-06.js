const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputBlur);

function onInputBlur() {
  if (input.value.length === Number(input.dataset.length)) {
    input.classList.remove("invalid");
    return input.classList.add("valid");
  }
  input.classList.remove("valid");
  return input.classList.add("invalid");
}
