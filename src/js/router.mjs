import * as listener from "./doer/index.mjs";

/**
 * router function with a switch statement
 * @param {path} getting location pathname to use in case 
 * @param {break} using break statement within a switch statement's
 * @param {default} using default to direct the use to login page 
*/

export default function router() {
    const path = location.pathname; 
    
    switch (path) {
        case '/profile/login/':
          listener.loginNewUsers();
        break;
        case '/profile/register/':
            listener.registerNewUsers();
        break;
        case '/profile/mypage/':
            listener.authValidation();
            listener.renderNavbarImage();
            listener.viewProfile();
            listener.deleteAPost();
            listener.editAPost();
            listener.searchProfiles();
        break;
        case '/profile/posts/':
            listener.authValidation();
            listener.renderNavbarImage();
            listener.creatingAPost();
            listener.viewPosts();
            listener.searchPosts();
            listener.searchProfiles();
            listener.sortByDate();
        break;
        case '/profile/profiles/':
            listener.renderNavbarImage();
            listener.viewProfiles()
            listener.searchProfiles();
        break;
        case '/profile/posts/post/':
            listener.authValidation();
            listener.renderNavbarImage();
            listener.postId();
            listener.searchProfiles();
        break;
        default: 
        location.href = "/profile/login/";
    } 
};