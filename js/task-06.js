const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', inputClickHandler);

function inputClickHandler(event) {
     const number = Number(textInput.dataset.length)
     if (event.currentTarget.value.length !== number) {
        //console.log('No')
        textInput.classList.add('invalid')
     } else {
        //console.log('Yes')
        textInput.classList.replace('invalid','valid')
    } 
}

