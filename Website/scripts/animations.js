$(document).ready(function() {
    $("#topBtn").click(function(){
		$('html,body').animate({ scrollTop: 0 }, 'slow');
		return false;
	})
});

function toTopAnimation(){

	alert("animating...");
	$('html,body').animate({ scrollTop: 0 }, 'slow');
	return false;

}