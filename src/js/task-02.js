const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
const array = [];

ingredients.forEach((el) => {
  const item = document.createElement("li");
  item.textContent = el;
  item.classList.add("item");
  array.push(item);
});

list.append(...array);
console.log(list);
