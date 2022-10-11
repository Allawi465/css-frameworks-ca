import { fetchWToken } from "../fecthWToken.mjs";
import {API_SOCIAL_URL } from "../endpoint/index.mjs";
import { loadTheValue } from "../../localStorage/index.mjs";


export async function getProfile(profile) {
    const { name } = loadTheValue("user");
    const path = `/profiles/${name}?_posts=true&_following=true&_followers=true&_comments=true`;
    const method = "GET"
    const getProfileUrl = API_SOCIAL_URL + path;
    const response = await fetchWToken(getProfileUrl, {
        method,
    })

    return await response.json();
};
