import { getProfiles } from "../../api/profiles/index.mjs";
import * as templates from "../../templates/index.mjs";
import { containerForPosts, container } from "../profile/index.mjs";
import { spinner } from "../profile/index.mjs";

export async function viewProfiles() {
    const profiles = await getProfiles();
    spinner.classList.remove("spinner-grow");
    templates.renderProfilesTemplate(profiles, container);
    templates.profilesPostTemplate(profiles, containerForPosts);
    console.log(profiles);
};