import { postById } from "../../api/posts/index.mjs";
import * as templates from "../../templates/index.mjs";

const containerForPosts = document.querySelector(".feed-post-profil");

export async function postId() {
    const post = await postById();
    templates.PostsIdTemplate(post, containerForPosts);
    console.log(post);
};