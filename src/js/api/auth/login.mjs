import { API_SOCIAL_URL } from "../endpoint/index.mjs";
import * as localStorage from "../../localStorage/index.mjs";


const message = document.querySelector(".sign-in-h2");


const path = "/auth/login";
const method = "POST";

/**
 * login through api with post method  
 * @param {profile} api call with post method
*/

export async function login(profile) {
    const registerApiUrl = API_SOCIAL_URL + path;
    const body = JSON.stringify(profile);
    try {
        const response = await fetch(registerApiUrl, {
            headers: {
                "Content-Type": "application/json",
            },
            method,
            body
        })

        if(response.status >= 401) {
            throw error
        } 

        const { accessToken, ...data } = await response.json();

        if(data.status !== 201) {
            localStorage.saveToStorage("token", accessToken);
            localStorage.saveToStorage("user", data);
            location.replace("/profile/mypage")
        }
    } catch(error) {
        message.innerHTML = "Invalid email or password  ";
    }
};