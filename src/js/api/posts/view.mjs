import { fetchWToken } from "../fecthWToken.mjs";
import {API_SOCIAL_URL } from "../endpoint/index.mjs";
import { message } from "../profiles/index.mjs";

const path = "/posts";

export async function viewingAll(posts) {
    try {
        const path = "/posts/?_author=true&_comments=true&_reactions=true&limit=200";
        const getPostUrl = `${API_SOCIAL_URL}${path}`;
        const response = await fetchWToken(getPostUrl)
    
        return await response.json();
    } catch (error) {
        message.innerHTML = `<p>we are aware of the issues with accessing NewDay. our team is actively working on it</p>`;
    }
};

export async function viewingAPost(id) {
    try {
        const getPostUrl = `${API_SOCIAL_URL}${path}/${id}`;
        const response = await fetchWToken(getPostUrl)
    
        return await response.json();
    } catch (error) {
        message.innerHTML = `<p>we are aware of the issues with accessing NewDay. our team is actively working on it</p>`;
    }
}; 


export async function viewingAllPosts(posts) {
    try {
        const path = "/posts/?_author=true&_comments=true&_reactions=true&limit=300";
        const getPostUrl = `${API_SOCIAL_URL}${path}`;
        const response = await fetchWToken(getPostUrl)
    
        return await response.json();
    } catch (error) {
        message.innerHTML = `<p>we are aware of the issues with accessing NewDay. our team is actively working on it</p>`;
    }
};
