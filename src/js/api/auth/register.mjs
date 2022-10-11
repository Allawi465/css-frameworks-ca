import { API_SOCIAL_URL } from "../endpoint/index.mjs";
const message = document.querySelector(".sign-in-h2");
const path = "/auth/register";
const method = "POST";

export async function register(user) {
    const registerApiUrl = API_SOCIAL_URL + path;
    const body = JSON.stringify(user);
    try {
        const response = await fetch(registerApiUrl, {
            headers: {
                "Content-Type": "application/json"
            },
            method,
            body
        });

        if(response.status >= 400) {
            throw error;
        };
    
        const data = await response.json();

        if(data.status !== 201) {
            message.innerHTML = "Sign in";
        };
    } catch(error) {
        message.innerHTML = "Profile already exists";
    }
};