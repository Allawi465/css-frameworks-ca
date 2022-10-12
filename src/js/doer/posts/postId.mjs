import { postById } from "../../api/posts/index.mjs";
import * as templates from "../../templates/index.mjs";
import { containerForPosts } from "../profile/index.mjs";
import { spinner } from "../profile/index.mjs";

export async function postId() {
    const post = await postById();
    spinner.classList.remove("spinner-grow");
    templates.PostsIdTemplate(post, containerForPosts);
    console.log(post);
};