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

	$('.menu').click(function(){

		$('.list').toggleClass('active');

	})

});

$(window).on('scroll', function(){

	if($(window).scrollTop() && $(window).width() > 768){

		$('#navbar').removeClass('transparent');
		$('#navbar').addClass('black');


	}else{
		$('#navbar').removeClass('black');
		$('#navbar').addClass('transparent');
	}

});

function scrollToElem(elemId){

	$('html, body').animate({scrollTop: 
		($(elemId).offset().top - 90)}, 'slow');

}