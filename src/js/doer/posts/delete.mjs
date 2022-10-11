import { containerForPosts } from "../profile/index.mjs";
import { deleting } from "../../api/posts/delete.mjs"

export function deleteAPost () {
    containerForPosts.addEventListener("click", (e) => {
        const deleteBtn = e.target.id === "deletePost"
        let id = e.target.dataset.id;

        if(deleteBtn) {
            deleting(id)
        }
    });
};