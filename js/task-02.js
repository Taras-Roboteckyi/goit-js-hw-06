const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const newItemElement = ingredients.map(ingredient => {
  const newElement = document.createElement("li");
  newElement.textContent = ingredient;
  newElement.classList.add('item');
  return newElement;
  
})

const list = document.querySelector('#ingredients')
list.prepend(...newItemElement);
console.log(list)