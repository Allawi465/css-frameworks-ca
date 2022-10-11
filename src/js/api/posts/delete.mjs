import { fetchWToken } from "../fecthWToken.mjs";
import {API_SOCIAL_URL } from "../endpoint/index.mjs";

const path = "/posts/";
const method = "DELETE";

export async function deleting(id) {
    const deletingPostUrl = `${API_SOCIAL_URL}${path}${id}`;
    const response = await fetchWToken(deletingPostUrl, {
        method,
    });

    location.reload();

    return await response.json();
};