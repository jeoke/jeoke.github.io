var agricultures = [{
      dishs:"baicai",
      name:"小白菜",
      src:".././img/agriculture/baicai.jpg",
      description:"三月底到4月底种植，秋季种植一般在8月左右",
      number:"20"
}];
var pulicagriculture = [{
	  name:"辣椒",
      src:".././img/agriculture/chili.jpg",
      description:"早春种植，10月底育苗，12月中下旬移栽。晚秋种植，八月中下旬种植，十月中下旬移栽。生殖周期三个月",
      number:"40"
}];

var tips = document.getElementsByClassName("tips");
var dishs = document.getElementById("dishs").getElementsByTagName("h4")[0].getAttribute("dishname");
var shucai = document.getElementsByClassName("shucai");
var publicshu = document.getElementsByClassName("publicshucai");

publicshu[0].getElementsByTagName("h3")[0].textContent = pulicagriculture[0].name;
publicshu[0].getElementsByTagName("img")[0].src = pulicagriculture[0].src;
publicshu[0].getElementsByTagName("p")[0].textContent = pulicagriculture[0].description;

for (var i = 0; i < agricultures.length; i++) {
	if (agricultures[i].dishs === dishs) {
		shucai[0].getElementsByTagName("h3")[0].textContent = agricultures[i].name;
		shucai[0].getElementsByTagName("img")[0].src = agricultures[i].src;
		shucai[0].getElementsByTagName("p")[0].innerHTML = agricultures[i].description;
	} else {

	}
}

