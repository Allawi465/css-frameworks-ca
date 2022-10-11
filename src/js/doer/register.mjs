import { register } from "../api/auth/register.mjs";

export function registerNewUsers() {
    const form = document.querySelector("#registerForm");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault()
            const form = event.target;
            if(form.avatar.value === "") {
                form.avatar.value = "https://user-images.githubusercontent.com/91701833/194162226-b3bcd6d4-9378-4d8c-a96c-04872fbab103.jpg"
            }
            const formData = new FormData(form);
            const user = Object.fromEntries(formData.entries())
            register(user);
        })
    }
};