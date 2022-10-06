import * as posts from "./api/posts/index.mjs";

import { registerNewUsers } from "./doer/register.mjs";
import { loginNewUsers } from "./doer/login.mjs";
import { authValidation } from "./doer/auth.mjs";

loginNewUsers()
authValidation()
registerNewUsers()


/* function router () {
    const path = location.pathname;
    switch (path) {
        case 'profile/login/':
            loginNewUsers();
        return;
        case 'profile/register/':
            registerNewUsers();
        return;
        case 'profile/mypage/':
            authValidation();
        return;
    }
}  */


posts.creating();
posts.deleting();
posts.updating();
posts.viewing();

/* router()  */