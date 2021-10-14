const form = document.querySelector('.login-form')

const onFormSubmit = event => {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value
    if (email === '' || password === "") {
       return alert("Please fill in all the fields!     Все поля должны быть заполнены!")
    }

    const formData = {
        email,
        password
    };

    console.log(formData)
    event.currentTarget.reset()
}

form.addEventListener('submit', onFormSubmit)