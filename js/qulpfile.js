jQuery('document').ready(function(){
	
	$(".but").click(function(){

		var input = document.querySelector('.pas');
		var input2 = document.querySelector('.repas');


	if(input.value != input2.value){
		//alert("robit");
		$('.repas').css('border', '1px solid rgba(200,0,0,0.6)')
		$('#repas').css('opacity', '1');
	}
	else{
		//alert("ne-robit");
		$('.repas').css('border', '1px solid rgba(0,0,0,0.2)')
		$('#repas').css('opacity', '0');
	}

	})
	
	

	/*var gulp = require('gulp');
	var livereload = require('gulp-livereload');

	gulp.task('livereload', function(){
		gulp.src('./css/*.css');
	});

	gulp.task('default', function(){
		livereload.lisren();
		gulp.watch('./css/*.css', ['livereload']);
	});*/
});

