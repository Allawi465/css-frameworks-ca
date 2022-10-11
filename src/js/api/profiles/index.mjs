import { fetchWToken } from "../fecthWToken.mjs";
import {API_SOCIAL_URL } from "../endpoint/index.mjs";

const queryStringProfileName = document.location.search;
const parameters = new URLSearchParams(queryStringProfileName);
const name = parameters.get("name");


export async function getProfiles(profiles) {
    const path = `/profiles/${name}?_posts=true&_following=true&_followers=true&_comments=true`;
    const method = "GET"
    const getProfileUrl = API_SOCIAL_URL + path;
    const response = await fetchWToken(getProfileUrl, {
        method,
    })

    return await response.json();
};