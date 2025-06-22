var flowimgarial = new Array();
var flowmainimg = document.getElementById("flowmain").getElementsByTagName("img");
var footspan = document.getElementById("imgfooter").getElementsByTagName("span");
var sortimgA;
for (var i = 0; i < flowmainimg.length; i++) {
	  flowimgarial.push(flowmainimg[i].getAttribute("arial"));
}
function hide(ele) {
	for (var i = 0; i < ele.length; i++) {
		ele[i].classList.remove("active");
	}
};
function removeid() {
	for (var i = 0; i < flowmainimg.length; i++) {
	 	flowmainimg[i].removeAttribute("id");
	 } 
}
function  addId(index) {
    sortimgA[index].setAttribute("id", "imgactive");
}

function visible (imgarr) {
     	for (var i = 0; i < imgarr.length; i++) {
    		document.getElementById("sortimgA").appendChild(imgarr[i]);
     	}
        for (var i = 0; i < flowimgarial.length; i++) {
         		imgarr[i].setAttribute("arial", flowimgarial[i]);
         	} 	
}
function sortimg(index) {
	var sortImg =[];
		removeid();
		sortimgA = document.getElementById("sortimgA").getElementsByTagName("img");
		addId(index);
		if(index<2){
		var	gap=2-index;
           if (gap>1) {
           	console.log(sortImg);
           	sortImg.push(sortimgA[3]);
           	sortImg.push(sortimgA[4]);
           	sortImg.push(sortimgA[0]);
           	sortImg.push(sortimgA[1]);
           	sortImg.push(sortimgA[2]);
            visible(sortImg);
           } else {
           	sortImg.push(sortimgA[4]);
           	sortImg.push(sortimgA[0]);
           	sortImg.push(sortimgA[1]);
           	sortImg.push(sortimgA[2]);
           	sortImg.push(sortimgA[3]);
             visible(sortImg);          
           }
		}else if (index>2) {
			var gap=index-2;
          if (gap>1) {
          	sortImg.push(sortimgA[2]);
           	sortImg.push(sortimgA[3]);
           	sortImg.push(sortimgA[4]);
           	sortImg.push(sortimgA[0]);
           	sortImg.push(sortimgA[1]);
            visible(sortImg);
          } else {
          	sortImg.push(sortimgA[1]);
           	sortImg.push(sortimgA[2]);
           	sortImg.push(sortimgA[3]);
           	sortImg.push(sortimgA[4]);
           	sortImg.push(sortimgA[0]);
            visible(sortImg);
		   }} else {
		   	sortImg.push(flowmainimg[0]);
           	sortImg.push(flowmainimg[1]);
           	sortImg.push(flowmainimg[2]);
           	sortImg.push(flowmainimg[3]);
           	sortImg.push(flowmainimg[4]);
             visible(sortImg);
		   }
}

for (var i = 0; i < footspan.length; i++) {
	footspan[i].addEventListener("click", function(e) {
		var arialindex=Number(this.getAttribute("arial"));
		hide(footspan);
	    this.classList.add("active");
	    var that = this;
	       setTimeout(function(){
           that.classList.remove("active");
           footspan[2].classList.add("active");
        }, 360);
        sortimg(arialindex);
	});
	flowmainimg[i].addEventListener("click", function(e) {
		var arialindex=Number(this.getAttribute("arial"));
		hide(footspan);
	    this.classList.add("active");
	    var that = this;
	       setTimeout(function(){
           that.classList.remove("active");
           footspan[2].classList.add("active");
        }, 360);
        sortimg(arialindex);
	});
}

document.getElementById("pre").addEventListener("click", function(e) {
    var currenArr = document.getElementById("sortimgA").getElementsByTagName("img");
    var nextArr = [];
    nextArr.push(currenArr[1]);
    nextArr.push(currenArr[2]);
    nextArr.push(currenArr[3]);
    nextArr.push(currenArr[4]);
    nextArr.push(currenArr[0]);
    removeid();
    visible(nextArr);
    sortimgA = document.getElementById("sortimgA").getElementsByTagName("img");
    addId(2);
})

document.getElementById("next").addEventListener("click",function() {
    var currenArr = document.getElementById("sortimgA").getElementsByTagName("img");
    var nextArr=[];
    nextArr.push(currenArr[4]);	
    nextArr.push(currenArr[0]);
    nextArr.push(currenArr[1]);
    nextArr.push(currenArr[2]);
    nextArr.push(currenArr[3]);
    removeid();
    visible(nextArr);
    sortimgA = document.getElementById("sortimgA").getElementsByTagName("img");
    addId(2);
});

var tips1 = "如需购买流量卡，扫描二维码。跳转到购买页，或者复制链接";
var tipsa="<a>https://172.lot-ml.com/ProductEn/Index/3b5aa1e7d3bf7d80</a>"
var tips2="跳转到购买链接，购买前请仔细查看详情说明。";
var topswarapper = document.createElement("div");

    document.getElementsByTagName("footer")[0].appendChild(topswarapper);

var stringH = function(str,i) {
	setTimeout(function() {
                div.innerHTML += str.substring(i, i+1);
		    		}, i*100); 
}		    

var sets = function (argument) {
	setTimeout(function  (argument) {
		   topswarapper.setAttribute("class","alert alert-info");
	}, 1500);
}
sets();
		var div = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0];
		function visibletips1 () {
 		    for (var i = 0; i < tips1.length; i++) {
                stringH(tips1,i); 
	        }
		}

        function visibletips2 (argument) {
        	visibletips1();
        	setTimeout(function(argument) {
        		console.log(tips1.length)
        		div.innerHTML+=tipsa; 
        		var ac = document.getElementsByTagName("footer")[0].getElementsByTagName("a")[0];
        		ac.href = "https://172.lot-ml.com/ProductEn/Index/3b5aa1e7d3bf7d80";
        		ac.target = "_blank";
        	}, tips1.length*100);
        	setTimeout(function(argument) {
        		for (var i = 0; i < tips2.length; i++) {
                    stringH(tips2,i);	
		        }  
        	}, tips1.length*100+1);

        	
        }
        
        visibletips2();

	    


