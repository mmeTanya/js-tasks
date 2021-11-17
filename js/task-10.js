function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const divOfBoxes = document.querySelector("#boxes");
const arrayBoxes = [];
let size = 30;

btnCreate.addEventListener("click", () => {
  onPushBoxesCollection();
  input.value = 0;
});
btnDestroy.addEventListener("click", onDestroyBoxes);

function onCreateBoxes(amount) {
  amount = input.value;
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    size += 10;
    box.style.backgroundColor = getRandomHexColor();
    arrayBoxes.push(box);
  }
}

function onPushBoxesCollection() {
  onCreateBoxes(Number(input.value));
  divOfBoxes.append(...arrayBoxes);
}

function onDestroyBoxes() {
  return divOfBoxes.remove(...divOfBoxes.children);
}
