particlesJS("particles-js", {
	"particles":{
		"number":{
			"value":100,
			"density":{
				"enable":true,
				"value_area":1000
			}
		},
		"color":{
			"value":"#e7e7e7"
		},
		"line_color":{
            "value":"#000"
		},
		"shape":{
			"type":"circle",
			"stroke":{
				"width":1,
				"color":"#777"
			},
			"polygon":{
				"nb_slides":7
			},
			"size":{
				"value":0.2,
				"random":false,
				"anim": {
                    "enable": false,
                    "speed": 2,
                    "size_min": 1,
                    "sync": false
                }
			}
		},
		"size":{
             "value": 1,
             "random": true,
             "anim":{
             	"enable":false,
             	"speed":2,
             	"size_min":0.1,
             	"sync":false
             }
		},			
		"line_linked":{
				"enable":true,
				"distance":250,
				"color":"#e7e7e7",
				"opacity":0.9,
				"width":1
	     },
        "move":{
            	"enable":true,
            	"speed":2,
            	"random":false,
            	"straight":false,
            	"attract":{
            		"enable":true,
            		"rotateX":900,
            		"rotateY":1500,

            	}
            },
            "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            }, 
            "modes": {
                "grab": {
                    "distance": 1200,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 8000,
                    "size": 10,
                    "duration": 0.3,
                    "opacity": 1,
                    "speed": 1
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 1
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true 

		}
	}
);

var mediap = document.getElementsByClassName("media")[0].getElementsByTagName("p");

for (var i = 0; i < mediap.length; i++) {
	mediap[i].addEventListener("mouseover", function(e) {
		var alertInfo = document.getElementsByClassName("alert-info")[0];
		alertInfo.classList.remove("alert-info");
		alertInfo.classList.add("alert-active");
		this.classList.remove("alert-active");
		this.classList.add("alert-info");
	});
}
var aside = document.getElementById("aside");
aside.addEventListener("mouseout",function(e) {
	e.stopPropagation();
		if (e.target != this) {
   	         return false;
         }else{
        for (var i = 0; i < mediap.length; i++) {
		if (mediap[i].classList.contains("alert-info")) {
			mediap[i].classList.remove("alert-info");
			mediap[i].classList.add("alert-active");
		}
		mediap[0].classList.add("alert-info");
	}
         } 	
});

var alerP = document.getElementById("alertpanel");
var navbar = document.getElementsByClassName("navbar");
var footerp = document.getElementsByTagName("footer");
var main = document.getElementsByTagName("main");
alerP.addEventListener("click", function(e) {
	navbar[0].style.opacity = "0.5";
	console.log(aside);
    aside.style.opacity = "0.5";
    main[0].style.opacity = "0.5";
    console.log(footerp[0])
    footerp[0].style.top = "6em";
    footerp[0].style.display = "block";
    footerp[0].style.visibility = "visible";
});

var close =document.getElementById("close");
close.addEventListener("click", function(e) {
	footerp[0].style.top = "100em";
    footerp[0].style.display = "none";
    footerp[0].style.visibility = "hidden";
	navbar[0].style.opacity =  "1";
    aside.style.opacity =  "1";
    main[0].style.opacity =  "1";
});