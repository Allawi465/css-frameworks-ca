import { fetchWToken } from "../fecthWToken.mjs";
import {API_SOCIAL_URL } from "../endpoint/index.mjs";
import { message } from "../profiles/index.mjs";

const path = "/posts/";
const method = "PUT";

export async function updating(postData) {
    try {
        const updatingPostUrl = `${API_SOCIAL_URL}${path}${postData.id}`;
        const response = await fetchWToken(updatingPostUrl, {
        method,
        body: JSON.stringify(postData)})

        location.reload();
        return await response.json();
    } catch (error) {
        message.innerHTML = `<p>we are aware of the issues with accessing NewDay. our team is actively working on it</p>`;
    }
};