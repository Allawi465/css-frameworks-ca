import { Auth } from '../api/auth/auth.mjs';

/**
 * making class Auth into a new function
 * @param {signOutBtn} signOut button using class auth.signOut() function
 * @param {auth} activating the class Auth with new auth
*/

export function authValidation () {
    const signOutBtn = document.querySelector(".sign_out");
    signOutBtn.addEventListener("click", () => auth.signOut());
    const auth = new Auth();
};