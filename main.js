import { repoExamples } from "./data/complexData.js";
import { renderToDom } from "./utils/renderToDom.js";

const pinnedForm = document.querySelector("#create-pinned-form");
const projForm = document.querySelector("#create-project-form");
const repoForm = document.querySelector('#repo-form')
// const repoPageClickBtn = document.querySelector("#repo-pg-link")
// const overviewPageClickBtn = document.querySelector("#overview-pg-link")
// const projectPageClickBtn = document.querySelector("#project-pg-link")

// repoPageClickBtn.addEventListener("click", () => {
//   pinnedOnDom(repoExamples)
//   pinnedFormOnDom();
// });

// overviewPageClickBtn.addEventListener("click", () => {
//   cardsOnDom(repoExamples)
//   repoFormOnDom()
// });

// projectPageClickBtn.addEventListener("click", () => {
//   projectsOnDom(projects);
//   projectForm();
// });

// Update query selectors and event listeners


// keep this code at the top. Renders profile to DOM
const sideBarOnDom = ()=>{
  let domString = `<div id="profile-area" style="width: 18rem;">
  <img src="https://pbs.twimg.com/profile_images/1323877428/the_office_nbc_tv_show_image_steve_carrol_as_michael_scott__1__400x400.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Michael Scott</h5>
    <h6>michaelscott</h6>
    <p class="card-text">Building tech to elevate people. Founder of React Ladies a community for React JS developers.</p>
  </div>
  <div>
    <button>Follow</button>
    <button>Sponsor</button>
    <button>...</button>
  </div>
  <div class="social-count">
    <a href="">
      <svg text="muted" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-people">
        <path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"></path>
      </svg>
      <span class="followers"><b>1.8k</b> followes</span> 
    </a>
    ·
    <a href="">
      <span class="following"><b>27</b> following</span>
    </a>
    ·
    <a href="">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star color-fg-muted">
        <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
      </svg>
      <span class="stars"><b>329</b></span>
    </a>
  </div>
  <div class="contact-info">
    <ul>
      <li>
        <svg class="octicon octicon-location" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
          <path d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192-9.193 6.5 6.5 0 0 1 0 9.193Zm-1.06-8.132v-.001a5 5 0 1 0-7.072 7.072L8 14.07l3.536-3.534a5 5 0 0 0 0-7.072ZM8 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 9Z"></path>
        </svg>
        <span>New York, New York</span>
      </li>
      <li>
        <svg class="octicon octicon-mail" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
          <path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z"></path>
        </svg>
        <span>
          <a href="github@aboutmonica.com">github@aboutmonica.com</a>
        </span>
      </li>
      <li>
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-link">
          <path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path>
      </svg>
        <span>
          <a href="https://aboutmonica.com">https://aboutmonica.com</a>
        </span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" aria-labelledby="a189s2xa6v3uajbwkvdc19fgn80j219j" class="octicon">
          <path d="M9.52217 6.77143L15.4785 0H14.0671L8.89516 5.87954L4.76437 0H0L6.24656 8.8909L0 15.9918H1.41155L6.87321 9.78279L11.2356 15.9918H16L9.52183 6.77143H9.52217ZM7.58887 8.96923L6.95596 8.0839L1.92015 1.03921H4.0882L8.15216 6.7245L8.78507 7.60983L14.0677 14.9998H11.8997L7.58887 8.96957V8.96923Z" fill="currentColor"></path>
          </svg>
        <span>
          <a href="">@indigitalcolor</a>
        </span>
      </li>
    </ul>
  </div>
  <hr>
  <div class="highlights">
    <h5 class=" ">Highlights</h5>
    <ul>
      <li>
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star-fill color-fg-muted mr-1">
          <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"></path>
      </svg>
        <span>
          <a href="">GitHub Star</a>
        </span>
      </li>
      <li>
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star color-fg-muted">
          <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
      </svg>
        <span class="pro-highlights">Pro</span>
      </li>
    </ul>
  </div>
  <hr>  
  <div class="organizations">
    <h5>Organizations</h5>
    <a href="">
      <img src="" alt="">
    </a>
    <a href="">
      <img src="" alt="">
    </a>
    <a href="">
      <img src="" alt="">
    </a>
  </div>
  <hr>
  <div class="sponsors">
    <h5>Sponsors</h5>
    <div class="profile-img-sponsors">
      <a href="">
        <img class="avatar avatar-user" src="images/dwight.jpg" width="35" height="35">
      </a>
      <a href="">
        <img class="avatar avatar-user" src="images/pam.jpg" width="35" height="35">
      </a>
      <a href="">
        <img class="avatar avatar-user" src="images/jim.jpg" width="35" height="35">
      </a>
      <a href="">
        <img class="avatar avatar-user" src="images/jan.jpg" width="35" height="35">
      </a>
    </div>  
  </div>
  </div>`;
  renderToDom("#layout-sidebar", domString);
};
sideBarOnDom();

// Render pinned repos to DOM
const pinnedOnDom = (array) =>{
  let pinnedString = "";
  array.forEach((pin) =>{
    pinnedString += ` <div class="col-sm-6">
    <div class="card pinned-card">
      <div class="card-body pinned-card-body">
      <div class = pinned-icon-title>
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo UnderlineNav-octicon">
          <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
        </svg>
        <p class="card-title pinned-card-title" style="font-size: 14px;">${pin.name}</p>
        </div>
        <p class="card-text" style="font-size: 12px;">${pin.description}</p>
        <p class= "lang-star-fork">
          <span>
            <span class="lang-dot-color"></span>
            <span style="font-size: 12px;">${pin.language}</span>
          </span>
          <a style="font-size: 12px;">
            <svg aria-label="stars" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
              <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
            </svg>
          #</a>
          <a style="font-size: 12px;">
            <svg aria-label="forks" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-forked">
              <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z">
              </path>
            </svg>
          #</a>
        </p>
      </div>
    </div>
  </div>`;
  });
  renderToDom("#pinned-repos", pinnedString);
}
pinnedOnDom(repoExamples)

// render form on the DOM
const pinnedFormOnDom = () =>{
  let pinnedFormString =`<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Create Pinned Repository</label>
  <input type="text" class="form-control" id="pinned_name" placeholder="Name">
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Description</label>
  <input type="text" class="form-control" id="pinned_description" placeholder="Description" style="margin-bottom: 10px; padding-bottom: 100px;">
  <button type="submit" class="btn btn-primary pinned-btn" id="pinnedBtn">Pin!</button>
</div>`
renderToDom("#create-pinned-form", pinnedFormString)
}
pinnedFormOnDom(); 

pinnedForm.addEventListener("submit", (e) => {
    e.preventDefault();
    createPinnedRepo()
  });

// will create a new repo that is pinned 
const createPinnedRepo = () =>{
  const newPinnedObj = {
    id: repoExamples.length + 1,
    name: document.querySelector("#pinned_name").value,
    description: document.querySelector("#pinned_description").value
  }
  repoExamples.push(newPinnedObj);
  pinnedOnDom(repoExamples);
  pinnedForm.reset();
  console.log("submitting");
}

// Repos on DOM for repos page 
const cardsOnDom = (array) => {
  let repoExamplesDomString = "";
  array.map((repo) => {
    repoExamplesDomString += 
    `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${repo.name}</h5>
      <p class="card-text">${repo.description}</p>
      ${repo.language ? `<p class="card-text" style="background-color: ${
        repo.language === "Javascript"
        ? "#f1e05a"
        :repo.language === "HTML"
        ? "#e34c26"
        :repo.language === "CSS"
        ? "#41b883"
        : " "
      }">${repo.language}</p>` : ""}  
      ${repo.tags ? `<span>${repo.tags[0].tName}</span>` : ""}
    </div>
  </div>`
  });
      renderToDom("#listed-repos", repoExamplesDomString);
};
// cardsOnDom(repoExamples)

// renders form for repo page
const repoFormOnDom = () => {
  let domFormString = 
  `<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Create a New Repository </label>
  <input type="text" class="form-control" id="repo_name" placeholder="Name">
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Description</label>
  <input type="text" class="form-control" id="repo_description" placeholder="Description">
  <button type="submit" class="btn btn-primary" id="cRepoBtn">Create Repository</button>
</div>`
;
    renderToDom("#repo-form", domFormString)
};
// repoFormOnDom()

repoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  createNewRepo()
  });

const projects = [
  {
    id: 1,
    title: "Example 1",
    description: "No description",
    lastUpdated: "7 seconds ago"
  },
  {
    id: 2,
    title: "my-goals",
    description: "No description",
    lastUpdated: "4 hours ago"
  },
  {
    id: 3,
    title: "Sample My Goals",
    description: "Goals for the NSS Bootcamp",
    lastUpdated: "1 minute ago"
  },
  {
    id: 4,
    title: "Live Wire",
    description: "First project board with group",
    lastUpdated: "7 hours ago"
  },
  {
    id: 5,
    title: "Array methods",
    description: "Someone gives you a key and a number, you have cargo pants with associated numbers on them, put the key in there",
    lastUpdated: "12 days ago"
  }
];
//Renders Projects to DOM
const projectsOnDom = (array) => {
  let projectsDomString = "<span class='projects-summary'>3 Open 0 closed</span>";;
  array.map((project) => {
    projectsDomString += `<div class="card" style="width: 55%;">
    <h5 class="card-title">${project.title}</h5>
    <div class="card-body">
    <p class="card-text description"> ${project.description}</p>
    <button class="btn btn-dark float-end" id="star" class="starBtn">...</button>
    <p class="card-text updated">Last Updated ${project.lastUpdated}</p>
    
  </div>
</div>`;
});
renderToDom("#appProjects", projectsDomString);
};
// projectsOnDom(projects);

//Project Form appears
const projectForm = () =>{
  let formString =`<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Project board name</label>
  <input type="text" class="form-control" id="pForm_name" placeholder="Name">
</div>
<div class="mb-3">
  <label for="exampleFormControl" class="form-label">Description (optional)</label>
  <textarea class="form-control" id="pForm_description" placeholder="Description"></textarea>
  <button type="submit" class="btn btn-success pinned-btn" id="projectButton">Create project</button>
</div>`
renderToDom("#create-project-form", formString)
};  
// projectForm();

projForm.addEventListener("submit", (e) => {
    e.preventDefault();
    newProject()
    
  });

//create a function that grabs all the values from the form, pushes the new object to the array, 
//then repaints the DOM with the new project
const newProject = () => {
    const newProjectObject = {
      id: projects.length + 1,
      title: document.querySelector("#pForm_name").value,
      description: document.querySelector("#pForm_description").value,
      lastUpdated: "Just now"
    }
  projects.push(newProjectObject);
  projectsOnDom(projects);
  projForm.reset();
}


// created bew reos for repo page
const createNewRepo = () => {
    const newRepoObj = {
      id: repoExamples.length + 1,
      name: document.querySelector("#repo_name").value,
      description: document.querySelector("#repo_description").value,
      language: "",
      tag: [],
    };
    repoExamples.push(newRepoObj);
    cardsOnDom(repoExamples)
    repoForm.reset();
}


const startApp = ()=>{
  sideBarOnDom();
  pinnedOnDom(repoExamples);
  pinnedFormOnDom();
}
startApp()
