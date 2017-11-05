var sliderImages = ["fix1.png", "fix2.png","portrait4.png"];
var current = 0

function welcome(){
	// $(".navbar-text").css("display", "none");
	// // $(".#exclamation").css("display", "none");
	// setTimeout(function(){ $(".navbar-text").css("display", "block"); }, 2000);
	// // setTimeout(function(){ $(".#exclamation").css("display", "block") }, 2010);
	$(".navbar-text").css("transform", "scale(0)");
	setTimeout(function(){ $(".navbar-text").css("transform", "scale(1)");}, 2000);
}
function reset(){
	$("#slider").css("display", "none");
}

function start(){
	$("#slider img").attr("src", sliderImages[0]);
	$("#slider").css("display", "block");
}

//left arrow
function goLeft() {
	reset();
	$("#slider img").attr("src", sliderImages[current-1]);
	$("#slider").css("display", "block");
	current --;
}

//right arrow
function goRight() {
	reset();
	$("#slider img").attr("src", sliderImages[current+1]);
	$("#slider").css("display", "block");
	current ++;
}

// welcome();
reset();
start();
$("#arrow-left").on("click", function(event){
	if(current === 0){
		current = sliderImages.length;
	}
	event.stopPropagation();
	goLeft();
	console.log(current);
})

$("#arrow-right").on("click", function(event){
	if(current === sliderImages.length - 1){
		current = -1;
	}
	event.stopPropagation();
	goRight();
	console.log(current);
})
