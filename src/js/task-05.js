const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", onInputChange);

function onInputChange(event) {
  output.textContent = event.currentTarget.value;
}
