## Tabify 
### Tabbed Panel
#### by Brian McClain
#### Instructor of JavaScript and Python Programming; Noble Desktop, NYC
- This **Tabify** accordion widget / plugin can be deployed anywhere in your website, integrating seamlessly with your existing code.
- In your html page, import the css into your html page's **head**:
```js
    <link href="css/tabify-styles.css" rel="stylesheet">
```

- In your html page, for versions v.1.5 and above add this code snippet wherever you want the tabbed panel group to appear. The data will be supplied by the **tabify-data.js** file, which will be used by the tabify js file to render the tabbed panels.
```js
    <div class="tabify-container">
        <ul class="tabify-ul"></ul>
        <div class="tabify-div"></div>
    </div><!-- .tabify-container -->
```
- For version v.1.0, which uses static html, add the tabs to the ul. Each clickable tab is an **li** with a **button** inside. The html for version v.1.starts you out with 8 tabs, but you can just remove or comment out the ones you don't want. And of course, you need to change the names to match your data:

```js
    <ul class="tabify-ul">
        <li><button>Balderdash</button></li>
        <li><button>Blather</button></li>
        <li><button>Claptrap</button></li>
        <li><button>Drivel</button></li>
        <li><button>Gibberish</button></li>
        <li><button>Hipster Ipsum</button></li>
        <!-- <li><button>Nonsense</button></li>
        <li><button>Poppycock</button></li> -->
    </ul>
```

- In v.1.0, the "tabify-div" div comes with child divs, one per tab. These must  go in the same order as the tabbed buttons they pertain to. So, the div with the Balderdash content would go first, since that button is first in the ul. Inside the "tabify-div" child divs, put whatever content you want. In the v.1.0 demo, the contents of each panel div is just an h3 followed by paragraph or two of hipster ipsum text.

- Import the js file(s) at the end of the body.  
The different imports are shown below for each of the four versions:

- This project has three versions of a tabbed panel.  
- Each version has its own **html** and **js** files. 
- All three versions look and behave identically in the browser--  
the difference is in how the same result is made four different ways  
in the JavaScript.
- Versions **1.5+** also use the **tabify-data.js** file.
- All three versions use the same **css** file.
- The tabbed panel buttons are structured as a **ul**.
- Each tabbed panel is a **div** tag inside the **tabify-div** wrapper.
- Click the button to switch to seeing that tab. 
- The JS function changes display from "none" to "block" to show the tabbed panel. Only one panel at a time is visible. All others have display "none".

### The three versions of the Tabify Menu:

**v.1.0 Tabify Tabbed Menu (Hard-Coded)** :  
- The **li** tags and **buttons** are all hard-coded in the **ul**.  
- To use **v.1.0**, add this to the bottom of your html page:

```jss
    <script src="js/v.1.0-tabify-tabbed-menu.js"></script>
```

**v.1.5 - Tabify Dynamic Menu** :  
- The **<ul class="tabify-div"** is hard-coded into the html, but only as an empty wrapper. All the panel **div** tags are made dynamically, in the JS file.
- This v.1.5 version, as well as all higher versions, import **tabify-data.js**, which contains an array of objects, one object per tabbed panel item.
- To use **tabify-data.js**, import it at the bottom of your html page ABOVE the **v.1.5** js file:
```js
    <script src="js/tabify-data.js"></script>
    <script src="js/v.1.5-tabify-dynamic.js"></script>
```
- To add html such asimages, etc., inside a tabbed panel, include the html for this as part of the **divHTML** in the object in **tabify-data.js**:

```js
    {btnText:'Foo', divHTML:`<p>Lorem ipsum dolor sit amet.</p>`},
    {btnText:'Bar', divHTML:`<p>Recusandae provident asqit.</p>`},
```

**v.2.0 - Tabify OOP** :  
- For this version, the accordion menu is made by the **Tabify** Class, which you need to import into your html page and instantiate.
- To use **v.2.0**, add this to the bottom of your html page:

```js
    <script src="js/tabify-data.js"></script>
    <script src="js/v.2.0-Tabify-OOP-Class.js"></script>
    <script>
        const Tabify = new Tabify(".Tabify", accordionData);
    </script>
```

### About the **tabify-data.js** file and how to use it:  
- **tabify-data.js** provides the data for all accordion versions with the exception of **v.1.0**, which is hard-coded.
- **tabify-data.js**, has two keys: **btnText** and **divHTML**. 
- Change the values to be your own text. Suppose you had two tabs, **Foo** and **Bar**. Clicking either tab revealed the div containing **lorem impum** text. This is what the dataset objects would look like:
```js
    {btnText:'Foo', divHTML:`<p>Lorem ipsum dolor sit amet.</p>`},
    {btnText:'Bar', divHTML:`<p>Recusandae provident asqit.</p>`},
```
- **btnText** appears on the individual tab. This is what you see to click on.
- **divHTML** is the content that is revealed when its tab is clicked.

**Tab and panel colors**  
The JS files all have a colors array with hex colors that are applied to the tabs and the panels. Change these colors to whatever you like.

**Editing the CSS**  
Feel free to change the border radius, background color, font size, font family, widths, heights and other values. Caution: maybe do a Save-As of the CSS file first and experiment with that.