import * as localStorage from "../../localStorage/index.mjs";

/**
 * Checking Auth from localStorage
 * @param {loadTheValue} localStorage get value
 * @param {authValidation} if user true or false Validation
 * @param {removeFromStorage} localStorage remove value
*/

export class Auth {
    
    constructor() {
        const auth = localStorage.loadTheValue("user");
        this.authValidation(auth);
    }

    authValidation(auth) {
        if(!auth) {
            location.pathname = ("profile/login");
        }
    };

    signOut() {
        localStorage.removeFromStorage("user");
        localStorage.removeFromStorage("token");
        location.pathname = ("profile/login");
    } 
}; 
