import { fetchWToken } from "../fecthWToken.mjs";
import {API_SOCIAL_URL } from "../endpoint/index.mjs";

const path = "/posts";
const method = "POST";

export async function creatingPosts(postData) {
    const creatingPostUrl = API_SOCIAL_URL + path;
    const response = await fetchWToken(creatingPostUrl, {
        method,
        body: JSON.stringify(postData)
    })

    location.reload();

    return await response.json();
};