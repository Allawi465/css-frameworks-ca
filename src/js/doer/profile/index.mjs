import { getProfile } from "../../api/profile/index.mjs";
import * as templates from "../../templates/index.mjs";

export const containerForPosts = document.querySelector(".feed-post-profil");
export const container = document.querySelector(".main-container");
const containerForFollowing = document.querySelector(".live-feed-list");
export const spinner = document.getElementById("spinner");

/**
 * render the profile with templates
 * @param {profile} get the profile by name
 * @param {renderProfileTemplate} render profile
 * @param {renderFollowingTemplate} render profile following 
 * @param {renderPostTemplate} render profile posts  
*/

export async function viewProfile() {
    const profile = await getProfile();
    spinner.classList.remove("spinner-grow");
    templates.renderProfileTemplate(profile, container);
    templates.renderFollowingTemplate(profile, containerForFollowing);
    templates.renderPostTemplate(profile, containerForPosts);
    console.log(profile);
};