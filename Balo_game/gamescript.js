
var counter=0;
var game=document.getElementById("game");
var initial=game.innerHTML;
var demoo=0;

var timer=new easytimer.Timer();
timer.start();
timer.addEventListener('secondsUpdated',function (e){
  document.getElementById("timer").innerText=timer.getTimeValues().toString();
})


var wrongAudio=new Audio();
wrongAudio.src="sounds/buzz.mp3";

var endAudio= new Audio();
endAudio.src="sounds/end.mp3";

var rightAudio= new Audio();
rightAudio.src="sounds/yea.mp3";

function endCheck(image,div){
  console.log(image);
  console.log("ID"+div);
  if(image=="ID"+div){
    var undrag=document.getElementById(image);
    undrag.setAttribute("draggable","false");
    var undragdiv=document.getElementById(div);
    undragdiv.removeAttribute("ondrop");
    counter=counter+1;
    rightAudio.play();
  }
  else{
    
    wrongAudio.play();
    return false;
  }
}
function gameOver(){
  if (counter==8){  
    var img=document.createElement("img");
    img.src="images/end.jpg"; 
    img.className="end";
    document.getElementById('end').appendChild(img);
    $('html,body').scrollTop(0);
    endAudio.play();
    timer.stop();

  }
}

function resetAll(){
  demoo=0;
  counter=0;
  timer.reset();
  game.innerHTML=initial;
  $('#end').find(":first-child").remove();
  init();
  $( function() {
    $( document.getElementsByClassName("ui-droppable") ).droppable({
  
        drop: function( event,ui ) {
              if(String(image)==='ID'+this.getAttribute("id")){
                $(document.getElementById(image)).draggable('destroy');
                $(this).find(":first-child").remove();
                $(this).append(document.getElementById(image));
                $(document.getElementById(image)).attr("style","top:0")
                counter=counter+1;
                rightAudio.play();
                gameOver();
  
            }
        },     
    });
  } );
  
}

function demo(){
  if(demoo==0){
    var j=1;
    for (var i=1;i<=8;i++){
      console.log('aminacia')
      
      $(document.getElementById("ID"+i)).animate({
        
        right:$("#"+i).position().left/2,
        top:-$("#"+i).offset().top/2.5,
  
      },1000,function(){
        console.log('jebla funckia')
        $("#"+j).find(":first-child").remove();
        $(document.getElementById("ID"+j)).appendTo("#"+j);
        $(document.getElementById("ID"+j)).attr("style","top:0")
        j=j+1;
       
  
      })
      console.log('po jeblej')
      
    }
  }
  else{
    alert("stlac reset")
  }
  demoo=demoo+1;
}

var image;
$(init);
function init(){
  $(document.getElementsByClassName("ui-draggable") ).draggable({
      create: function (event,ui){},
      start: function drag(event,ui) {
          image=this.getAttribute("id");

          
      }
      
})};
$( function() {
  $( document.getElementsByClassName("ui-droppable") ).droppable({

      drop: function( event,ui ) {
            if(String(image)==='ID'+this.getAttribute("id")){
              $(document.getElementById(image)).draggable('destroy');
              $(this).find(":first-child").remove();
              $(this).append(document.getElementById(image));
              $(document.getElementById(image)).attr("style","top:0")
              counter=counter+1;
              rightAudio.play();
              gameOver();

          }
      },     
  });
} );



