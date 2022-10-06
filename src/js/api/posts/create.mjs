import { fetchWToken } from "../fecthWToken.mjs";
import {API_SOCIAL_URL } from "../endpoint/index.mjs";

const path = "/posts";
const method = "POST";

export async function creatingPosts(post) {
    const creatingPostUrl = API_SOCIAL_URL + path;
    const response = await fetchWToken(creatingPostUrl, {
        method,
        body: JSON.stringify(post)
    })

    return await response.json();
};