// Dynamic Tabify Tabbed Panels Menu

const tabifyContainer = document.querySelector(".tabify-container");
// set container width based on total number of tabs
tabifyContainer.style.width = (tabifyData.length * 150) + 'px';
const tabilfyUl = document.querySelector(".tabify-ul");
const tabifyDivs = document.querySelector(".tabify-div");
const colors = ['#cceeff', '#ddddee', '#ddee99', '#eeccdd', 
'#ddeedd', '#aaeedd', '#eebbff', '#ffddee'];

tabifyData.forEach((e,i) => {
    const li = document.createElement('li'); // make an li
    li.style.backgroundColor = colors[i];
    tabilfyUl.appendChild(li); // output li to accordion ul
    const btn = document.createElement('button'); // make a button
    btn.innerHTML = e.btnText; // output btn name with +
    btn.id = i;
    btn.addEventListener('click', showTab); // button calls function
    li.appendChild(btn); // output button to li
    const div = document.createElement('div'); // make a div
    div.innerHTML = e.divHTML; // put the desc in the div
    div.id = 'div-'+i;
    div.style.backgroundColor = colors[i];
    tabifyDivs.appendChild(div); // output the div to the li
});

let currentDiv = document.getElementById('div-0');
currentDiv.style.display = "block";

function showTab() {
    currentDiv.style.display = "none";
    currentDiv = document.getElementById('div-' + this.id);
    currentDiv.style.display = "block";
  };