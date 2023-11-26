// Tabify Menu
const tabifyContainer = document.querySelector(".tabify-container");
const btnsArr = document.querySelectorAll(".tabify-ul button");
const tabsArr = document.querySelectorAll(".tabify-ul li");
const panelsArr = document.querySelectorAll(".tabify-div div");
// set container width based on total number of tabs
tabifyContainer.style.width = (panelsArr.length * 160) + 'px';
const colors = ['#cceeff', '#ddddee', '#ddee99', '#eeccdd', 
'#ddeedd', '#aaeedd', '#eebbff', '#ffddee'];

let activePanel = panelsArr[0];
activePanel.style.display = "block";

btnsArr.forEach((btn,i) => {  
  tabsArr[i].style.backgroundColor = colors[i];
  panelsArr[i].style.backgroundColor = colors[i];
  btn.addEventListener("click", () => {
    btn.classList.toggle('btn-hilite');
    activePanel.style.display = "none";
    activePanel = panelsArr[i];
    activePanel.style.display = "inline-block";
  });
});