var img = document.getElementById("contentmain").getElementsByTagName("img");
var contentmain = document.getElementById("contentmain");
var nav = document.getElementsByClassName("navbar")[0];
var div = document.getElementsByClassName("container-fluid")[0];
var  navanimation =  function(value){
	setTimeout(function(e) {
		console.log(div.offsetTop);
       		div.style.top = div.offsetTop + value + "px"; 
       	}, 360);
}    
nav.addEventListener("mouseenter", function(e){
   if (e.target != this) {
   	return false;
   } else {
   	if (div.offsetTop===-50) {
       for (var i = 0; i < 50; i++) {
           navanimation(1);
       }
	} else {
		return ;
	}
   }
	

});
nav.addEventListener("mouseleave", function(e){
	console.log(this)
	if (e.target != this) {
   	return false;
   } else {
   	if (div.offsetTop===0) {
       for (var i = 0; i < 50; i++) {
           navanimation(-1);
       }
	} else {
		return ;
	}
   }
	

});