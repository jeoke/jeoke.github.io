/**/
var canvas = document.getElementById('canvasmain');
var ctx = canvas.getContext('2d');
var ch = canvas.height;
var cw = canvas.width;
ctx.translate(0,ch);
ctx.rotate(270*Math.PI/180);
ctx.save();
ctx.fillStyle = '#03a9f4c7';
ctx.shadowoffestX=5;
ctx.shadowoffestY=5;
ctx.shadowBlur=5;
ctx.shadowColor='#03a9f4c7';

var assicaInput = document.getElementById("abscissa");
var verticalInput = document.getElementById("vertical");
var tallInput = document.getElementById("tall");
var wideInput = document.getElementById("wide");
var flitercInput = document.getElementById("fliterc");
//input输入限制汉字
var inputtype = document.getElementById("fliterc");
inputtype.addEventListener("keyup", function(event){
    var value = event.target.value; 
    var filteredValue = value.replace(/[^\u4e00-\u9fa5]/g, '');  
    inputtype.value = filteredValue;  
})

function maxxImit(){
    if(this.value>300){
        this.value = 300
    }
}
function maxyImit(){
    if (this.value>150) {
        this.value = 150;
    }
}

assicaInput.addEventListener("keyup",maxxImit);
verticalInput.addEventListener("keyup",maxyImit);
tallInput.addEventListener("keyup",maxxImit);
wideInput.addEventListener("keyup",maxyImit);

ctx.restore();
//存储参数
var canarr = [];
var ctxarr =[];
//添加参数按钮
var btnParm=document.getElementById("btn-parm");
btnParm.addEventListener('click', function(e) {
     var assica = assicaInput.value;
     var vertical = verticalInput.value;
     var tall = tallInput.value;
     var wide = wideInput.value;
     var fliterc = flitercInput.value;

     if(fliterc === ""){
        alert("区域值不能为空");
     }

     ctx.fillStyle="#03a9f4c7";
     var assica = Number(assica);
     var vertical = Number(vertical);
     var tall = Number(tall);
     var wide = Number(wide);
     ctxarr = [vertical,assica,tall,wide,fliterc];
     canarr.push(ctxarr);
     console.log(canarr,ctxarr);
     ctx.fillRect(vertical,assica,tall,wide);
     ctx.save();
     ctx.translate(vertical,assica);
     ctx.rotate(270*Math.PI/540);
     ctx.fillStyle = '#4A4C4E';
     ctx.font = "11px serif";
     ctx.fillText(fliterc, 0,0);
     ctx.restore();
     ctx.strokeStyle='##206DE7';
     ctx.strokeRect(vertical,assica,tall,wide);
     assicaInput.value="";
     verticalInput.value="";
     tallInput.value="";
     wideInput.value="";
     flitercInput.value="";
});
//需要的效果，不可重叠，图形看起长宽比小于4：5；
var sortbtn = document.getElementById("sort");
sort.addEventListener("click",function(e) {
    function swap(arr,index1,index2){
        var temp;
        temp=arr[index1];
        arr[index1]=arr[index2];
        arr[index2]=temp;
    }
    function select(arr) {
         var n = arr.length;
         for (var i = 0; i < n-1; i++) {
             var minIndex = i;
             for (var j = i+1; j < n; j++) {
                 if(arr[j][2]*arr[j][3]<arr[i][2]*arr[i][3]){
                    minIndex = j;
                 }else {
                    minIndex = i;
             }
             console.log(arr,i,minIndex);
             swap(arr,i,minIndex);
              console.log(arr,i,minIndex);
         }
     }
    }
     select(canarr); 
      console.log(canarr);
     //初始化元素纵坐标
     function initalcan(arr) {
        var middlex = 0;
        var arl = arr.length-1;
        arr[arl][0]=0;
        arr[0][1]=0;
         for (var i = 0; i <arr.length-1; i++) {
            arr[i][0]=0;
            middlex = arr[i][3]+middlex;
            arr[i+1][1] = middlex;
         }
     }
     initalcan(canarr);
     var canassist = document.getElementById("canvasassist");
     var cat = canassist.getContext('2d');
     cat.reset();
        cat.translate(0,ch);
        cat.rotate(270*Math.PI/180);
        cat.save();
     for (var i = 0; i < canarr.length; i++) {
         cat.fillStyle = "#03a9f4c7";
         if (i==0) {
            cat.fillRect(canarr[0][0],canarr[0][1],canarr[0][2],canarr[0][3]);
            cat.save();
            cat.translate(canarr[0][0],canarr[0][1]);
            cat.rotate(270*Math.PI/540);
            cat.fillStyle = '#4A4C4E';
            cat.font = "11px serif";
            cat.fillText(canarr[0][4], 0,0);
            cat.restore();
            cat.strokeStyle='##206DE7';
            cat.strokeRect(canarr[0][0],canarr[0][1],canarr[0][2],canarr[0][3]);
         } else {
            cat.fillRect(canarr[i][0],canarr[i][1],canarr[i][2],canarr[i][3]);
            cat.save();
            cat.translate(canarr[i][0],canarr[i][1]);
            cat.rotate(270*Math.PI/540);
            cat.fillStyle = '#4A4C4E';
            cat.font = "11px serif";
            cat.fillText(canarr[i][4], 0,0);
            cat.restore();
            cat.strokeStyle='##206DE7';
            cat.strokeRect(canarr[i][0],canarr[i][1],canarr[i][2],canarr[i][3]);
         }
         
     }
});

//button基础功能
console.log(document.body.getElementsByTagName("button"))
var buttonNumber=document.body.getElementsByTagName("button");
for(var i=0;i<buttonNumber.length;i++){
    buttonNumber[i].addEventListener('click',function(e){
		e.preventDefault();
}); 
}
var formsb = document.getElementsByClassName('assistbutton');
var buttonsbA = formsb[0].getElementsByTagName('button');
//var buttonsb2 = formsb[1].getElementsByTagName('button');
console.log(formsb);
for (var m = 0; m < buttonsbA.length ; m++) {
    buttonsbA[m].addEventListener('click', function(){
    	for(var j=0; j < buttonsbA.length;j++){
    		buttonsbA[j].classList.remove('active');
    	}
    	this.classList.add('active');
    });
//    buttonsb2[m].addEventListener('click', function(){
//    	for(var j=0; j < buttonsb2.length;j++){
//    		buttonsb2[j].classList.remove('active');
//    	}
//    	this.classList.add('active');
//    });

}
/*
ctx.rotate(-20*Math.PI/180);
ctx.fillStyle = '#cddade';
ctx.fillRect(0, 0, 10, 90);
ctx.rotate(20*Math.PI/180);
ctx.translate(-25,-25);
ctx.fillStyle = 'red';
ctx.fillRect(0, 0, 10, 90);
ctx.fillStyle = 'blue';
ctx.fillRect(25, 25, 10, 90);
*/
//给图添加文字
var picturecan = document.getElementById("computerassist");
var picc = picturecan.getContext('2d');

var cssWidth = canvas.width;
var cssHeight = canvas.height;

var devicePixelRadio = window.devicePixelRadio || 1;

picturecan.width = cssWidth*4;
picturecan.height = cssHeight*4;

picc.scale(4,4);

console.log(picturecan.width);
console.log(picturecan.height);
console.log(window.devicePixelRadio);
console.log(picc)
var text = "图优化之交通路线图优化"

picc.fillText(text,90,20);
picc.font = "10px 'Fira Sans'";
var rendedmark =[];
var circle = [0,1,2,3,4,5];
var circlename =["v0","v1","v2","v3","v4","v5"];
//画1点
function rended(obj,x,y,radius,text){
    obj.beginPath();
    obj.arc(x,y,radius,0,Math.PI*2);
    obj.closePath();
    obj.fillStyle = '#0a2231';
    obj.fill();
    obj.font = "8px";
    obj.fillText(text,x-10,y-10);
}
rended(picc,50,70,8,circlename[0]);
var render1 = [50,70,8];
rendedmark.push(render1);


var visit = [];
var graph = [];
var graphv0 = [];
graphv0.push(0);
visit.push(0);
//画2圆
rended(picc,100,50,8,circlename[1]);
var render2 = [100,50,8];
rendedmark.push(render2);
visit.push(0);
//画直线
function rendline(obj,ax,ay,bx,by) {
    obj.beginPath();
    obj.moveTo(ax,ay);
    obj.lineTo(bx,by);
    obj.closePath();
    obj.fillStyle = '#0a2231';
    obj.stroke();
}
rendline(picc,rendedmark[0][0],rendedmark[0][1],rendedmark[1][0],rendedmark[1][1]);
picc.font = "8px";
picc.fillText("100",65,55);
graphv0.push(100);
var graphv1=[];
graphv1.push(100);
graphv1.push(0);
//画3圆
rended(picc,100,120,8,circlename[2]);
var render3 = [100,120,8];
rendedmark.push(render3);
visit.push(0);
var graphv2=[];

//画直线
rendline(picc,rendedmark[0][0],rendedmark[0][1],rendedmark[2][0],rendedmark[2][1]);
picc.font = "8px";
picc.fillText("1200",65,105);
graphv0.push(1200);
graphv0.push(Infinity);
graphv0.push(Infinity);
graphv0.push(Infinity);
graphv2.push(1200);
//画直线
rendline(picc,rendedmark[1][0],rendedmark[1][1],rendedmark[2][0],rendedmark[2][1]);
picc.font = "8px";
picc.fillText("900",85,85);
graphv1.push(900);
graphv2.push(900);
graphv2.push(0);

//画4圆
rended(picc,150,50,8,circlename[3]);
var render4= [150,50,8];
rendedmark.push(render4);

visit.push(0);
var graphv3=[];
graphv3.push(Infinity);

//画直线
rendline(picc,rendedmark[1][0],rendedmark[1][1],rendedmark[3][0],rendedmark[3][1]);
picc.font = "8px";
picc.fillText("300",115,47);
graphv1.push(300);
graphv1.push(Infinity);
graphv1.push(Infinity);
graphv3.push(300);

//画直线
rendline(picc,rendedmark[2][0],rendedmark[2][1],rendedmark[3][0],rendedmark[3][1]);
picc.font = "8px";
picc.fillText("400",115,87);
graphv2.push(400);
graphv3.push(400);

//画5圆
rended(picc,150,120,8,circlename[4]);
var render5 = [150,120,8];
rendedmark.push(render5);

visit.push(0);
graphv3.push(0);
var graphv4=[];
graphv4.push(Infinity);
graphv4.push(Infinity);

//画直线
rendline(picc,rendedmark[2][0],rendedmark[2][1],rendedmark[4][0],rendedmark[4][1]);
picc.font = "8px";
picc.fillText("500",115,117);
graphv2.push(500);
graphv2.push(Infinity);
graphv4.push(500);

//画直线
rendline(picc,rendedmark[3][0],rendedmark[3][1],rendedmark[4][0],rendedmark[4][1]);
picc.font = "8px";
picc.fillText("1300",145,87);
graphv3.push(1300);
graphv4.push(1300);
graphv4.push(0);

//画6圆
rended(picc,210,90,8,circlename[5]);
var render6 = [210,90,8];
rendedmark.push(render6);

visit.push(0);
var graphv5=[];
graphv5.push(Infinity);
graphv5.push(Infinity);
graphv5.push(Infinity);

//画直线
rendline(picc,rendedmark[3][0],rendedmark[3][1],rendedmark[5][0],rendedmark[5][1]);

picc.font = "8px";
picc.fillText("1400",175,77);
graphv3.push(1400);
graphv5.push(1400);

//画直线
rendline(picc,rendedmark[4][0],rendedmark[4][1],rendedmark[5][0],rendedmark[5][1]);

picc.font = "8px";
picc.fillText("1500",175,107);
graphv4.push(1500);
graphv5.push(1500);
graphv5.push(0);

//合并总图
graph.push(graphv0);
graph.push(graphv1);
graph.push(graphv2);
graph.push(graphv3);
graph.push(graphv4);
graph.push(graphv5);

console.log(graph);
//一个数组存储寻址图
//一个数组存储寻址最短路径

function djkstrac(){
var n=graph.length;
var dist=[];
var road = [];
var mark=0;
var markmiddle = 0;
var djkstra =[];
var mindist = [];//存储最短距离的中间节点和最终节点
for(var i = 0;i<n;i++){
  dist[i] = graph[0][i];
}
console.log(dist);
    mindist[dist[0]]=[0,0];
    mindist[dist[1]]=[0,1];
//更新最短路径
for (var i = 0; i < n; i++) {
    var min_dist = Infinity;//存储最短距离
    var middle=0; //存储最短节点
    road[i]=[];

   for (var j = 0; j<n; j++) {
       if (visit[j]==0 && min_dist>dist[j]) {
        min_dist =dist[j];
        middle=j;
       } 
   }

    for (var k = 0; k < n;k++) {
        if(visit[k]===0){
            if(dist[k]>dist[middle]+graph[middle][k]){
                dist[k]=dist[middle]+graph[middle][k];
                mark = k;
                markmiddle = middle;
                mindist[dist[k]]=[markmiddle,mark];
            }
        }else{
          continue;
        }
    }
    visit[middle]=1;
    road[i]=[];

}
    
for (var i = dist.length-1; i > 0; i--) {
    var k = i-1;
    var j = i;
    road[j].push(mindist[dist[i]][1]);
    road[j].push(mindist[dist[i]][0]);
   
}
//序列化road;

for (var i = road.length-1; i > 0 ; i--) {
    k=road[i].length-1;
    lastnum = road[i][k];
   while(road[i][k]!==0){
        middlenum = road[i][k];
        road[i].push(road[middlenum][1]);
        k=road[i].length-1;
    }
}
road[0].push(0);
//road正序
for (var i = 0; i < road.length; i++) {
    road[i].reverse();
}

djkstra=[dist,road];
return djkstra;
}

djkstraod = djkstrac();
//点位数组

//画点
function renderR(canvaso,road,graph,dist) {
    var text = "图优化后各最短路径"

    canvaso.fillText(text,90,20);
    //画点

    for (var i = 0; i < road.length; i++) {
      rended(canvaso,rendedmark[circle[i]][0],rendedmark[circle[i]][1],rendedmark[circle[i]][2],circlename[i]);
    }
    var text;
    for (var i = 0; i < road.length; i++) {
        console.log(road[i].length-1,road[i])
        for (var j = 0; j < road[i].length-1; j++) {
            rendline(canvaso,rendedmark[road[i][j]][0],rendedmark[road[i][j]][1],rendedmark[road[i][j+1]][0],rendedmark[road[i][j+1]][1]);
            text= graph[road[i][j]][road[i][j+1]].toString();
            canvaso.font = "8px";
            canvaso.fillText(text,(rendedmark[road[i][j]][0]+rendedmark[road[i][j+1]][0])/2.1,(rendedmark[road[i][j]][1]+rendedmark[road[i][j+1]][1])/2);
        }
 
    }
    //阐述最短路径
     var rtext =[];
     var result;
    for (var i = 0; i < road.length; i++) {
       result ="v"+i.toString()+":"+"v"+road[i].join("->v");
       rtext.push(result);
    }
    for (var i = 0; i < rtext.length; i++) {
        canvaso.fillText(rtext[i],300,50+16*i);
    }
    var distext = "最短路径总和分别是："+ dist.join(",");
    console.log(distext)
        canvaso.font = "8px";
        canvaso.fillText(distext,100,180);
}

var graphbu = document.getElementById("graph");
var canvasob = document.getElementById("computerassist1");
var canvasobj = canvasob.getContext('2d');
var cssWidth = canvasob.width;
var cssHeight = canvasob.height;

var devicePixelRadio = window.devicePixelRadio || 1;

canvasob.width = cssWidth*6;
canvasob.height = cssHeight*6;

canvasobj.scale(4,4);
graphbu.addEventListener("click",function(e) {
    e.preventDefault();
    renderR(canvasobj,djkstraod[1],graph,djkstraod[0]);

});