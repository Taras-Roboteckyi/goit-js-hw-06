function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const basicContainer = document.querySelector('#controls')
const input = basicContainer.firstElementChild;
input.classList.add("text")
const inputNumber = document.querySelector('.text')
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]')
const box = document.querySelector('#boxes');

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);


function createBoxes() {
  const amount = inputNumber.value;
  let elementWidthSize = `30`;
  let elementHeightSize = `30`;
  //console.log (amount)
  for (let i = 0; i < amount; i += 1) {
    const divElement = document.createElement('div');
    divElement.style.backgroundColor = getRandomHexColor();
    divElement.style.width = `${Number.parseInt(elementWidthSize)}px`;
    divElement.style.height = `${Number.parseInt(elementHeightSize)}px`;
    
    elementWidthSize = `${Number.parseInt(elementWidthSize)+10}px`;
    elementHeightSize = `${Number.parseInt(elementHeightSize)+10}px`;
     //console.log(divElement);
   
    box.append(divElement)
   }
}


function destroyBoxes() {
  box.innerHTML = '';
  inputNumber.value = '';
  function createBoxes() { };
}

