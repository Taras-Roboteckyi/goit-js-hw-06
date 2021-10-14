const inputValue = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

inputValue.addEventListener('input', handleInputClick);

function handleInputClick(event) {
     const result = Number.parseInt(window.getComputedStyle(text).fontSize)
     text.style.fontSize = `${event.currentTarget.value}px`
     console.log(result)
}