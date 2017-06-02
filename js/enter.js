jQuery('document').ready(function(){

	$('.enter').click(function(){
		$('.form').css('display', 'table')
		$(".form").addClass("fixed")
	})
	$('.exit').click(function(){
		$('.form').css('display', 'none')
		$(".form").removeClass("fixed")
	})

})