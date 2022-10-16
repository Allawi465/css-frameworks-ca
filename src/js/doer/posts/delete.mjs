import { containerForPosts } from "../profile/index.mjs";
import { deleting } from "../../api/posts/delete.mjs";

/**
 * deleting a post by id
 * @param {containerForPosts} using the card posts to get the id from
 * @param {deleting} sending to api call
*/

export function deleteAPost () {
    containerForPosts.addEventListener("click", (e) => {
        const deleteBtn = e.target.id === "deletePost";
        let id = e.target.dataset.id;

        if(deleteBtn) {
            deleting(id)
        }
    });
};