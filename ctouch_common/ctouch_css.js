//generated by ctouch_inner.rb
var s=document.createElement('script');
s.type='text/javascript';
s.id='src/ctouch_css_js';
s.innerHTML="\
(function(){\n\
//var ratio=1;\n\
//var ratio=window.devicePixelRatio;\n\
//document.documentElement.style.zoom=ratio;\n\
var body=document.getElementsByTagName('body');\n\
if(body&&body[0]){ //lol?\n\
	if(document.defaultView.getComputedStyle(body[0],'').overflow=='hidden')\n\
		body[0].style.overflow='scroll';\n\
	//body[0].style.userSelect='auto';\n\
	body[0].style.webkitUserSelect='auto';\n\
	//body[0].style.zoom=1;\n\
}\n\
var opt=document.getElementsByTagName('option');\n\
if(opt)for(var i=0;i<opt.length;i++)opt[i].style.color='black';\n\
//monkey-patch Reel...\n\
var swiff=document.getElementsByClassName('swiff');\n\
if(swiff)for(var i=0;i<swiff.length;i++){\n\
	if(swiff[i].tagName.toLowerCase()=='div'&&swiff[i].getAttribute('data-src'))swiff[i].style.textAlign='left';\n\
}\n\
var scr=document.getElementsByTagName('script');\n\
if(scr)for(var i=0;i<scr.length;i++){\n\
	if(scr[i].src&&scr[i].src.substr(0,32)=='http://aimg.gree.jp/js/reel/Reel'){\n\
		for(var j=0;j<scr.length;j++){\n\
			if(scr[j].innerText.match(/\\.setContainer\\((.+?),/)){\n\
				var str=RegExp.$1;\n\
				try{\n\
					var elem=eval(str);\n\
					elem.style.textAlign='left';\n\
				}catch(e){\n\
					console.log('failed to eval '+str);\n\
				}\n\
			}\n\
		}\n\
		break;\n\
	}\n\
}\n\
//var meta=document.getElementsByTagName('meta');\n\
//if(meta)for(var i=0;i<meta.length;i++)if(meta[i].name=='viewport'){meta[i].parentNode.removeChild(meta[i]);break;}\n\
/*\n\
var embed=document.getElementsByTagName('embed');\n\
if(embed&&embed.length==1){\n\
	//console.log(embed);\n\
	var parent=embed[0].parentNode;\n\
	if(parent.tagName=='DIV')parent.style.height='100%';\n\
}*/\n\
var myself = document.getElementById('ctouch_css_js');\n\
myself.parentNode.removeChild(myself);\n\
})();\n\
";
document.documentElement.appendChild(s);
