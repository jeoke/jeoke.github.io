var fullPage = document.getElementsByClassName('full-page');
var pageLen = fullPage.length;

function pageTransition(j){
   for(var h=0;h<pageLen;h++){
   	liContrller[h].style.backgroundColor = 'transparent';
   	if(fullPage[h].className.indexOf('page-show') === -1 && j === h){
        [].slice.call(fullPage).forEach(function(item){
        	item.className = item.className.replace('page-show','');
        })
        fullPage[j].className += ' page-show';
        liContrller[j].style.backgroundColor = 'black';
   	}
   }
}

var index=0;

function preScroll(index,DOMSet){
    if(index===0){
    	pageTransition(2);
    	window.index = 2;
    }else{
    	pageTransition(index-1);
    	window.index = index-1;
    }
}

function nextScroll(index,DOMSet){
	if(index==2){
		pageTransition(0);
		window.index = 0;
	}else{
		pageTransition(index+1);
		window.index=index+1;
	}
}

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

var wheelDeltaData;
function scrollContent(DOMSet,e){
  if (e.wheelDelta) {
       wheelDeltaData = (client().engine.opera && client().engine.opera>9.5)? -e.wheelDelta : e.wheelDelta;
  }else{
		wheelDeltaData = -e.detail*40;
	}
    if(wheelDeltaData > 0){
    	preScroll(index,DOMSet);
    }else{
    	nextScroll(index,DOMSet);
    }
}

var timer = null;
var start = 0;
var touchTime;
function scrollHandler (direction) {
      if (timer != null) { return }
      if (direction === 'down') {
        preScroll(index);
      } else {
        nextScroll(index);
      }
      timer = setTimeout(function () {
        clearTimeout(timer);
        timer = null
      }, 700)
    }

var liContrller = document.getElementById('controller-bar').getElementsByTagName('li');
liLen = liContrller.length;
for(var j=0;j < liLen;j++){
	liContrller[j].addEventListener('click',pageTransition.bind(this,j), false);
}
document.body.addEventListener('mousewheel', scrollContent.bind(this,fullPage), false);
document.body.addEventListener('DOMMouseScroll', scrollContent.bind(this,fullPage), false);


window.addEventListener('touchstart', function (event) {
  start = event.touches[0].clentY
  touchTime = new Date().getTime();
}, false)
window.addEventListener('touchmove', function (event) {
  event.preventDefault()
},  { passive :false })
window.addEventListener('touchend', function (event) {
  if (start) {
    start = 0;
  }
  touchTime = new Date().getTime() - touchTime;
  let gap = event.changedTouches[0].clientY - start
  let direction
  if (gap > 100) { direction = 'up' } else if (gap < -100) { direction = 'down' }
  if(touchTime < 180 && direction === 'undefined'){
    return;
  }else{
    scrollHandler(direction);    
  }
}, false)

