console.log("SCRIPT")
const form = document.getElementById('nameForm');
const nameDisplay = document.getElementById('player');
const pointsDisplay = document.getElementById('points');
var points = 0
var name = ""


const pts1 = ['scupltures (statuettes 3pts)', 'someone feeding birds', 'Mood Fabrics shopping bag', 'birds in art', 'spiders', 'witches', 'vampires', 'ants', 'Harry Potter (Mauraders 3pts)', 'murals (wing murals 3pts)', 'someone running in non-athletic clothing', 'someone in facepaint', 'pretty cakes (classically frosted 3pts)', 'obvious siblings', 'doll houses', 'miniatures', 'pink curtains', 'dandelions', 'an adult eating a sweet treat alone', 'leaves lit only by artificial light', 'pigeons', 'American Girl Doll', 'historical plaques', 'spiral staircases', 'Taylor Swift', 'Chappell Roan', 'Lost', 'stained glass', 'rainbow sprinkles', 'dogs (in clothes 3pts)', 'the number 3', 'the name Annie', 'Powerpuff Girls', 'cemeteries', 'someone making art', 'someone carrying something out of place or cumbersome', 'bench with a plaque (must read)', 'anything birthday related', 'psychics', 'Wizard of Oz', 'art on the ground', 'libraries', 'museums']
const pts5 = ['pet a dog', "learn a dog's name", 'spot a location from a movie or tv show (not a planned stop)', 'Oaf look-alike', 'someone pretending to be a statue']
const list1 = document.getElementById("pt1")
const list5 = document.getElementById("pt5")


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

	writeList()
}



form.addEventListener('submit', function(event) {
	event.preventDefault(); // Prevent default form submission
	name = document.getElementById("name").value
	localStorage["name"] = name
	startGameScreen()
});



function addListItem(item, list){
	const li = document.createElement('li');
  	li.textContent = item;
  	list.appendChild(li);
}

function writeList(){
	pts1.forEach(function(thing) {
  		addListItem(thing, list1)
	})
	pts5.forEach(function(thing) {
  		addListItem(thing, list5)
	})

}

