import * as listener from "./doer/index.mjs";

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
}