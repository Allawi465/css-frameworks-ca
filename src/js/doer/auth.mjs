import { Auth } from '../api/auth/auth.mjs';

export function authValidation () {
    const signOutBtn = document.querySelector(".sign_out");
    signOutBtn.addEventListener("click", () => auth.signOut());
    const auth = new Auth();
}