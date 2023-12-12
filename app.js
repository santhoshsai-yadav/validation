const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();
    checkInput();
});

function checkInput() {
    const usernamevalue = username.value.trim();
    const emailvalue = email.value.trim();
    const passwordvalue = password.value.trim();
    const password2value = password2.value.trim();

    if (usernamevalue === '') {
        setError(username, 'Username Cannot Be Blank')
    }
    else {
        setSuccess(username);
    }
    if (emailvalue === '') {
        setError(email, 'Email Cannot Be Blank');
    }
    else if (!isEmail(emailvalue)) {
        setError(email, 'Not a Valid Email');
    }
    else {
        setSuccess(email);
    }





    if (passwordvalue === '') {
        setError(password, 'Password Cannot Be Blank')
    }
    else {
        setSuccess(password);
    }

    if (password2value === '') {
        setError(password2, 'Password Cannot Be Blank')
    }
    else if (passwordvalue !== password2value) {
        setError(password2, 'Password Does Not Match')
    }
    else {
        setSuccess(password2);
    }

}
function setError(element, message) {
    const formControl = element.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.classList.add('error')
    formControl.classList.remove('success')
}
function setSuccess(element) {
    const formControl = element.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = '';
    formControl.classList.add('success')
    formControl.classList.remove('error')
}














function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

}


