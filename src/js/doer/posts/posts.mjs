import { viewingAll } from "../../api/posts/index.mjs";
import * as templates from "../../templates/index.mjs";
import { spinner } from "../index.mjs";
export const containerPostsLists = document.querySelector("#post-lists");

/**
 * Getting posts from api call
 * @param {posts} getting posts
 * @param {filteredPosts} filtering the post
 * @param {renderPostsTemplate} temples for showing the posts
*/

export async function viewPosts() {
    const posts = await viewingAll();

    const filteredPosts = posts.filter(
        (posts) =>
        posts.title &&
        posts.media &&
        posts.author.avatar
    );  
    spinner.classList.remove("spinner-grow");
    console.log(filteredPosts);
    templates.renderPostsTemplate(filteredPosts, containerPostsLists);
};