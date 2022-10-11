import { fetchWToken } from "../fecthWToken.mjs";
import {API_SOCIAL_URL } from "../endpoint/index.mjs";

const path = "/posts";

export async function viewingAll(posts) {
    const path = "/posts/?_author=true&_comments=true&_reactions=true&limit=300";
    const getPostUrl = `${API_SOCIAL_URL}${path}`;
    const response = await fetchWToken(getPostUrl)

    return await response.json();
};

export async function viewingAPost(id) {
    const getPostUrl = `${API_SOCIAL_URL}${path}/${id}`;
    const response = await fetchWToken(getPostUrl)

    return await response.json();
}; 