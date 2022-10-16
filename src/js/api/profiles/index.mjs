import { fetchWToken } from "../fecthWToken.mjs";
import {API_SOCIAL_URL } from "../endpoint/index.mjs";

const queryStringProfileName = document.location.search;
const parameters = new URLSearchParams(queryStringProfileName);
const name = parameters.get("name");

export const message = document.getElementById("errorMessage");

/**
 * Get profile by name with api get method  
 * @param {get} get profiles by name
 * @param {fetchWToken} token from a function
*/

export async function getProfiles(profiles) {
 try {
    const path = `/profiles/${name}?_posts=true&_following=true&_followers=true&_comments=true`;
    const method = "GET";
    const getProfileUrl = API_SOCIAL_URL + path;
    const response = await fetchWToken(getProfileUrl, {
        method,
    })
    return await response.json();
    } catch(error) {
        message.innerHTML = `<p>we are aware of the issues with accessing NewDay. our team is actively working on it</p>`;
    }
};