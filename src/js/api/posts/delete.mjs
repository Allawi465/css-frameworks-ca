import { fetchWToken } from "../fecthWToken.mjs";
import {API_SOCIAL_URL } from "../endpoint/index.mjs";
import { message } from "../profiles/index.mjs";
const path = "/posts/";
const method = "DELETE";

export async function deleting(id) {
   try {
        const deletingPostUrl = `${API_SOCIAL_URL}${path}${id}`;
        const response = await fetchWToken(deletingPostUrl, {
        method,
        });
        location.reload();
        return await response.json();
    } catch(error) {
        message.innerHTML = `<p>we are aware of the issues with accessing NewDay. our team is actively working on it</p>`;
    }
};