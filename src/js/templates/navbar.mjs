import { loadTheValue } from "../localStorage/index.mjs";

export function renderNavbarImage() {
    const { avatar } = loadTheValue("user");
    const navbarImages = document.querySelector(".navbarImages"); 
    navbarImages.src = avatar;
}