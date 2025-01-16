document.querySelector('.fa-eye').addEventListener("click", () => {
    const passwordStatus = document.getElementById('password');
    if (passwordStatus.type === 'password') {
        passwordStatus.type = 'text';
    } else {
        passwordStatus.type = 'password';
    }
});

document.getElementById('btn-login').addEventListener("click", (ev) => {
    ev.preventDefault()

    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const alertSuccess = document.querySelector('.alert-success');
    const alertFailed = document.querySelector('.alert-failed');
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+$/;
    let isValid = true;

    if (!emailRegex.test(email.value)) {
        isValid = false;
        alertFailed.innerText = "Email inválido!"
    } else if (password.value.length < 6) {
        isValid = false;
        alertFailed.innerText = "Senha deve ter mais de 6 caracteres!";
    }

    if (isValid) {
        alertSuccess.style.display = 'block';
        email.value = "";
        password.value = "";

        setTimeout(() => {
            alertSuccess.style.display = 'none';
        }, 5000);
    } else {
        alertFailed.style.display = 'block';

        setTimeout(() => {
            alertFailed.style.display = 'none';
        }, 3000);
    }
});

