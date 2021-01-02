function breadInit(){
    var breadcrumbs=[];
    if(!sessionStorage.alreadyVisited){

        sessionStorage.setItem("br",JSON.stringify(breadcrumbs));

        sessionStorage.alreadyVisited = 1;
    }
}

function breadcrumbsGet(){

    return JSON.parse(sessionStorage.getItem("br"));
}

function breadcrumbsPush(){
    var breadcrumbs=breadcrumbsGet();
    if(!(String(breadcrumbs[breadcrumbs.length-1])===document.getElementById("breadcrumbs").innerText))
        breadcrumbs.push(document.getElementById("breadcrumbs").innerText);

    var bread=[];
    for(var i=5; i>0; i--){
        bread.push(breadcrumbs[breadcrumbs.length-i]);

    }
    console.log(bread);
    sessionStorage.setItem("br",JSON.stringify(breadcrumbs));

    return bread;
}

function breadcrumbs(){
    console.log("robim crumbs");
    var bread=breadcrumbsPush();
    var elmnt=document.createElement("div");
    elmnt.innerText="";
    bread.forEach(function (crumb){
        if(crumb!==undefined)
        elmnt.innerText+=crumb+'/'
    });

    document.getElementById("breadcrumbs").appendChild(elmnt);
}