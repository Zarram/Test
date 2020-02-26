function insertText(){
	document.getElementById("newContent").innerHTML= "some new text: <br> Hello <br>";
}

function calculate(){
	var t = widthBox.Value;
	
	var w = document.getElementById("widthBox").value;
	var l = document.getElementById("lengthBox").value;
	var h = document.getElementById("heightBox").value;
	
	
	w=parseFloat(w);
	h=parseFloat(h);
	l=parseFloat(l);
	var result = w*h*l;
	
	document.getElementById("xx").innerHTML = result;
}

function multiplication(){
	document.getElementById("mult-tb").innerHTML ="";
	var f = document.getElementById("factor").value;
	for(var i=1;i<=10;i++){
		var res=f*i;
		document.getElementById("mult-tb").innerHTML += res+"<br/>";
	}
}
