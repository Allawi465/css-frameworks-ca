import { formValidation, name, email, password, message } from './formValidation.mjs';

const form = document.querySelector(".register");

class register {
    
    constructor(form) {
        this.form = form;
        this.registerSubmit();
    }

    registerSubmit() {
        this.form.addEventListener("submit", (e) => {
            e.preventDefault();
            if(formValidation()) {
                const data = {
                    name: name.value,
                    email: email.value,
                    password: password.value
                };

                fetch("https://nf-api.onrender.com/api/v1/social/auth/register", {

                    method: "post",
                    body: JSON.stringify(data), 
                    headers: {
                        "Content-Type": "application/json",
                    },
                })

                .then((response) => {
                    if (response.status >= 400) {
                        throw error;
                    }
                    return response.json();
                })

                .then((data) => {
                    if (data.status !== 201) {
                        message.innerHTML = "Sign in";
                        this.registerSubmit();
                        this.form.reset();
                        window.location = "login.html"; 
                    }
                })
                
                .catch((error) => {
                    message.innerHTML = "Profile already exist";
                })
            }
        })
    }   
};

const registerValidation = new register(form); 