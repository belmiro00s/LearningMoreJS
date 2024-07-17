function checkEmail(email) {
    if (!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)) {
        const err = new Error('Invalid email')
        err.input = 'email'
        throw err
    }
}

function checkPassword(password) {
    if (
        password.length < 8 ||
        !password.match(/[a-z]/) || //check if exist at least lowercase letter in pass
        !password.match(/[A-Z]/) || //check if exist at least  uppercase letter in pass
        !password.match(/[0-9]/) || //check if exist at least an number in pass
        !password.match(/[^a-zA-Z0-9\s]/) //check if exist at least an special caracter in pass  
    ) {
        const err = new Error('Invalid password')
        err.input = 'password'
        throw err
    }
}

function resetFormStyles() {
    Object.entries(userInputs).forEach(([key, value]) => { //obtaining the inputs an array
        value.classList.remove('sucess', 'error') //removing the class css
        document.querySelector(`#${key}-error`).textContent = '' //erase the text content of span element
    })
}

const userInputs = {
    name: document.querySelector('#name'),
    email: document.querySelector('#email'),
    password: document.querySelector('#password')
}

const form = document.querySelector('#form') //use to validate function submit.

form.addEventListener('submit', (ev) => {
    ev.preventDefault()
    resetFormStyles()
    try {
        userInputs.name.classList.add('success') // acess the element name and add class css "sucess"
        checkEmail(userInputs.email.value) // calling the function to validate the email
        userInputs.email.classList.add('success')
        checkPassword(userInputs.password.value)
        userInputs.password.classList.add('success')
    } catch (err) { //if ocurred some error, catch the error and show to user
        userInputs[err.input].classList.add('error')
        document.querySelector(`#${err.input}-error`).textContent = err.message
    }
})

