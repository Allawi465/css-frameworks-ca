import { getProfile } from "../../api/profile/index.mjs";
import * as templates from "../../templates/index.mjs";

export const containerForPosts = document.querySelector(".feed-post-profil");
export const container = document.querySelector(".main-container");
const containerForFollowing = document.querySelector(".live-feed-list");

export async function viewProfile() {
    const profile = await getProfile();
    templates.renderProfileTemplate(profile, container);
    templates.renderFollowingTemplate(profile, containerForFollowing);
    templates.renderPostTemplate(profile, containerForPosts);
    console.log(profile);
};