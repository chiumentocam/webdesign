$(document).ready(function() {
	$('#number1').mouseleave(function() {
		$('#number1').css('color', 'black');
		$('#lead-1').toggleClass('pink');
	});
	$('#number2').click(function() {
		$('#number2').css('color', 'white');
		$('#lead-2').toggleClass('black');
	});
	$("#hide").click(function(){
		$("#number5").hide();
	});
  	$("#show").click(function(){
  		$("#number5").show();
  	});
  	$("#flip").click(function(){
    	$("#panel").slideToggle("slow");
	});
	$('#number3').mousedown(function() {
		$('#number3').css('color', 'orange');
		$('#number3').css('font-size', '100pt');
	});
});