import { creatingPosts } from "../../api/posts/create.mjs";

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