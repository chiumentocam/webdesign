$(document).ready(function() {
	var i = 1;
	$('#container').click(function(e) {
		var selector = 'circle' + i;
		console.log(selector);
		var idname = '#' + selector;
		console.log(idname);
		var xpos = e.pageX - 50;
		var ypos = e.pageY - 50;
		$('body').append('<div id="' + selector + '" class="white"></div>');
		$(idname).css('top', ypos);
		$(idname).css('left', xpos);
		console.log('x = ' + xpos + 'y = ' + ypos);
		i++;
	});
});