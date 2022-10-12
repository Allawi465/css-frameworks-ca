import { fetchWToken } from "../fecthWToken.mjs";
import {API_SOCIAL_URL } from "../endpoint/index.mjs";

const queryStringProfileName = document.location.search;
const parameters = new URLSearchParams(queryStringProfileName);
const name = parameters.get("name");

export const message = document.getElementById("errorMessage");

export async function getProfiles(profiles) {
 try {
    const path = `/profiles/${name}?_posts=true&_following=true&_followers=true&_comments=true`;
    const method = "GET"
    const getProfileUrl = API_SOCIAL_URL + path;
    const response = await fetchWToken(getProfileUrl, {
        method,
    })
    return await response.json();
    } catch(error) {
        message.innerHTML = `<p>we are aware of the issues with accessing NewDay. our team is actively working on it</p>`;
    }
};