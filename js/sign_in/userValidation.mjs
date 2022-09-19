import { confirmEmail, lengthForm } from '../register/formValidation.mjs';

export const email = document.getElementById("email");
export const password = document.getElementById("floatingPassword");
export const message = document.querySelector(".sign-in-h2");

export function UserValidation() {
    const errorEmail = document.querySelector(".errorEmail");
    const errorPassword = document.querySelector(".errorPassword");

    message.innerHTML = "Sign in";

    if (confirmEmail(email.value) === true) {
        errorEmail.style.display = "none";
    } else {
        errorEmail.style.display = "block";
    }

    if (lengthForm(password.value, 8) === true) {
        errorPassword.style.display = "none";
    } else {
        errorPassword.style.display = "block";
    }

    if (lengthForm(password.value, 8) && confirmEmail(email.value)) {
        return true;
    } 
};