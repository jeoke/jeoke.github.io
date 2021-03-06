//bootstrap processbar
var content = document.getElementsByClassName('scrollPos')[0];
var wrapperBox = document.getElementsByClassName('box-shadow')[0];
var progress = document.getElementsByClassName('progress-bar')[0];

function client(){
	var engine = {
		opera : 0,
		ver : null
	}
	if(window.opera){
        engine.ver = window.opera.version();
        engine.opera = parseFloat(engine.ver);
	}
	return {
		engine:engine
	}
}

var contentH = content.offsetHeight;
var wrapperH = wrapper.offsetHeight;

content.style.top = 0 + 'px';
progress.style.width = wrapperH/contentH*100 + '%';

function scrollContent (e) {
	var wheelDeltaData;
	var contentH = content.offsetHeight;
    var wrapperH = wrapperBox.offsetHeight;
	if (e.wheelDelta) {
       wheelDeltaData = (client().engine.opera && client().engine.opera>9.5)? -e.wheelDelta : e.wheelDelta;
	}else{
		wheelDeltaData = -e.detail*40;
	}

    if(wheelDeltaData > 0){
    	preScroll(wrapperH,contentH);
    }else{
    	nextScroll(wrapperH,contentH);
    }

}


function preScroll(wrapperH,contentH){
	if(Math.abs(parseInt(content.style.top)) >= 0 && parseInt(content.style.top) >= -80){
	   content.style.top = 0 + 'px';
       progress.style.width = wrapperH/contentH*100 + '%';
    }else {
       content.style.top = parseInt(content.style.top) + 80 + 'px';
       progress.style.width = (wrapperH-parseInt(content.style.top))/contentH*100 + '%';	
    }
}

function nextScroll(wrapperH,contentH){
	if (contentH - wrapperH - 80 <= Math.abs(parseInt(content.style.top))){
       content.style.top = '-' + (contentH - wrapperH + 40) + 'px';
       progress.style.width = '100%';	
	}else{
       content.style.top = (parseInt(content.style.top) - 80) + 'px';
       progress.style.width = (wrapperH-parseInt(content.style.top))/contentH*100 + '%';	
	}
}

var isdragging = false;
var diff;
function dragStart(e){
   isdragging = true;
   var contentH = content.offsetHeight;
   var wrapperH = wrapperBox.offsetHeight;
   diff = e.clientY - progress.getBoundingClientRect().top;
   progress.style.width = diff/parseInt(document.defaultView.getComputedStyle(progress.parentNode, null).width)*100 + '%';
   content.style.top = '-' + (diff/parseInt(document.defaultView.getComputedStyle(progress.parentNode, null).width)*1000*contentH-wrapperH*1000)/1000 + 'px';   
}

function dragging(e){
    e.preventDefault();
    if(isdragging){
    diff = e.clientY - progress.getBoundingClientRect().top;
    progress.style.width = diff/parseInt(document.defaultView.getComputedStyle(progress.parentNode, null).width)*100 + '%';
    content.style.top = '-' + (diff/parseInt(document.defaultView.getComputedStyle(progress.parentNode, null).width)*1000*contentH-wrapperH*1000)/1000 + 'px';  
    }else{
      return;
    }
}

function dragEnd(e){
     isdragging = false;
     removeEventListener('mousedown', dragStart, false);
     removeEventListener('mousemove', dragging, false);
}


document.body.addEventListener('mousewheel', scrollContent, false);
document.body.addEventListener('DOMMouseScroll', scrollContent, false);

progress.parentNode.addEventListener('mousedown', dragStart, false);
progress.parentNode.addEventListener('mousemove', dragging, false);
progress.parentNode.addEventListener('mouseup', dragEnd, false);
progress.parentNode.addEventListener('mouseleave', dragEnd, false);


var timer = null;
var start = 0;
function scrollHandler (direction) {
      if (timer != null) { return }
    var contentH = content.offsetHeight;
    var wrapperH = wrapperBox.offsetHeight;
    console.log(direction);
      if (direction === 'down') {
         nextScroll(wrapperH,contentH);         
      } else {
         preScroll(wrapperH,contentH);
      }
      timer = setTimeout(function () {
        clearTimeout(timer);
        timer = null
      }, 360);
}

window.addEventListener('touchstart', function (event) {
  window.start = event.touches[0].clientY;
}, false)
window.addEventListener('touchmove', function (event) {
  event.preventDefault()
}, { passive :false })
window.addEventListener('touchend', function (event) {
  if (!start) {
    start = 0;
  }

  var gap = event.changedTouches[0].clientY - start;
  var direction;
  if (gap > 100) { 
    direction = 'up';
    scrollHandler(direction);
    } else if (gap < -100) { 
      direction = 'down';
      scrollHandler(direction);
    }else{
    return;
  }
}, false)