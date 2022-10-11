export function profilesTemplate(profile) {
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


export function renderProfilesTemplate(profile, parent) {
    parent.innerHTML += profilesTemplate(profile);
};