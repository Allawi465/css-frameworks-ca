export const name = document.getElementById("name")
export const email = document.getElementById("email");
export const password = document.getElementById("floatingPassword");
export const message = document.querySelector(".create-account-heading");

export function formValidation() {
    const errorName = document.querySelector(".errorName");
    const errorEmail = document.querySelector(".errorEmail");
    const errorPassword = document.querySelector(".errorPassword");
    message.innerHTML = "Create account"
 
    if (confirmName(name.value) === true) {
        errorName.style.display = "none";
    } else {
        errorName.style.display = "block";
    }

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

    if (confirmName(name.value) && lengthForm(password.value, 8) && confirmEmail(email.value)) {
        return true;
    } 
};


export function lengthForm(value, theLen) {
    if(value.trim().length >= theLen) {
        return true;
    } else {
        return false;
    }
};

export function confirmEmail(email) {
    const regExEmail = /[\w\-.]+@(stud.)?noroff.no$/gm;
    const confirmingMatches = regExEmail.test(email);
    return confirmingMatches;
} 

function confirmName(name) {
    const regExName = /^[\w]+$/gm;
    const confirmingMatches = regExName.test(name);
    return confirmingMatches;
}