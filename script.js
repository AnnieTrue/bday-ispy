console.log("SCRIPT")
const form = document.getElementById('nameForm');
const nameDisplay = document.getElementById('player');
const pointsDisplay = document.getElementById('points');
var total_points = 0
var name = ""


const things1 = ['scupltures<br><span id="whisper">(statuettes 3pts)</span>', 'someone feeding birds', 'birds in art', 'spiders', 'witches', 'vampires', 'ants', 'Harry Potter<br><span id="whisper">(Marauders 3pts)</span>', 'murals<br><span id="whisper">(wing murals 3pts)</span>', 'Mood Fabrics shopping bag', 'someone running in non-athletic clothing', 'someone in facepaint', 'pretty cakes<br><span id="whisper">(classically frosted 3pts)</span>', 'obvious siblings', 'miniatures<br><span id="whisper">(dollhouses 3pts)</span>', 'pink curtains', 'dandelions', 'an adult eating a sweet treat alone', 'leaves lit only by artificial light', 'pigeons', 'American Girl Doll', 'historical plaques', 'gargoyles', 'spiral staircases', 'Taylor Swift related', 'Chappell Roan related', 'rainbow sprinkles', 'dogs<br><span id="whisper">(in clothes 3pts)</span>', 'the number 3', 'the name Annie', 'cemeteries', 'someone making art', 'someone carrying something out of place or cumbersome', 'bench with a plaque<br><span id="whisper">(must read)</span>', 'anything birthday related', 'psychics', 'art on the ground', 'libraries', 'museums']
const things5 = ['pet a dog', "learn a dog's name", 'a location from a movie or tv show<br><span id="whisper">(not a planned stop)</span>', 'Oaf look-alike', 'someone pretending to be a statue']
var myPts1 = []
var myPts5 = []
const ul1 = document.getElementById("pt1")
const ul5 = document.getElementById("pt5")

var data = {'things': [things1, things5], 'points':[myPts1, myPts5], 'ul':[ul1, ul5], 'value':[1,5]}
const ONE = 0
const FIVE = 1
const LEVELS = [ONE, FIVE]

//check if name is in local storage
if (!localStorage["name"]){
	document.getElementById("NameScreen").style.display = "flex"

}else{
	//get name
	name = localStorage["name"]
	console.log("Name:" + name)
	startGameScreen()
}

//check if points are in local storage
if (!localStorage["myPts"+data['value'][ONE]] || !localStorage["myPts"+data['value'][FIVE]]){
	//start all points at 0
	LEVELS.forEach(function(lvl){
		for (let i = 0; i < data['things'][lvl].length; i ++){
			data['points'][lvl].push(0)
		}
		//save points
		localStorage["myPts"+data['value'][lvl]] = JSON.stringify(data['points'][lvl])
		console.log("NEW TO STORAGE myPts"+data['value'][lvl]+": " + JSON.stringify(data['points'][lvl]))
	})
	
}else{
	//get points 
	LEVELS.forEach(function(lvl){
		//read in the points from storage
		data['points'][lvl] = JSON.parse(localStorage["myPts"+data['value'][lvl]])
		console.log("FROM STORAGE"+data['value'][lvl]+": " + data['points'][lvl])

		//display the points at the right thing and sum up for the total
		for (var i = 0; i < data['points'][lvl].length; i++){
			var count = data['points'][lvl][i]
			// console.log("COUNT:" + count)
			// console.log("looking for id:" + i+"count"+data['value'][lvl])
			// console.log("FOUND: " + document.getElementById(i+"count"+data['value'][lvl]))
			document.getElementById(i+"count"+data['value'][lvl]).textContent = count
			total_points = total_points + count
		}
		
	})
  	pointsDisplay.textContent = total_points
	pointsDisplay.textContent = total_points
}



function startGameScreen(){
	console.log("Name:" + name)
	document.getElementById("GameScreen").style.display = "flex"
	document.getElementById("NameScreen").style.display = "none"

	nameDisplay.textContent = name
	pointsDisplay.textContent = total_points

	writeList()
}



form.addEventListener('submit', function(event) {
	event.preventDefault(); // Prevent default form submission
	name = document.getElementById("name").value
	localStorage["name"] = name
	startGameScreen()
});



//(text, 1 or 5)
function addListItem(item, lvl){
	//create li, and buttons
	const li = document.createElement('li')
	const plus = document.createElement('button')
	plus.textContent = "+"
	const minus = document.createElement('button')
	minus.textContent = "-"
	const index = data['things'][lvl].indexOf(item) // used to get the text from contentList, the current count from pts lists, and the li id

	const text = document.createElement('div')

	//the count for each item has id: index_number+"count"+point_value
	text.innerHTML += "\n <span id='"+index+"count"+data['value'][lvl]+"' class='count'>"+data['points'][lvl][index]+"</span> <div class='findMe'>"+item+"</div> "
	
	//put buttons and text in li
	li.appendChild(minus)
	li.appendChild(text)
	li.appendChild(plus)


  	//put li in ul
  	data['ul'][lvl].appendChild(li)


  	//button functionality
  	minus.addEventListener('click', function() {
		// alert("MINUS")
		data['points'][lvl][index] = data['points'][lvl][index] - data['value'][lvl]
  		document.getElementById(index+"count"+data['value'][lvl]).textContent = data['points'][lvl][index]
  		// console.log(pointsList)
  		total_points = total_points - data['value'][lvl]
  		pointsDisplay.textContent = total_points

  		// console.log("- "+data['points'][lvl])

  		//save points
  		localStorage["myPts"+data['value'][lvl]] = JSON.stringify(data['points'][lvl])
	})
 
	plus.addEventListener('click', function() {
		data['points'][lvl][index] = data['points'][lvl][index] + data['value'][lvl]
  		document.getElementById(index+"count"+data['value'][lvl]).textContent = data['points'][lvl][index]
  		total_points = total_points + data['value'][lvl]
  		pointsDisplay.textContent = total_points

  		// console.log("+ "+data['points'][lvl])

  		//save points
  		localStorage["myPts"+data['value'][lvl]] = JSON.stringify(data['points'][lvl])
	}) 

 
}

function writeList(){
	LEVELS.forEach(function(lvl){
		data['things'][lvl].forEach(function(thing) {
			//console.log("add list item" + thing + lvl)
  			addListItem(thing, lvl)
		})
	})
}

//hopefully stop double click zoom (didnt work)
// document.addEventListener("dblclick", function(event) {
//   event.preventDefault();
// }, { passive: false });
