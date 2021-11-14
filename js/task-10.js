function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const divOfBoxes = document.querySelector("#boxes");
const arrayBoxes = [];
const startSize = 30;

btnCreate.addEventListener("click", onCreateBoxes);
btnDestroy.addEventListener("click", onDestroyBoxes);

function onCreateBoxes(amount) {
  amount = input.value;
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${startSize + 10 * i}px`;
    box.style.height = `${startSize + 10 * i}px`;
    box.style.backgroundColor = getRandomHexColor();
    arrayBoxes.push(box);
  }
  return divOfBoxes.append(...arrayBoxes);
}

function onDestroyBoxes() {
  return divOfBoxes.remove(...divOfBoxes.children);
}
