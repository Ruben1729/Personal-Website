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

$(window).on('scroll', function(){

	if($(window).scrollTop()){

		$('nav').addClass('black');

	}else{
		$('nav').removeClass('black');
	}

});

function scrollToElem(elemId){

	$('html, body').animate({scrollTop: 
		($(elemId).offset().top - 90)}, 'slow');

}