if (!localStorage["name"]){
	document.getElementById("NameScreen").style.display = "flex"
}else{
	name = localStorage["name"]
	document.getElementById("GameScreen").style.display = "flex"
	document.getElementById("GameScreen").style.display = "none"
}