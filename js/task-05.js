const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (input.value === "") {
    return (output.textContent = "Anonymous");
  }
  return (output.textContent = input.value);
}
