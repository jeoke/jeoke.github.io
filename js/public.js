function moveImg(e){
     if(e.target.nodeName.toLowerCase() === 'img'){
     	if(e.target.className.indexOf('imgScale') === -1){
         	e.target.className += ' imgScale';
     	}else{
     		e.target.className = e.target.className.replace('imgScale','');
     	}
     }
}



document.addEventListener('mouseover',moveImg,false);
document.addEventListener('mouseout', moveImg, false);

var wrapper=document.getElementsByClassName('wrapper')[0];
var fadeOut=document.getElementsByClassName('nav-right')[0];
var nav = document.getElementsByClassName('nav')[0];
var fadeInAni = document.getElementsByClassName('nav-in')[0];


function fadeOutAni(){
	if(nav.className.indexOf('nav-animate') === -1){
		fadeInAni.className = fadeInAni.className.replace(' nav-in', '');
		nav.className += ' nav-animate';
		wrapper.className += ' wrapper-animate';
	}else{
	    wrapper.className = wrapper.className.replace(' wrapper-animate', '');
		nav.className = nav.className.replace(' nav-animate', '');
		fadeInAni.className += ' nav-in';
	}
}

fadeOut.addEventListener('click', fadeOutAni, false);
fadeInAni.addEventListener('click', fadeOutAni, false);

//UC Brower Compatitable
var agent = navigator.userAgent.toLowerCase();
if(agent.indexOf('ucbrowser')>0) {
  document.write('<link rel="stylesheet" href="/css/uc.css">');
   alert('由于 UC 浏览器使用极旧的内核，而本网站使用了一些新的特性。\n为了您能更好的浏览，推荐使用 Chrome 或 Firefox 浏览器。');
}

