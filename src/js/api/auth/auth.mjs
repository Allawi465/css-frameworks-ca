import * as localStorage from "../../localStorage/index.mjs";

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