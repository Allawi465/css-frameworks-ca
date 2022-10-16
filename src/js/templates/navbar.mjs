import { loadTheValue } from "../localStorage/index.mjs";

/**
 * getting the profile avatar from local storage 
 * @param {loadTheValue} getting the avatar value from loadTheValue function
 * @param {avatar} render the avatar value
*/

export function renderNavbarImage() {
    const { avatar } = loadTheValue("user");
    const navbarImages = document.querySelector(".navbarImages"); 
    navbarImages.src = avatar;
}