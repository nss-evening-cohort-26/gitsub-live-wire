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
