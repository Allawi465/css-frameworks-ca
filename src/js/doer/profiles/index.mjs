import { getProfiles } from "../../api/profiles/index.mjs";
import * as templates from "../../templates/index.mjs";
import { containerForPosts, container } from "../profile/index.mjs";
import { spinner } from "../profile/index.mjs";

/**
 * render the profiles with templates
 * @param {profiles} get the profiles by name
 * @param {renderProfilesTemplate} render profiles
 * @param {profilesPostTemplate} render profiles posts 
*/

export async function viewProfiles() {
    const profiles = await getProfiles();
    spinner.classList.remove("spinner-grow");
    templates.renderProfilesTemplate(profiles, container);
    templates.profilesPostTemplate(profiles, containerForPosts);
    console.log(profiles);
};