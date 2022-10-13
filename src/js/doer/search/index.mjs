import * as templates from "../../templates/index.mjs";
import { getAllProfiles } from "../../api/profile/index.mjs";
import { viewingAllPosts } from "../../api/posts/view.mjs";
import { containerPostsLists } from "../index.mjs";
import { viewPosts } from "../index.mjs"; 
const search = document.getElementById("search-input");
const profilesFromSearch = document.getElementById("profilesFromSearch");

export function searchProfiles() {
    search.addEventListener("keyup", async (event) => {
        const searchValue = event.target.value.toLowerCase();
        const profiles = await getAllProfiles();

        const filteredProfiles = profiles.filter(
            (profiles) =>
            profiles.name &&
            profiles.avatar 
        );  
        
        const searchFilterProfiles = filteredProfiles.filter((profile) => 
            profile.name.toLowerCase().includes(searchValue)
        );

        profilesFromSearch.innerHTML = "";

        console.log("filter profiles", searchFilterProfiles);

       
        templates.searchProfilesTemplate(searchFilterProfiles, profilesFromSearch);


        if (searchValue === "") {
            profilesFromSearch.innerHTML = "";
        };

    });
};


export function searchPosts() {
    search.addEventListener("keyup", async (event) => {
        const searchValue = event.target.value.toLowerCase();
        const posts = await viewingAllPosts()

        const filteredPosts = posts.filter(
            (posts) =>
            posts.author.name &&
            posts.title &&
            posts.body &&
            posts.author.avatar 
        );  
        
        const filterPostsSearch = filteredPosts.filter((posts) => 
            posts.title.toLowerCase().includes(searchValue) ||
            posts.body.toLowerCase().includes(searchValue) ||
            posts.author.name.toLowerCase().includes(searchValue)
        );

        containerPostsLists.innerHTML = "";

        templates.renderProfilesPostTemplate(filterPostsSearch, containerPostsLists)
        console.log("filterPosts", filterPostsSearch);

        if (searchValue === "") {
            containerPostsLists.innerHTML = "";
            viewPosts()
        };
    });
};