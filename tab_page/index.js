var li=document.getElementsByTagName('li');
var p=document.getElementsByTagName('p');
alert('abc');
alert(li.length);
alert(p.length);
for(var i=0;i<li.length;i++){
	li[i].click=function(){
		alert('test');
		for(var j=0;j<p.length;j++)
			p[j].style.display='none';
		p[i].style.display='block';
	};
}