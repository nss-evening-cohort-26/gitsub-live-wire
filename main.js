import { renderToDom } from "./utils/renderToDom";

const sideBarOnDom = ()=>{
  let domString = ``;
renderToDom("#layout-sidebar", domString);
console.log("hello")
};

const startApp = () =>{
  sideBarOnDom();
}

startApp();
