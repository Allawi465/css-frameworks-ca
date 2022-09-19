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

                .then((response) => response.json())
                .then((data) => {
                    if (data.statusCode === 400) {
                        message.innerHTML = "Profile already exists"
                    } else {
                        message.innerHTML = "Sign in"
                        localStorage.setItem("auth", JSON.stringify(data))
                        this.registerSubmit()
                        window.location = "login.html"; 
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                })
            }
        })
        
    }   
}

const registerValidation = new register(form); 

/* const url = "https://nf-api.onrender.com/api/v1/social/auth/login";

const data = JSON.stringify({
  email: "MohAll71237@stud.noroff.no",
  password: "Besterbest123",
});

const options = {
  method: "post",
  headers: {
    "Content-Type": "application/json",
  },
  body: data,
};

async function registerProfile() {
  const register = await fetch(url, options);
  console.log(register);
}

registerProfile();  */