//komponenty
//
class MyComponentOne extends HTMLElement{
    constructor() {
        // Always call super first in constructor
        super();
    }
    connectedCallback(){
        this.innerHTML='<div id="body_head"> <div id="breadcrumbs"></div><div id="today"></div> <hr> <div id="menu"><hr><counter-component></counter-component> </div></div>'
        document.getElementById("breadcrumbs").innerHTML=document.title;
      }

}
class MyComponentTwo extends HTMLElement{
    constructor() {
        // Always call super first in constructor
        super();
    }
    connectedCallback(){
        this.innerHTML='<div id="counter"></div>'
    }

}
class MyComponentThree extends HTMLElement{
    constructor() {
        // Always call super first in constructor
        super();
    }
    connectedCallback(){
        
        this.innerHTML='<div id="nameday_section"><div id="nameday_searchbox"><input type="text" placeholder="meno alebo datum a fuck you...." name="search"><div id="output">obsah tohoto sa bude prepinat, cize ak prazny, ukaze sa len dnesny datum napr<div id="input_date"></div><div id="sk_nameday"></div></div></div></div>'
    }

}
customElements.define('menu-component', MyComponentOne);
customElements.define('counter-component', MyComponentTwo);
customElements.define('meniny-komponent', MyComponentThree);

//crumbs
$(document).ready(function(){
    const menu = {
        "Pages": [
            //prva uroven
          { "PageId": 1, "PageTitle": "Home",       "ParentMenu": null, "PageURL":"../index/index.html"},
          //druha uroven
          { "PageId": 2, "PageTitle": "Checklist",  "ParentMenu": null },
            //druha uroven
          { "PageId": 3, "PageTitle": "ONAS",  "ParentMenu": null },
          
          { "PageId": 4, "PageTitle": "Martin",      "ParentMenu": "ONAS", "PageURL":"../about/about_smeto.html" },
          { "PageId": 5, "PageTitle": "Matus",    "ParentMenu": "ONAS" },
          { "PageId": 6, "PageTitle": "Dusan",  "ParentMenu": "ONAS" },
          { "PageId": 7, "PageTitle": "Samo", "ParentMenu": "ONAS" , "PageURL":"../about/about_balo.html" },
            //tretia uroven
          { "PageId": 8, "PageTitle": "Martinova hra",      "ParentMenu": "Martin", "PageURL":"../Smeto_game/smeto_game.html" },
          { "PageId": 9, "PageTitle": "Matusova hra",    "ParentMenu": "Matus" },
          { "PageId": 10, "PageTitle": "Dusanova hra",  "ParentMenu": "Dusan" },
          { "PageId": 11, "PageTitle": "Samova hra", "ParentMenu": "Samo" , "PageURL":"../Balo_game/index.html" },
        ]
      }
      
      // abstracted way to create an element
      const createElement = (type, className, href, text) => {
        const el = document.createElement(type)
        const a=document.createElement('a');
        el.className = className
        a.setAttribute('href',href);
        if(text){
            a.appendChild(document.createTextNode(text))
        }

        el.appendChild(a);

        return el
      }
      
      // print the menu as a tree
      const createMenu = (menu, parentName = null, level = 0) =>
        menu.reduce((ul, item) => {
          if (item.ParentMenu === parentName) {
            const li = createElement(`li`, `menu__item`,item.PageURL ,item.PageTitle)
            ul.appendChild(li)
            // recursively call itself changing the parentName to the current PageTitle
            const children = createMenu(menu, item.PageTitle, level+1)
            if (children.childNodes.length) {
              li.appendChild(children)
            }
          }
          return ul
        }, createElement(`ul`, `menu__list level--${level}`))
      
      const app = document.querySelector(`#menu`)
      app.appendChild(
        createMenu(menu.Pages, null)
      )
     
})

function todaysDate(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;
    document.getElementById('today').innerHTML=today;
}
