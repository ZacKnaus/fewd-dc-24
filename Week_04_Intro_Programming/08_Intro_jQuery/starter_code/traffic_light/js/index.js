//Implement the red light using jQuery. Don't forget to add the script tags.


// on a button click
	//clear the lights
jQuery(".button").on("click", function(){
	jQuery(".bulb").css("background-color", "black");
	// figure out which button was clicked... if this, do this other wise if that do that
})

jQuery("#stopButton").on("click", function(){
	jQuery("#stopLight").css("background-color","red");
})

jQuery("#slowButton").on("click", function(){
	jQuery("#slowLight").css("background-color","yellow");
})

jQuery("#goButton").on("click", function(){
	jQuery("#goLight").css("background-color","green");
})

	//turn on the appropriate light

	