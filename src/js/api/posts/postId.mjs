import { fetchWToken } from "../fecthWToken.mjs";
import {API_SOCIAL_URL } from "../endpoint/index.mjs";

const queryStringPostId = document.location.search;
const parameters = new URLSearchParams(queryStringPostId);
const id = parameters.get("id");

const path = "/posts";
const getPostUrl = `${API_SOCIAL_URL}${path}/${id}?_author=true`;

export async function postById() {
    const response = await fetchWToken(getPostUrl)
    return await response.json();
};