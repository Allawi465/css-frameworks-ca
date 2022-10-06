import { login } from "../api/auth/login.mjs";

export function loginNewUsers() {
    const form = document.querySelector("#loginForm");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault()
            const form = event.target;
            const formData = new FormData(form);
            const profile = Object.fromEntries(formData.entries())
            console.log(profile)
            login(profile)
        })
    }
};

/* const signUpBtn = document.querySelector(".sign-up-btn");
signUpBtn.addEventListener("click", () => location.pathname = ("profile/register")); */