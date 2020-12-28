//

//cookies, dnesny datum, etc
$(document).ready(function(){
    const menu = {
        "Pages": [
            //prva uroven
          { "PageId": 1, "PageTitle": "Home",       "ParentMenu": null, "PageURL":"index.html"},
            //druha uroven
          { "PageId": 2, "PageTitle": "About",      "ParentMenu": "Home", "PageURL":"http://pornhub.com"},
            //tretia uroven
          { "PageId": 3, "PageTitle": "Martin",      "ParentMenu": "About", "PageURL":"nigga.html" },
          { "PageId": 4, "PageTitle": "Matus",    "ParentMenu": "About" },
          { "PageId": 5, "PageTitle": "Dusan",  "ParentMenu": "About" },
          { "PageId": 6, "PageTitle": "Samo", "ParentMenu": "About" },
            //stvrta uroven
          { "PageId": 7, "PageTitle": "Martinova hra",      "ParentMenu": "Martin" },
          { "PageId": 8, "PageTitle": "Matusova hra",    "ParentMenu": "Matus" },
          { "PageId": 9, "PageTitle": "Dusanova hra",  "ParentMenu": "Dusan" },
          { "PageId": 10, "PageTitle": "Samova hra", "ParentMenu": "Samo" },
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
     // console.log(app.innerHTML)
     breadCrumb(menu.Pages);
})
function breadCrumb(menu){
    var breadArr=[];
    
    var href = document.location.href;
    var lastPathSegment = href.substr(href.lastIndexOf('/') + 1);
    var lookingFor=lastPathSegment;
    if(lookingFor==menu[0].PageURL){}
    else{
        for (var i=0;i<menu.length;i++){
            if(lookingFor==menu[0].PageTitle){
                breadArr.push(menu[0]);
                break;
            }
            if (menu[i].PageURL==lookingFor || menu[i].PageTitle==lookingFor){
                console.log(lookingFor)
                breadArr.push(menu[i]);
                console.log(menu[i].ParentMenu)
                lookingFor=menu[i].ParentMenu;
                i=0;
            }

            console.log(breadArr);
        }
    }
    for(var j=breadArr.length-1;j>=0;j--){
        var crumb=document.createElement('a');
        crumb.setAttribute('href',breadArr[j].PageURL);
        crumb.appendChild(document.createTextNode(breadArr[j].PageTitle));
        document.getElementById("breadcrumbs").appendChild(crumb);

    }

}


function todaysDate(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;
    document.getElementById('today').innerHTML=today;
}