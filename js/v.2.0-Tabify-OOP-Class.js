class Tabify {

  constructor() {

    this.ul = document.querySelector(".tabify-ul");
    this.tabifyDivs = document.querySelector(".tabify-div");
    this.data = tabifyData;
    this.colors = ['#cceeff', '#ddddee', '#ddee99', '#eeccdd', 
    '#ddeedd', '#aaeedd', '#eebbff', '#ffddee'];
    this.tabifyCon = document.querySelector(".tabify-container");
    // set container width based on total number of tabs
    this.tabifyCon.style.width = (this.data.length * 150) + 'px';

    for(let i = 0; i < this.data.length; i++) {
      this.li = document.createElement('li'); // make an li
      this.li.style.backgroundColor = this.colors[i];
      this.ul.appendChild(this.li); // output li to accordion ul
      this.btn = document.createElement('button'); // make a button
      this.btn.innerHTML = this.data[i].btnText; // output btn name with +
      this.btn.id = i;
      this.btn.addEventListener('click', this.showTab.bind(this)); // button calls function
      this.li.appendChild(this.btn); // output button to li
      this.div = document.createElement('div'); // make a div
      this.div.innerHTML = this.data[i].divHTML; // put the desc in the div
      this.div.id = 'div-'+i;
      this.div.style.backgroundColor = this.colors[i];
      this.tabifyDivs.appendChild(this.div); // output the div to the li
    };

    this.currentDiv = document.getElementById('div-0');
    this.currentDiv.style.display = "block";

  } // close constructor()

  showTab(event) {
    this.currentDiv.style.display = "none";
    this.currentDiv = document.getElementById('div-' + event.target.id);
    this.currentDiv.style.display = "block";
  };

} // close Class Tabify