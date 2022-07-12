var length=document.querySelectorAll(".drum").length
for (i = 0; i <length; i++) {
	document.querySelectorAll("button")[i].addEventListener("click",function () {
		var songs=this.innerHTML;
		sound(songs);
		activate(songs);

 });
}
	
document.addEventListener("keydown",function(event){
	var key=event.key;
	sound(key);
	activate(key);
});

function sound(key){
	switch(key){

	        case"w":
		    var song1=new Audio("sounds/Mathuga Mathuga.mp3");
		    song1.play();
		  	setTimeout(
		  		function () {
		  			song1.pause();
		  		}
		  	,3000)
 		

		    break;
		    
		    case"a":
		    var song2=new Audio("sounds/Once Upon a Time.mp3");
		    song2.play();
		    	setTimeout(
		  		function () {
		  			song2.pause();
		  		}
		  	,3000)
		    break;


		    case"s":
		    var song3=new Audio("sounds/Vikram.mp3");
		    song3.play();
		    	setTimeout(
		  		function () {
		  			song3.pause();
		  		}
		  	,3000)
		    break;


		    case"d":
		    var song4=new Audio("sounds/Wasted.mp3");
		    song4.play();
		    	setTimeout(
		  		function () {
		  			song4.pause();
		  		}
		  	,3000)
		    break;


		    case"j":
		    var song5=new Audio("sounds/porataEDM.mp3");
		    song5.play();
		    	setTimeout(
		  		function () {
		  			song5.pause();
		  		}
		  	,3000)
		    break;


		    case"k":
		    var song6=new Audio("sounds/porata.mp3");
		    song6.play();
		    	setTimeout(
		  		function () {
		  			song6.pause();
		  		}
		  	,3000)
		    break;


		    case"l":
		    var song7=new Audio("sounds/SURIYA.mp3");
		    song7.play();
		    	setTimeout(
		  		function () {
		  			song7.pause();
		  		}
		  	,3000)
		    break;
		    default:
		    console.log(key + "" +"not configurired key,pressed!")
 

    }
 }
 function activate(key){
 	var selectedClass=document.querySelector("." + key).classList;
 	selectedClass.add("pressed");
 	setTimeout(
 		function(){
 			selectedClass.remove("pressed");

 		}
 		,1000)
}

