import { postById } from "../../api/posts/index.mjs";
import * as templates from "../../templates/index.mjs";
import { containerForPosts } from "../profile/index.mjs";
import { spinner } from "../profile/index.mjs";

/**
 * Get a post by id from api call
 * @param {post} getting a single post by id 
 * @param {PostsIdTemplate} temples for showing the post 
*/

export async function postId() {
    const post = await postById();
    spinner.classList.remove("spinner-grow");
    templates.PostsIdTemplate(post, containerForPosts);
    console.log(post);
};