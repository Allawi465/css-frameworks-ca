import * as templates from "../../templates/index.mjs";
import { viewingAllPosts } from "../../api/posts/view.mjs"; 
import { containerPostsLists } from "./posts.mjs";
const sortBtn = document.getElementById("sortDiv");
const btnOld = document.getElementById("oldPost");
const btnNew = document.getElementById("newPost");



export function sortByDate() {
    sortBtn.addEventListener("click", async (e) => {
        const oldPostBtn = e.target.id === "oldPost";
        const newPostsPostBtn = e.target.id === "newPost";

        const posts = await viewingAllPosts();

        const filteredPosts = posts.filter(
            (posts) =>
            posts.title &&
            posts.media &&
            posts.author.avatar
        ); 

        const addsNewDate = filteredPosts.map(post => {
            return {...post, updated: new Date(post.updated)};
        });

        
        containerPostsLists.innerHTML = "";

        if (oldPostBtn) { 
            const sortedOldPosts = addsNewDate.sort((oldPosts, newPosts) => Number(oldPosts.updated) - Number(newPosts.updated),
            );
            
            templates.renderProfilesPostTemplate(sortedOldPosts, containerPostsLists);
            console.log( "oldPostBtn", sortedOldPosts);
            btnOld.className = "btn btn-primary";
            btnNew.className = "btn";
        }

        if (newPostsPostBtn) { 
            templates.renderProfilesPostTemplate(addsNewDate, containerPostsLists);
            console.log( "newPostBtn", addsNewDate);
            btnNew.className = "btn btn-primary";
            btnOld.className = "btn";
        }
    });
};