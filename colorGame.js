//global values
var mode = 6;
var colors = generateRandomColors(mode);
var goal = randomPick();
var titleColor = document.getElementById("goal");
titleColor.textContent = goal;
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");


easyBtn.addEventListener("click", function(){
	mode=3;
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	colors = generateRandomColors(mode);
	goal = randomPick();
	titleColor.textContent = goal;
	for (var i=0; i<squares.length; i++){
		if (colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	mode=6;
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	colors = generateRandomColors(mode);
	goal = randomPick();
	titleColor.textContent = goal;
	for (var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});
reset.addEventListener("click", function(){
	//generate all new colors
	//pick a new random color from array
	//change colors of squares
	colors = generateRandomColors(mode);
	goal = randomPick();
	titleColor.textContent = goal;

	for (var i=0; i<squares.length; i++){
	//add initial colors to squares
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = ""
	reset.textContent = "New Colors";
});

function changeColors(color){
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}
function randomPick(){
	var pick = Math.floor(Math.random() * colors.length);
	return colors[pick];
}
function generateRandomColors(num){
	//make an array
	//make num random colors to array
	//return array
	var arr = [];
	for (var i=0; i< num; i++)	{
		var color = "";
		color = "rgb" +"(" + (Math.floor((Math.random() *255)+1)) + ", " +
				(Math.floor((Math.random() *255)+1)) + ", " +
				(Math.floor((Math.random() *255)+1)) + ")";
		arr.push(color);
	}
	return arr;
}
for (var i=0; i<squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color clicked
		var clickedColor = this.style.backgroundColor;

		//compare clicked color and goal color
		if(clickedColor === goal){
			changeColors(clickedColor);
			messageDisplay.textContent = "Correct!"
			h1.style.backgroundColor = clickedColor;
			reset.textContent = "Play Again?";
		}else{
			messageDisplay.textContent = "Try Again!";
			this.style.backgroundColor = "#232323";
		}
	});
}
