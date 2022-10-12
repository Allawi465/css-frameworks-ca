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
        break;
        case '/profile/posts/':
            listener.authValidation();
            listener.renderNavbarImage();
            listener.creatingAPost();
            listener.viewPosts();
        break;
        case '/profile/profiles/':
            listener.renderNavbarImage();
            listener.viewProfiles()
        break;
        case '/profile/posts/post/':
            listener.authValidation();
            listener.renderNavbarImage();
            listener.postId();
        break;
        default: 
        location.href = "/profile/login/";
    } 
}