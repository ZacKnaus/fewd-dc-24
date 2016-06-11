jQuery(document).ready(function(){     // wait for the document to load
	jQuery('#submit-btn').click(function(clicks){     // once the user clicks on the submit button, do this
		event.preventDefault();    // don't reload the page (default)
		var city = jQuery('#city-type').val().toLowerCase().trim();
		//console.log(city + ' variable saved');   // report the city to the console log
		if (city == 'nyc' || city == 'new york' || city == 'new york city') {
			//console.log(city + ' is active'); // report that the criteria was met to the console
			changebackground('images/nyc.jpg')   // call the changebacakground function with a parameter
		} else if (city == 'san francisco' || city == 'sf' || city == 'bay area') {
			//console.log(city + ' is active'); // report that the criteria was met to the console
			changebackground('images/sf.jpg')   // call the changebacakground function with a parameter
		} else if (city == 'los angeles' || city == 'la' || city == 'lax') {
			//console.log(city + ' is active'); // report that the criteria was met to the console
			changebackground('images/la.jpg')   // call the changebacakground function with a parameter
		} else if (city == 'austin' || city == 'atx') {
			//console.log(city + ' is active'); // report that the criteria was met to the console
			changebackground('images/austin.jpg')   // call the changebacakground function with a parameter
		} else if (city == 'sydney' || city == 'syd') {
			//console.log(city + ' is active'); // report that the criteria was met to the console
			changebackground('images/sydney.jpg')   // call the changebacakground function with a parameter
		} else {
			//console.log(city + ' is active'); // report that the criteria was met to the console
			changebackground('images/citipix_skyline.jpg')   // call the changebacakground function with a parameter
		}

	})
});

function changebackground(url){
	//console.log('changebackground called for ' + url)
	jQuery('body').css("background", "url("+ url + ") no-repeat center center fixed")
	jQuery('body').css("background-size", "100% auto")
}