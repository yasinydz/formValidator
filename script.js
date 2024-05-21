const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');
const phone = document.getElementById('phone');

function error(input, message) {
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
}

function success(input) {
    input.className = 'form-control is-valid';
}

const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email.value)) {
        success(email);
    } else {
        error(email, 'Hatalı email girdiniz.');
    }
};

function checkRequired(inputs) {
    inputs.forEach((input) => {
        if (input.value === '') {
            error(input, 'Bu alan boş bırakılamaz.');
        } else {
            success(input);
        }
    });
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        error(input, `${input.id} en az ${min} karakter olmalıdır.`);
    } else if (input.value.length > max) {
        error(input, `${input.id} en fazla ${max} karakter olmalıdır.`);
    } else {
        success(input);
    }
}

function checkPasswords(input1, input2) {
    if (input1.value !== input2.value) {
        error(input2, 'Parola eşleşmiyor');
    }
}

function checkPhone(input) {
    var exp = /^\d{10}$/;
    if (!exp.test(input.value)) {
        error(input, 'Telefon numaranız geçersiz. *10');
    } else {
        success(input);
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkRequired([username, email, password, repassword, phone]);
    validateEmail(email);
    checkLength(username, 7, 15);
    checkLength(password, 7, 12);
    checkPasswords(password, repassword);
    checkPhone(phone);
});
