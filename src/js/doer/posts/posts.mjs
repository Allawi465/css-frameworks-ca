import { viewingAll } from "../../api/posts/index.mjs";
import * as templates from "../../templates/index.mjs";

export async function viewPosts() {
    const container = document.querySelector("#post-lists");
    const posts = await viewingAll();

    const filteredPosts = posts.filter(
        (post) =>
        post.title &&
        post.media &&
        post.author.avatar
    );  

    console.log(filteredPosts)
    templates.renderPostsTemplate(filteredPosts, container);
};