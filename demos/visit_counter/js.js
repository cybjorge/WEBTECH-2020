function visitorCounterInit(){
	console.log("here2!");
    if (typeof(Storage) !== "undefined") {
        if(!sessionStorage.guestVisited) {
	console.log("before");
            if(localStorage.getItem("before")==="true"){
		
                if (localStorage.visited) {
			
                    localStorage.visited = Number(localStorage.visited) + 1;
                } else {
                    localStorage.visited = 1;
                }
                sessionStorage.guestVisited= 1;
                localStorage.setItem("before","false");
            }
        }
	    if(localStorage.visited===undefined){
                localStorage.visited=1;
            }
            document.getElementById("counter").innerHTML = "You have been here  " + localStorage.visited + " time(s).";



    }
    else{
        document.getElementById("counter").innerHTML = "Your web browser sucks!";

    }
}

window.onload = function (event) {
    console.log("here!");
    localStorage.setItem("before","true");
}
