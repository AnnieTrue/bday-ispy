console.log("SCRIPT")
const form = document.getElementById('nameForm');
const nameDisplay = document.getElementById('player');
const pointsDisplay = document.getElementById('points');
var points = 0
var name = ""


const things1 = ['scupltures<br><span id="whisper">(statuettes 3pts)</span>', 'someone feeding birds', 'Mood Fabrics shopping bag', 'birds in art', 'spiders', 'witches', 'vampires', 'ants', 'Harry Potter<br><span id="whisper">(Mauraders 3pts)</span>', 'murals<br><span id="whisper">(wing murals 3pts)</span>', 'someone running in non-athletic clothing', 'someone in facepaint', 'pretty cakes<br><span id="whisper">(classically frosted 3pts)</span>', 'obvious siblings', 'miniatures', 'pink curtains', 'dandelions', 'an adult eating a sweet treat alone', 'leaves lit only by artificial light', 'pigeons', 'American Girl Doll', 'historical plaques', 'spiral staircases', 'Taylor Swift', 'Chappell Roan', 'Lost','rainbow sprinkles', 'dogs<br><span id="whisper">(in clothes 3pts)</span>', 'the number 3', 'the name Annie', 'Powerpuff Girls', 'cemeteries', 'someone making art', 'someone carrying something out of place or cumbersome', 'bench with a plaque<br><span id="whisper">(must read)</span>', 'anything birthday related', 'psychics', 'art on the ground', 'libraries', 'museums']
var myPts1 = []
const things5 = ['pet a dog', "learn a dog's name", 'a location from a movie or tv show<br><span id="whisper">(not a planned stop)</span>', 'Oaf look-alike', 'someone pretending to be a statue']
var myPts5 = []
const ul1 = document.getElementById("pt1")
const ul5 = document.getElementById("pt5")


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



//(text, ul, currentCounts, list of all the texts, 1 or 5)
function addListItem(item, list, pointsList, contentList, pointValue){
	//create li, and buttons
	const li = document.createElement('li')
	const plus = document.createElement('button')
	plus.textContent = "+"
	const minus = document.createElement('button')
	minus.textContent = "-"
	const index = contentList.indexOf(item) // used in both lists, to get the text from contentList, the current count from pointsList, and the li

	const text = document.createElement('div')


	// put buttons, count, text in list item
	// li.appendChild(minus)
	//the count for each item has id: index_number+"count"+point_value
	text.innerHTML += "\n <span id='"+index+"count"+pointValue+"' class='count'>"+pointsList[index]+"</span> <div class='findMe'>"+item+"</div> "
	
	li.appendChild(minus)
	li.appendChild(text)
	li.appendChild(plus)


  	//put li in ul
  	list.appendChild(li)


  	//button functionality
  	minus.addEventListener('click', function() {
		// alert("MINUS")
		pointsList[index] = pointsList[index] - pointValue
  		document.getElementById(index+"count"+pointValue).textContent = pointsList[index]
  		// console.log(pointsList)
  		points = points - pointValue
  		pointsDisplay.textContent = points
	})
 
	plus.addEventListener('click', function() {
		pointsList[index] = pointsList[index] + pointValue
  		document.getElementById(index+"count"+pointValue).textContent = pointsList[index]
  		console.log(pointsList)
  		points = points + pointValue
  		pointsDisplay.textContent = points
	}) 

 
}

function writeList(){
	things1.forEach(function(thing) {
		myPts1.push(0)
  		addListItem(thing, ul1, myPts1, things1, 1)
	})
	things5.forEach(function(thing) {
		myPts5.push(0)
  		addListItem(thing, ul5, myPts5, things5, 5)
	})

}

