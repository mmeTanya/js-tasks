const itemsByClass = document.querySelectorAll(".item");
console.log("Number of categories:", itemsByClass.length);

for (let i = 0; i < itemsByClass.length; i += 1) {
  console.log("Category:", itemsByClass[i].firstElementChild.textContent);
  console.log("Elements:", itemsByClass[i].lastElementChild.children.length);
}
