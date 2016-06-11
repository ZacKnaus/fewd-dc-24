var lighttoggle = 'off'

function switchlights () {
	if (lighttoggle == 'off') {
		jQuery('body').addClass('dark');
		lighttoggle = 'on';
	} else {
		jQuery('body').removeClass('dark');
		lighttoggle = 'off';
	}
}

jQuery('#light_switch').click(switchlights);