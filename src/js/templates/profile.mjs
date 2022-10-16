/**
 * making html as return from the function
 * @param {return} returning html profile div 
*/

export function profileTemplate(profile) {
    return `<div class="card profil-page-card bg-dark">
                <div class="card-body">
                    <div class="text-center">
                        <img src="${profile.avatar}" class="rounded-circle mt-2 profil-page-images" alt="profil images">
                </div>
                </div>
                <div class="text-center">
                    <strong>@${profile.name}</strong>
                    <div class="d-flex flex-row profil-info">
                        <div class="col">
                            <p class="mb-1">${profile._count.followers}</p>
                                <strong>Followers</strong>
                        </div>
                        <div class="col">
                            <p class="mb-1">${profile._count.posts}</p>
                            <strong>Posts</strong>
                        </div>
                        <div class="col">
                            <p class="mb-1">${profile._count.following}</p>
                            <strong>Following</strong>
                        </div>
                    </div>
                </div>
                <div class="mb-3">
            </div>
    </div>`;
};

/**
 * making html as return from the function
 * @param {return} returning html profile following div 
*/

export function getMineFollowing(following) {
   return `
   <div>
       <ul class=" list-group mb-0 live-list">
           <li class="list-group-item">
               <div class="btn p-0 m-0">
               <a href="/profile/profiles/?name=${following[1].name}">
                   <div
                       class="rounded-circle overflow-hidden d-flex justify-content-center border border-warning story-images">
                       <img src="${following[1].avatar}" alt=""
                       class="rounded-circle profil-images-toppbar">
                   </div>
                   <small class="ms-2">${following[1].name}</small>
               </div>
               </a>
           </li>
       </ul>
   </div>`;
};

/**
 * Template to render html profile following with forEach
 * @param {getMineFollowing} getting the html return from a function
 * @param {forEach} render html profile following with forEach
*/

export function renderFollowingTemplate(profile, parent) {
    Object.entries(profile.following).forEach((following) => {
        parent.innerHTML += getMineFollowing(following);
    });
};

/**
 * Template to render html profile
 * @param {profileTemplate} getting the html return from a function
*/

export function renderProfileTemplate(profile, parent) {
    parent.innerHTML += profileTemplate(profile);
};