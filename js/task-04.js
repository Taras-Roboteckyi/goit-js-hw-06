const decrementBtn = document.querySelector('button[data-action="decrement"]');
const value = document.querySelector('#value');
const incrementBtn = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

const handleClickIncrement = () => {
    counterValue +=  1
    value.textContent = counterValue
};

const handleClickDecrement = () => {
    counterValue -=  1
    value.textContent = counterValue
};
   

decrementBtn.addEventListener("click", handleClickDecrement);
incrementBtn.addEventListener("click", handleClickIncrement);