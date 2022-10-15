import { fetchWToken } from "../fecthWToken.mjs";
import {API_SOCIAL_URL } from "../endpoint/index.mjs";
import { message } from "../profiles/index.mjs";

const path = "/posts";

/**
 * view posts content with api get method  
 * @param {get} get posts content 
 * @param {fetchWToken} token from a function
*/

export async function viewingAll(posts) {
    try {
        const path = "/posts/?_author=true&_comments=true&_reactions=true";
        const getPostUrl = `${API_SOCIAL_URL}${path}`;
        const response = await fetchWToken(getPostUrl)
    
        return await response.json();
    } catch (error) {
        message.innerHTML = `<p>we are aware of the issues with accessing NewDay. our team is actively working on it</p>`;
    }
};

/**
 * view post content by id with api get method  
 * @param {id} get post content by id 
 * @param {fetchWToken} token from a function
*/

export async function viewingAPost(id) {
    try {
        const getPostUrl = `${API_SOCIAL_URL}${path}/${id}`;
        const response = await fetchWToken(getPostUrl)
    
        return await response.json();
    } catch (error) {
        message.innerHTML = `<p>we are aware of the issues with accessing NewDay. our team is actively working on it</p>`;
    }
}; 

/**
 * view posts content with api get method  
 * @param {get} get posts content with limit 100 posts ny default
 * @param {fetchWToken} token from a function
*/

export async function viewingAllPosts(posts) {
    try {
        const path = "/posts/?_author=true&_comments=true&_reactions=true";
        const getPostUrl = `${API_SOCIAL_URL}${path}`;
        const response = await fetchWToken(getPostUrl)
    
        return await response.json();
    } catch (error) {
        message.innerHTML = `<p>we are aware of the issues with accessing NewDay. our team is actively working on it</p>`;
    }
};
