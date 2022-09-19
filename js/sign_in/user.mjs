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

                .then((response) => response.json())
                .then((data) => {
                    if (data.statusCode === 401) {
                        message.innerHTML = "Invalid email or password"
                    } else {
                        localStorage.setItem("user", JSON.stringify(data))
                        this.signInSubmit()
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
            }
        }) 
    }
}

const signInValidation = new user(form); 