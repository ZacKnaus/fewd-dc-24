jQuery(document).ready(function(){

var currentState = 0;
    
//-------- When purple box is clicked, set all paragraphs to be purple

    jQuery("#purpleBox").on("click", function(){
    	jQuery("p").css("color", "purple");
    	//console.log('loading purple!');
    })

//--------- When the blue box is clicked set the hipster paragraph to have white text with a blue background.  All other paragraphs should be black

    jQuery("#blueBox").on("click", function(){
    	jQuery("p").css("color", "black");
    	//jQuery("p.hipsterSpeak").css("color", "white").css("background-color", "blue");
    	jQuery("p.hipsterSpeak").toggleClass("hipsterSpeak2")
    	//console.log('loading blue!');
    })

//---------- When the red box is clicked set the list items toggle red background and white text on and off

    jQuery("#redBox").on("click", function(){
    	if (currentState == 0){
    		currentState = 1;
    		//console.log("setting currentState to 1")
    		jQuery("li").css("background-color", "red").css("color", "white");
    	} else {
    		currentState = 0;
    		//console.log("setting currentState to 0")
    		jQuery("li").css("background-color", "white").css("color", "black");
    	}
    })

//----------- When any of the boxes are clicked, add a 6px solid black bottom border

    jQuery(".boxes").on("click", function(){
    	jQuery(".boxes").css("border-bottom", "6px solid black")
    	//jQuery(".boxes").toggleClass("bottomborderclass");
    })
    
});