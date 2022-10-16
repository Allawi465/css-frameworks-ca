import { containerForPosts } from "../profile/index.mjs";
import { viewingAPost, updating } from "../../api/posts/index.mjs";

/**
 * updating a posts by id
 * @param {containerForPosts} using the card post to get the id from
 * @param {post} getting the content title and body 
 * @param {formData} making new form to update the post by id 
*/

export function editAPost () {
    containerForPosts.addEventListener("click", async (e) => {
        const editBtn = e.target.id === "editPost";
        let id = e.target.dataset.id;
        const form = document.querySelector("#editForm");

        if(editBtn) {
            if(form) {
                const post = await viewingAPost(id);
                form.title.value = post.title;
                form.body.value = post.body;
                form.addEventListener("submit", (event) => {
                    event.preventDefault();
                    const form = event.target;
                    const formData = new FormData(form);
                    const post = Object.fromEntries(formData.entries());
                    post.id = id;
                    updating(post);
                })
            }
        }
    })
};