import { viewingAll } from "../../api/posts/index.mjs";
import * as templates from "../../templates/index.mjs";
import { spinner } from "../index.mjs";

export async function viewPosts() {
    const container = document.querySelector("#post-lists");
    const posts = await viewingAll();

    const filteredPosts = posts.filter(
        (posts) =>
        posts.title &&
        posts.media &&
        posts.author.avatar
    );  
    spinner.classList.remove("spinner-grow");
    console.log(filteredPosts);
    templates.renderPostsTemplate(filteredPosts, container);
};