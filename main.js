import { renderToDom } from "./utils/renderToDom.js";
import { repoExamples } from "./data/complexData.js"


const cardsOnDom = (array) => {
  let repoExamplesDomString = "";
array.map((repo) => {
    repoExamplesDomString += 
    `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${repo.name}</h5>
      <p class="card-text">${repo.description}</p>
      <span>${repo.tags[0].tName}</span>
    </div>
  </div>`
  });
      renderToDom("#listed-repos", repoExamplesDomString);
};

cardsOnDom(repoExamples)





const sideBarOnDom = ()=>{
  let domString = ``;
renderToDom("#layout-sidebar", domString);
console.log("hello")
};

const startApp = () =>{
  sideBarOnDom();
}

startApp();

const projects = [
  {
    id: 1,
    name: "Dusty",
    color: "Green",
    specialSkill: "Gives sincere apologies.",
    type: "cat",
    imageUrl:
      "https://static.displate.com/857x1200/displate/2023-03-15/dadeeb74dcc7ed99f2da757226d69818_5670a0e43cfe81ada198f1864a784534.jpg",
  }
];


const pinnedProjectsOnDom = (array) => {
  let projectsDomString = "";
  array.map((project) => {
    projectsDomString += `<div class="card" style="width: 18rem;">
    <h5 class="card-title">${project.name}</h5>
    <img src="${project.imageUrl}" 
    class="card-img-top" alt="...">
    <div class="card-body">
    <p class="card-text">Color: ${project.color}</p>
    <p class="card-text">Special Skill: ${project.specialSkill}</p>
    <p class="card-text">${project.type}</p>
  </div>
</div>`;
});
renderToDom("#appProjects", projectsDomString);
};

pinnedProjectsOnDom(projects);
