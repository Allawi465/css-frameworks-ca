import { fetchWToken } from "../fecthWToken.mjs";
import {API_SOCIAL_URL } from "../endpoint/index.mjs";
import { loadTheValue } from "../../localStorage/index.mjs";
import { message } from "../profiles/index.mjs";


export async function getProfile(profile) {
   try {
        const { name } = loadTheValue("user");
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
