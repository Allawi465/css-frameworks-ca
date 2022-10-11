import * as posts from "./api/posts/index.mjs";
import * as templates from "./templates/index.mjs";

import { registerNewUsers } from "./doer/register.mjs";
import { loginNewUsers } from "./doer/login.mjs";
import { authValidation } from "./doer/auth.mjs";
import { creatingAPost } from "./doer/posts/creating.mjs";
import { viewProfile } from "./doer/profile/index.mjs";
import { viewPosts } from "./doer/posts/posts.mjs";
import { deleteAPost } from "./doer/posts/delete.mjs";
import { editAPost } from "./doer/posts/update.mjs";
import { viewProfiles } from "./doer/profiles/index.mjs"
import { postId } from "./doer/posts/postId.mjs"

const path = location.pathname; 

if (path === '/profile/login/') {
    loginNewUsers();
} else if (path === '/profile/register/') {
    registerNewUsers();
} else if (path === '/profile/mypage/') {
    authValidation();
    templates.renderNavbarImage();
    viewProfile();
    deleteAPost()
    editAPost()
} else if (path === '/profile/posts/') {
    authValidation();
    templates.renderNavbarImage();
    creatingAPost();
    viewPosts();
} else if (path === '/profile/profiles/') {
    templates.renderNavbarImage();
    viewProfiles()
} else if (path === '/profile/posts/post/') {
    templates.renderNavbarImage();
    postId();
    authValidation();
}