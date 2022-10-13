import { fetchWToken } from "../fecthWToken.mjs";
import {API_SOCIAL_URL } from "../endpoint/index.mjs";
import { message } from "../profiles/index.mjs";

const path = "/posts";
const method = "POST";

/**
 * create content with api post method 
 * @param {create} create content api with post method
 * @param {postData} form data to create content
 *  @param {fetchWToken} token from a function
*/

export async function creatingPosts(postData) {
    try {
        const creatingPostUrl = API_SOCIAL_URL + path;
        const response = await fetchWToken(creatingPostUrl, {
        method,
        body: JSON.stringify(postData)})
        location.reload();
        return await response.json();
    } catch(error) {
        message.innerHTML = `<p>we are aware of the issues with accessing NewDay. our team is actively working on it</p>`;
    }
};