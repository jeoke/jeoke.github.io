/*<div class="media">
  <div class="media-left media-middle">
    <a href="#">
      <img class="media-object" src="..." alt="...">
    </a>
  </div>
  <div class="media-body">
    <h4 class="media-heading">Middle aligned media</h4>
    ...
  </div>
</div>*/
var book = [
      {
      	index : "0",
        name : "css1.webp",
        description : "cssweb设计高级教程",
        introduction: "css2.1和XHTML相关的最佳实践，关于flash部分由于seo原因大部分网站已经废弃,主要内容，css的基础：选择器，层叠，继承，csshack,网站常用结构如导航栏一些基础css效果的应用，样式表的切换，flash的嵌入，png及浏览器的支持，媒体查询，基本布局"
      },
      {
      	index : "1",
        name : "css2.webp",
        description : "css设计那些事儿",
        introduction:"涉及的具体实现较多，基本上可以分为基础，布局，功能。包含css基础，浮动的利用，清除浮动的实现，css Sprite，怪异的盒子模式，相册，日历，幻灯片的制作,表单，还涉及结构分析，模块分析，图片优化，细节优化。在这里还介绍了Dreamweaver的使用，但对于新手而言本人推荐Hbuilder,如果有个性化需求，推荐sublime text"
      },
       {
      	index : "2",
        name : "css3.webp",
        description : "css禅意花园",
        introduction:"html是内容的载体，css就是让内容更加吸引人的魔术，这是一本偏向设计的书。设计的基础是：亲密性，对齐，重复，对比，以及颜色的运用。css禅意花园将已经不能称之为css的内容了，而是以设计为目的，css只是实现设计的工具，深入浅出的讲解css如何与设计结合在一起的。以及一些问题的解决。"
      },
      {
      	index : "3",
        name : "css4.webp",
        description : "HTML with CSS",
        introduction:"从0到1，详细的标签注解，书的排版给新手很强的包容感.对于入门来说，这本书是很友好的，因为对于入门css来说，盒模型，css hack，设计的一些运用还是很抽象的.。"
      },
      {
      	index : "4",
        name : "css5.webp",
        description : "精通cssweb标准解决方案",
        introduction:"不是所用用户的浏览器都支持css3，换个方式.同样是基础，就像是文档，但是有些功能的实现，可以更接地气。虽然称不上精通，对于css来说，细节和整体的构造更能说明水平问题"
      },
      {
      	index : "5",
        name : "css6.webp",
        description : "css商业网站布局",
        introduction:"css命名艺术，书写格式，注释，换肤技术也是css值得注意的地方。命名法，书写格式主要是结构清晰和可读性的要求，注释会影响页面的显示。了解一下这些也是必要的。而换肤技术涉及浏览器访问的速度，有很多种实施的办法，但是少不了页面的css的设计，所以了解思路是必要的。"
      },
             {
      	index : "6",
        name : "css7.webp",
        description : "响应式web设计",
        introduction:"css2.1保持稳定，css3为浏览器提供了更多的可能.响应式web设计有几本，但是原理是离不开css3的，对于兼容问题可以用样式覆盖和HTML语义化平缓过度到老版本浏览器。其核心是分辨率计算，百分比布局，还有em,rem的应用。这本书体系不是零散的知识点，而是体系的讲解了响应式布局和css3的原理"
      },
      {
      	index : "7",
        name : "css8.webp",
        description : "sass和compass设计指南",
        introduction:"css预编译器，是css语句变多后不好维护的产物，sass是css预编译的开端。css变多后产生了oocss(面向对象的css)，目的很简单，精简css,可维护可扩展，但是这个抽象的过程本来就是复杂的，然而预编译器解决了这个问题，根据语法自动计算，最后编译出css，理解sass是学习stylus，less，postcss等的基础，当然也可以跳过。"
      },
      {
      	index : "8",
        name : "es5.webp",
        description : "EAMC5javascript标准程序设计",
        introduction:"基础式最重要的，尤其是es5的，es6语法糖等提案都是有babel转译过来的,由于确实在某种程度上美化了写法，但是语法的基础使用及理念是js这门语言的核心"
      },
      {
      	index : "9",
        name : "arichmetic.webp",
        description : "数据结构与算法javascript描述",
        introduction:"算法是高级程序语言的核心,javascript也有相对于的算法实现,这篇文章介绍的是JavaScript基础算法及数据结构的实现"
      },
      {
      	index : "10",
        name : "designMode.webp",
        description : "javascript设计模式",
        introduction:"设计模式是建立在代码重用，可读性，工程性的系统实践与经验总结的,抽象程度很高，是每一门语言必须了解的内容"
      },
      {
      	index : "11",
        name : "http.webp",
        description : "图解HTTP",
        introduction:"计算机与网络设备要相互通信，双方就必须基于相同的方法。比如，如何探测到通信目标、由哪一边先发起通信、使用哪种语言进行通信、怎样结束通信等规则都需要事先确定。不同的硬件、操作系统之 间的通信，所有的这一切都需要一种规则。而我们就把这种规则称为 协议（protocol）。HTTP协议是暴露在前端和后端，生成报文和处理报文的协议"
      },
      {
      	index : "12",
        name : "node1.webp",
        description : "深入浅出node.js",
        introduction:"此书是介绍node.js的各种通用式用法的，比如如何通信，如何与数据库连接，如何检测前端页面状态，如何使用模板语言，如何调用桌面接口等。"
      },
      {
      	index : "13",
        name : "code.webp",
        description : "编码",
        introduction:"这本书介绍了计算机的发展史，比如锁存器，计算功能等，但是没有涉及CPU处理器的构造和设计。现代处理器的设计模式很多，这是原始的路径之一" 
      },
      {
      	index : "14",
        name : "readbook.webp",
        description : "如何阅读一本书",
        introduction:"阅读书籍有很多种方式，比如书籍的特点，与书籍的关系。浅读，精读，层次阅读，主题阅读。"
      },
      {
      	index : "15",
        name : "linux.webp",
        description : "unix/linux设计思想",
        introduction:"这本书介绍了Linux的开发方案，一切皆文件，命令行和GUI的概念"
      },
      {
      	index : "16",
        name : "treat.webp",
        description : "与自我和解",
        introduction:"在编写程序的时候，不熟练的时候或者出现问题的时候，这本书能帮助你摆脱各种思路的困扰。"
      },
      {
      	index : "17",
        name : "selfcontrol.webp",
        description : "自控力",
        introduction:"学习任何东西不仅需要了解，还要知道它是怎么做到可以运作的，高山仰止，才发现仰止弥坚。这个时候就需要自控力了。"
      },
      {
      	index : "18",
        name : "oprationalresearch.webp",
        description : "运筹学入门",
        introduction:"运用计算机的入门级别是计算功能，在了解和熟悉了基本功能以后，就是运用数学解决和优化日常问题了。此书还介绍了马可夫链模型，对于某些可知的预测还是很有效的。数学不研究不可知的问题。"
      },
      {
      	index : "19",
        name : "comunicate.webp",
        description : "沟通的艺术",
        introduction:"如何跟他人沟通，识人，世界上没有两片相同的树叶，这本书在程序语言之间的沟通和各种生活事项都适用。但范围有限。不是所有的狗或者生物都是人。只涉及一般问题。"
      },
      {
      	index : "20",
        name : "world.webp",
        description : "苏菲的世界",
        introduction:"这本书是意识流，此书的特点是，目睹一个空白的人认识不同世界的过程。简单的认识史。"
      },
      {
      	index : "21",
        name : "city.webp",
        description : "看不见的城市",
        introduction:"这本书涉及的地方很多，比如欧亚零散城镇文化。还有其他特点。主要是半虚构文学。文学是比较轻的。"
      },
      {
      	index : "22",
        name : "phlosophy.webp",
        description : "history of phlosophy",
        introduction:"本书是悌利所写的，比较教科版，避重就轻，对于原书而言还有很多遗漏的。对哲学史的介绍还是很详细的。并未突出各种个人色彩和时代色彩。以哲学点题。"
      },
      {
      	index : "23",
        name : "phlosopyl.webp",
        description : "古代哲学史",
        introduction:"这本书是罗素所写，我原本以为罗素比较偏向种族问题，但它对种族的描写和迁移和做过的事情描写比较多，后续比较有人文色彩，维特根斯坦是罗素的学生。在风格迥异的两种人物而言。可以说是睿智。"
      },
      {
      	index : "24",
        name : "socrates.webp",
        description : "苏格拉底的申辩",
        introduction:"苏格拉底的申辩记载了苏格拉底向雅典城邦各色人种，各种职责的人询问不同的问题，但后来被入狱了，从各种概念的构建和推演。到他入狱后面对各种人物的对话。"
      },
      {
      	index : "25",
        name : "fuke.webp",
        description : "疯癫与文明",
        introduction:"本文是在中世纪的写作，比如各种奇怪的事情的发生和相隔一个世纪后的相同情形的不同特征，社会现象与社会意识的不同表现，在模糊了各种背景下的不同情形。"
      },
      {
      	index : "26",
        name : "poet.webp",
        description : "给青年诗人的十封信",
        introduction:"里尔克的诗，贫困诗人，有人问里尔克如何写诗，后来里尔克认真的公开的回复了十封信。在一系列问题下，礼貌的回复了对方。"
      },
      {
      	index : "27",
        name : "chensil.webp",
        description : "第一沉思录",
        introduction:"这本书是笛卡尔发现微积分之前，关于上帝的推导，所以说是哲学史的重要转折点的一笔。"
      },
      {
      	index : "28",
        name : "sate.webp",
        description : "存在与虚无",
        introduction:"萨特的书籍，他人即地狱，是众所周知的言论，这本书说是存在主义著作。"
      },
      {
      	index : "29",
        name : "kd.webp",
        description : "纯粹理性批判",
        introduction:"康德的书籍，在写这本书籍的时候，他定义了德国民族的德性一词的概念。另外还有很多时间和空间的概念。为后来的各种现代科学奠定了基础。"
      },
      {
      	index : "30",
        name : "waerd.webp",
        description : "瓦尔登湖",
        introduction:"此书记载了梭罗在瓦尔登湖生活的一段时期的事情，自此，他发现了人类社会运转的一系列规律，简直，朴素。"
      },
      {
      	index : "31",
        name : "lifep.webp",
        description : "创造进化论",
        introduction:"此书为怕格森所写，在哲学史上留有一笔记录，主要是在那个机械年代，所赋有的一种生命的积极意义。但本人不是很感冒"
      },
      {
      	index : "32",
        name : "confrss.webp",
        description : "忏悔录",
        introduction:"这本书是梭罗所写，而不是奥古斯丁的，此书在某些地方避免了，还是有些避重就轻，描写了欧洲中古世纪的一系列事情。"
      },
      {
      	index : "33",
        name : "log.webp",
        description : "小逻辑",
        introduction:"此书是黑格尔各种学说的介绍，包括精神现象学和辩证法等。他在此书写明了中国没有哲学，就是出自此书。"
      },
      {
      	index : "34",
        name : "marks.webp",
        description : "马克思传",
        introduction:"众人只知马克思，不知马克思的经济学著作和个人生活经历，环境和当时的社会环境，马克思的哲学博士论文是研究自然原子哲学论的一篇文章。"
      },
      {
      	index : "35",
        name : "npeot.webp",
        description : "查拉图斯特拉如是说",
        introduction:"尼采与马克思相隔一个世纪，在他写这本书的时候，写了一系列此类书籍，包括当时的社会改革的看法，纵观他的整个生平，就像是说了一堆不知人们听不懂的话。"
      },
       {
      	index : "36",
        name : "control.webp",
        description : "控制论与科学方法论",
        introduction:"系统论是自然系统的各种因素和控制论，意即整体系统的协调和控制，当然此类书籍后来不为人知，业应当算在哲学史内。"
      },
      {     
      	index : "37",
        name : "wuhe.webp",
        description : "乌合之众",
        introduction:"此书是介绍无意识的族群类集群的产物，但研究无意识内容的荣格以及后续一系列心理学派。从个体无意识到意识到集群无意识和族群类无意识。"
      },
      {
      	index : "38",
        name : "losebook.webp",
        description : "失物之书",
        introduction:"此书为二战后所作，此书以童话描写现实世界，难以言表"
      },
      {
      	index : "39",
        name : "logic.webp",
        description : "批判性思维",
        introduction:"任何言语的漏洞和逻辑的基本漏洞，都称之为哲学的漏洞，哲学是高屋建瓴，是建立在生活里的。"
      },
      {
      	index : "40",
        name : "sidd.webp",
        description : "悉达多",
        introduction:"此文以不同视角描写了悉达多当时的社会背景和一系列过程，人文，侧重点不同，所观所感皆不同。此书为德国作家所写。"
      },
      {
      	index : "41",
        name : "book1.webp",
        description : "你永远无法叫醒一个装睡的人",
        introduction:"哲学的不同面貌，所见所观所感，此书作者对哲学有很多不一样的观点，归于现代哲学史一类。"
      },
      {
      	index : "42",
        name : "book.webp",
        description : "百年孤独",
        introduction:"本书是半虚构现实写作，写了一个家族百年的虚幻场景。不表。历史的最后一页对非虚构写作作者而言往往掩埋在风沙里，所以不表。但书，写的各人观感不同。"
      },
      {
      	index : "43",
        name : "economics.webp",
        description : "经济学原理",
        introduction:"介绍了各种微观到宏观经济的发展，和各种术语。比如：恩格斯指数，博弈论，微观经济的概念，多部门经济的运算。后续还有看不见的手和马尔萨斯陷阱之类的"
      },
      {
      	index : "44",
        name : "guofu.webp",
        description : "国富论",
        introduction:"此书为亚当斯密所写，比如稀缺自然资源的交换理论，比如博弈论，后续还有纳什均衡。此书横国。"
      },
      {
      	index : "45",
        name : "game.webp",
        description : "博弈论的诡计",
        introduction:"在现实社会中，如果结果是可知的，那么必当会陷入任意几种博弈模型中，这本书介绍了数十种博弈模型，他们说生活就是一系列选择，但我不认可这种说法，所以有些理论还会使用市场经济理论。"
      },
      {
      	index : "46",
        name : "principles.webp",
        description : "原则",
        introduction:"此书介绍了国际资本投资的策略和各种量化投资介绍和各种投资历史经过"
      },
       {
      	index : "47",
        name : "faju.webp",
        description : "图解法句经",
        introduction:"此书介绍了古代佛陀的各种基本理论"
      },
      {
      	index : "48",
        name : "lenyan.webp",
        description : "楞严经",
        introduction:"在佛陀谈经时，有很多言论流传于世，以各种写法流传于世。有时点题，有时入智。至于后传佛法，不在此表收藏之内。"
      },     
      {
      	index : "49",
        name : "zhushu.webp",
        description : "竹书纪年",
        introduction:"古书，向来以一种隐秘的说法写世情，此为一。世情未变。"
      },     
      {
      	index : "50",
        name : "zizhi.webp",
        description : "资治通鉴",
        introduction:"史书除《战国》《春秋》外，有两本，一本为史记，二本为资治通鉴。史记为纪传体史书，风格多变，朴素示世，记录到汉武帝，二本为资治通鉴，编年体史书，大体记载发生了何事。"
      },
      {
      	index : "51",
        name : "sang.webp",
        description : "三国演义",
        introduction:"这本书很有意思，记载在资治通鉴中，汉魏时期，略带古文，可以当本小说书可看，也可细品。"
      },
      {
      	index : "52",
        name : "shuihu.webp",
        description : "水浒传",
        introduction:"此书为宋朝所作，主要是描写宋朝夸张描写的小说，可能写实。小说可以鉴。"
      },
      {
      	index : "53",
        name : "taiwbook.webp",
        description : "中国文脉",
        introduction:"不谈文风，就看叙事，此书有脉络，所写侧重于唐代，各种文风和历史还有人物关系，可以再品。"
      },
      {
      	index : "54",
        name : "daode.webp",
        description : "道德经",
        introduction:"老子出生于商邑一代，周围是商族，常有商族问道，后在老年编写的道德经一书。在周文王编写周易以后，又完善了周易一书。这个过程很有意思。"
      },
      {
      	index : "55",
        name : "qinj.webp",
        description : "清静经",
        introduction:"据说是宋代所传，本无道教，原为道家，宋代葛家道庭另有《抱朴子》一书，道教道观后不显于世，于各地皆有流传。此书为开庭之书。"
      },
      {
      	index : "56",
        name : "zhuanzi.webp",
        description : "从鹏扶摇到蝶翩跃",
        introduction:"此书详细研究了庄子的著作，《逍遥游》《齐物论》《养生主》《大宗师》《应帝王》，就是从鹏道蝉。"
      },
      {
      	index : "57",
        name : "guiguzi.webp",
        description : "鬼谷子",
        introduction:"鬼谷子一书很早就有流传，但是之前看不懂，此书也算经典一篇"
      },
      {
      	index : "58",
        name : "mdynasty.webp",
        description : "明朝那些事儿",
        introduction:"这本书主要是写元到明朝贯穿整个朝代的历史，人物和人物传记，有汉朝有清代一些出名的人物历史"
      },
      {
      	index : "59",
        name : "xinxue.webp",
        description : "王明阳心学",
        introduction:"王明阳为元朝人，古文极多，为儒家之说，一般大动，承前启后之学。承儒，有宋，天理人心之说。"
      },
      {
      	index : "60",
        name : "houloum.webp",
        description : "红楼梦",
        introduction:"为清代小说典籍，文风各理，几十年心学之作，可能字字珠玑"
      },
      {
      	index : "61",
        name : "caigen.webp",
        description : "菜根谭",
        introduction:"明清之说，后清隐，一般书籍已经不在世了，文风质朴。但古文，难言，不表。"
      },
      {
      	index : "62",
        name : "ancient.webp",
        description : "古文观止",
        introduction:"此为晚清著作。"
      },
      {
      	index : "63",
        name : "qin.webp",
        description : "幽梦影",
        introduction:"此为清代闲谈留书，自清代以后，文风大变，古籍遗失。"
      },
      {
      	index : "64",
        name : "fourteach.webp",
        description : "了凡四训",
        introduction:"此为清朝某地所著，儒生所著，古有性命之说，曾问有《紫薇九极算数》之说，后闲谈问于僧。为修身立命之说。"
      },
      {
      	index : "65",
        name : "luxun.webp",
        description : "鲁迅文集",
        introduction:"鲁迅文集，此类书录，所写有前代世情，另有个人文风改变"
      },
      {
      	index : "66",
        name : "menu.webp",
        description : "中国八大菜系",
        introduction:"各地烹饪手法，以及菜系和食材。"
      },
      {
      	index : "67",
        name : "electric.webp",
        description : "家装水电技能一点通",
        introduction:"这本书大概是个人所需现实技能最通用的一本，物理，电磁类不在本人所知范围内，所以这是当代比较通用的一本。"
      },
];
for (var i =  0; i < book.length; i++) {
	var media = document.createElement("div");
    var mediaMiddle = document.createElement("div");
    var imgMedia = document.createElement("img");
    var imgurl = "../img/book/"+book[i].name;
    imgMedia.setAttribute("src", imgurl);
    var mediaBody = document.createElement("div");
    var h4 = document.createElement("h4");
    var h4C=book[i].description;
    var h4Text = document.createTextNode(h4C);
    var bodyC = book[i].introduction;
    var bodyText = document.createTextNode(bodyC);
    h4.appendChild(h4Text);
    media.setAttribute("class", "media");
    mediaMiddle.setAttribute("class", "media-left media-middle");
    imgMedia.setAttribute("class", "media-object");
    mediaBody.setAttribute("class", "media-body");
    h4.setAttribute("class", "media-heading");
    mediaMiddle.appendChild(imgMedia);
    mediaBody.appendChild(h4);
    media.appendChild(mediaMiddle);
    media.appendChild(mediaBody);
    var mediap = document.createElement("p")
    mediaBody.appendChild(mediap);
    mediap.appendChild(bodyText);
    document.getElementById("bookmenu").appendChild(media);
}

var pagination=document.getElementsByClassName("pagination")[0].getElementsByTagName("li");
console.log(pagination);
var palength = pagination.length-2,
    booklength = book.length;
    console.log(booklength,palength)
var showfrenquency =  Math.floor(booklength/palength)+1;
pagination[1].classList.add("active");
console.log(showfrenquency);
var mediadiv=document.getElementById("bookmenu").getElementsByClassName("media");
for (var i = 0; i <booklength; i++) {
   var index = book[i].index;
   if (index<showfrenquency) {
   	mediadiv[index].style.display = "block";
   } else {    		
   	mediadiv[index].style.display = "none";
   }
    	
}
console.log(mediadiv)
function setdata(start){
	var sdata = [];
	for (var i = 0; i < showfrenquency; i++) {
		var number = start+i;
		console.log(number)
		if (number<booklength) {  
	     	sdata.push(number);
		} else {
			return sdata;
		}
	}
	console.log(sdata);
    return sdata;
}

function showTable(index) {
        switch (index) {
        	case "0":
        		var showdata = setdata(0);
        		showdiv(showdata);
        		break;
		    case "1":
		    	var showdata = setdata(showfrenquency);
		    	console.log(showdata);
        		showdiv(showdata);
		    	break;
	        case "2":
		    	var showdata = setdata(showfrenquency*2);
        		showdiv(showdata);
		    	break;
		    case "3":
		    	var showdata = setdata(showfrenquency*3);
        		showdiv(showdata);
		    	break;
	        case "4":
		    	var showdata = setdata(showfrenquency*4);
        		showdiv(showdata);
		    	break;
        }
}

function hidediv() {
	for (var i = 0; i <booklength; i++) {
         var index = book[i].index;
     	mediadiv[index].style.display = "none";
    }
    for (var i = 0; i < pagination.length; i++) {
    	pagination[i].classList.remove("active");
    }
}

function showdiv (data) {
	hidediv();
	for (var i = 0; i < data.length; i++) {
		var number = data[i];
		console.log(data)
		mediadiv[number].style.display = "block";
	}
}

var lList=[];
for (var i = 1; i <=5; i++) {
    lList.push(pagination[i]);
}
var currentp = 0;

for (var i = 0; i < lList.length; i++) {
	lList[i].addEventListener("click", function(e) {
		e.preventDefault();
    var ariali = this.getAttribute("ariali");
        currentp = Number(ariali);
        showTable(ariali);
        this.setAttribute("class", "active");
	})
}
pagination[0].addEventListener("click", function(e) {
	e.preventDefault();
	if (currentp>0) {
		currentp = Number(currentp);
		console.log(lList,currentp)
	    currentp=(currentp-1).toString();
		showTable(currentp);
		lList[currentp].classList.add("active");
	} else {
		return ;
	}
})
pagination[6].addEventListener("click", function(e) {
	e.preventDefault();
	if (currentp<4) {
		currentp = Number(currentp);
	    currentp=(currentp+1).toString();
		showTable(currentp);
	    lList[currentp].classList.add("active");
	} else {
		return ;
	}
})