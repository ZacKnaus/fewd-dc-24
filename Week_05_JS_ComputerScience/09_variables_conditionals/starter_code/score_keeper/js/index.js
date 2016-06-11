jQuery(document).ready(function(){
	var total = 0;
	console.log('start')

	jQuery('#zero').click(function(zero){total = 0; jQuery('#result').text(total);});
	jQuery('#add5').click(function(add5){total = total + 5; jQuery('#result').text(total);});
	jQuery('#add10').click(function(add10){total = total + 10; jQuery('#result').text(total);});
	jQuery('#sub1').click(function(sub1){total = total - 1; jQuery('#result').text(total);});
});