// array of options
optionsList = ["NYC", "SF", "LA", "ATX", "SYD"]

// write a function that changes the background
function changeBackground(city) {
	//console.log('executing changeBackground with variable ' + city);
	if(city == 'NYC') { 
		//console.log('Running NYC...');
		jQuery('body').attr('class', '');
		jQuery('body').attr('class', 'nyc');
	} else if (city == 'SF') {
		//console.log('Running SF...');
		jQuery('body').attr('class', '');
		jQuery('body').attr('class', 'sf');
	} else if (city == 'LA') {
		//console.log('Running LA...');
		jQuery('body').attr('class', '');
		jQuery('body').attr('class', 'la');
	} else if (city == 'ATX') {
		//console.log('Running ATX...');
		jQuery('body').attr('class', '');
		jQuery('body').attr('class', 'austin');
	} else if (city == 'SYD') {
		//console.log('Running SYD...');
		jQuery('body').attr('class', '');
		jQuery('body').attr('class', 'sydney');
	} else {
		//console.log('Clearing background...');
		jQuery('body').attr('class', '');
	}
}


// bind that function
city = jQuery('#city-type').val();
//console.log('variable city = ' + city);
jQuery('#city-type').on('change', function(){
	city = jQuery('#city-type').val();
	//console.log('variable city = ' + city);
	changeBackground(city);
});
for (i=0; i<optionsList.length; i++) {
	//console.log('Adding ' + optionsList[i] + ' to the options list');
	jQuery('#city-type').append('<option>' + optionsList[i] + '</option>');
}
