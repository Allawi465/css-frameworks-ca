import * as localStorage from "../../localStorage/index.mjs";

export class Auth {

    constructor() {
        const auth = localStorage.loadTheValue("auth");
        this.authValidation(auth);
        console.log(auth)
    }

    authValidation(auth) {
        if(!auth) {
            location.pathname = ("profile/login");
        }
    }

    signOut() {
        localStorage.removeFromStorage("auth");
        localStorage.removeFromStorage("user");
        localStorage.removeFromStorage("token");
        location.pathname = ("profile/login");
    } 
}; 