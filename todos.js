 //check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("done");
});

//click on X to deleat todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(400, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if (event.which === 13){
		var todoText = ($(this).val());
		$(this).val(""); //clear input

		//create a new li and append to ul
		$("ul").append("<li><span>X </span>"+todoText+"</li>");
	}

});