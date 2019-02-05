$(document).ready(function() {
    $("#topBtn").click(function(){
		$('html,body').animate({ scrollTop: 0 }, 'slow');
		return false;
	});

    $(".aboutMeBtn").click(function (){scrollToElem("#aboutMe");});
    $(".portfolioBtn").click(function (){scrollToElem("#portfolio");});
    $(".contactBtn").click(function (){scrollToElem("#contact");});
    $(".homeBtn").click(function(){
		$('html,body').animate({ scrollTop: 0 }, 'slow');
		return false;
	});

});


function scrollToElem(elemId){

	$('html, body').animate({scrollTop: 
		($(elemId).offset().top)}, 'slow');

}