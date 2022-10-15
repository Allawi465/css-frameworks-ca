/**
 * making html as return from the function
 * @param {return} returning html profiles div 
*/

export function profilesTemplate(profiles) {
    return `<div class="card profil-page-card bg-dark">
                <div class="card-body">
                    <div class="text-center">
                        <img src="${profiles.avatar}" class="rounded-circle mt-2 profil-page-images" alt="profil images">
                </div>
                </div>
                <div class="text-center">
                    <strong>@${profiles.name}</strong>
                    <div class="d-flex flex-row profil-info">
                        <div class="col">
                            <p class="mb-1">${profiles._count.followers}</p>
                                <strong>Followers</strong>
                        </div>
                        <div class="col">
                            <p class="mb-1">${profiles._count.posts}</p>
                            <strong>Posts</strong>
                        </div>
                        <div class="col">
                            <p class="mb-1">${profiles._count.following}</p>
                            <strong>Following</strong>
                        </div>
                    </div>
                </div>
                <div class="mb-3">
            </div>
    </div>`;
};

/**
 * Template to render html profiles by name 
 * @param {profilesTemplate} getting the html return from a function
*/

export function renderProfilesTemplate(profiles, parent) {
    parent.innerHTML += profilesTemplate(profiles);
};