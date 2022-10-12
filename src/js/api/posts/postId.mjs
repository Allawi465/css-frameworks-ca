import { fetchWToken } from "../fecthWToken.mjs";
import {API_SOCIAL_URL } from "../endpoint/index.mjs";
import { message } from "../profiles/index.mjs";

const queryStringPostId = document.location.search;
const parameters = new URLSearchParams(queryStringPostId);
const id = parameters.get("id");

const path = "/posts";
const getPostUrl = `${API_SOCIAL_URL}${path}/${id}?_author=true&_comments=true&_reactions=true`;

export async function postById() {
   try {
        const response = await fetchWToken(getPostUrl)
        return await response.json();
    } catch (error) {
        message.innerHTML = `<p>we are aware of the issues with accessing NewDay. our team is actively working on it</p>`;
    }
};