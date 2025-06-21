//document.getElementById('contentmain').getinnerHTML=accountH;
 var h = document.getElementById('contentmain');
 var divC= document.createElement('div');
     h.appendChild(divC);
     divC.setAttribute("arial", "account");
     divC.setAttribute("arialindex", "0");
     divC.innerHTML = accounts;
     araialName = divC.getAttribute("arial");
     divC.setAttribute("class","box-shadow");
var hdiv = h.getElementsByTagName('div');
var a = document.getElementById("asideassist").getElementsByTagName("a");
for (var i = a.length - 1; i >= 0; i--) {
 	a[i].addEventListener("click", function(e) {
 		for (var j = 0; j < a.length;j++) {
 			a[j].classList.remove('active');
         var eid = this.id;
         var result = 0;
          for (var i = 0; i < hdiv.length; i++) {
            console.log(hdiv[i],hdiv[i].getAttribute("arial"),eid);
             if(hdiv[i].getAttribute("arial") === eid){
                result=1;
                hdiv[i].style.display = "block";    
             }else {
                hdiv[i].style.display = "none";
             }
         }
         }
           this.classList.add('active');  

         if(result === 0){
            var divoth= document.createElement('div');
            var divId =this.id;
            h.appendChild(divoth);
            divoth.setAttribute("arial", divId);
            divoth.setAttribute("class","box-shadow");
            console.log(divoth.getAttribute("arial"));
            cons = divId+"s";
            console.log(cons);
            divothC = window[cons];
            divoth.innerHTML = divothC; 
            this.classList.add('active');
         }
        });
 } 
