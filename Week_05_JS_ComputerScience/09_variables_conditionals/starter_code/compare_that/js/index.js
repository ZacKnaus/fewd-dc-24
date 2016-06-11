
jQuery(document).ready(function(){
	jQuery('#submit').click(function(compare) {
		v1 = Number(jQuery('#a').val());
		v2 = Number(jQuery('#b').val());

		if (v1 == v2) {
			jQuery('#comparison').text('==');
		} else if (v1 > v2) {
			jQuery('#comparison').text('>');
		} else if (v1 < v2) {
			jQuery('#comparison').text('<');
		} else{
			jQuery('#comparison').text('N/A');
		}
	});
});