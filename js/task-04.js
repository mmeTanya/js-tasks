let counterValue = document.querySelector("#value");

let value = 0;

const refs = {
  clickForDecrement: document.querySelector('[data-action="decrement"]'),
  clickForIncrement: document.querySelector('[data-action="increment"]'),
};

refs.clickForDecrement.addEventListener("click", onMinusOne);
refs.clickForIncrement.addEventListener("click", onPlusOne);

function onMinusOne() {
  value -= 1;
  console.log(value);
  counterValue.textContent = value;
}

function onPlusOne() {
  value += 1;
  console.log(value);
  counterValue.textContent = value;
}
