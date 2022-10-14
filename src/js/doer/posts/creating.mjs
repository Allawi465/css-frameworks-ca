import { creatingPosts } from "../../api/posts/create.mjs";

/**
 * Creating a post with a form
 * @param {formData} using new FormData to get all inputs value 
 * @param {creatingPosts} sending the form to the api cal
*/

export function creatingAPost() {
    const form = document.querySelector("#createPost");
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const post = Object.fromEntries(formData.entries());
            creatingPosts(post);
            form.reset();
        });
    };
};