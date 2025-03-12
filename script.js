console.log("SCRIPT")
const form = document.getElementById('nameForm');
const nameDisplay = document.getElementById('player');
const pointsDisplay = document.getElementById('points');
var points = 0
var name = ""
if (!localStorage["name"]){
	document.getElementById("NameScreen").style.display = "flex"
}else{
	name = localStorage["name"]
	console.log("Name:" + name)
	startGameScreen()
}

function startGameScreen(){
	console.log("Name:" + name)
	document.getElementById("GameScreen").style.display = "flex"
	document.getElementById("NameScreen").style.display = "none"

	if (localStorage["points"]){
		points = localStorage["points"]
	}

	nameDisplay.textContent = name
	pointsDisplay.textContent = points
}



form.addEventListener('submit', function(event) {
	event.preventDefault(); // Prevent default form submission
	alert("test")
	console.log("FUNCTION")
	name = document.getElementById("name").value
	localStorage["name"] = name
	startGameScreen()
});