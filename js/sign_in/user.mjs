import { UserValidation, email, password, message } from './userValidation.mjs';

const form = document.getElementById("user-form");

class user {

    constructor(form) {
        this.form = form;
        this.signInSubmit();
    }

    signInSubmit() {

        this.form.addEventListener("submit", (e) => {
            e.preventDefault();

            if(UserValidation()) {
                const data = {
                    email: email.value,
                    password: password.value
                };

                fetch("https://nf-api.onrender.com/api/v1/social/auth/login", {

                    method: "post",
                    body: JSON.stringify(data), 
                    headers: {
                        "Content-Type": "application/json",
                    },
                })

                .then((response) => {
                    if (response.status >= 401) {
                        throw error;
                    } 

                    return response.json();
                })
                .then((data) => {
                    if (data.status !== 200) {
                        message.innerHTML = "logging in";
                        localStorage.setItem("user", JSON.stringify(data));
                        localStorage.setItem("auth", 1);
                        this.signInSubmit();
                        this.form.reset();
                        window.location = "profile.html"; 
                    }
                })
                .catch((error) => {
                    message.innerHTML = "Invalid email or password"
                })
            }
        }) 
    }
}

const signInValidation = new user(form); 