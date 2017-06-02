jQuery('document').ready(function(){

	
	

	var flag = true;
	$('.green').click(function(){
		if (flag == true){
			$('#header').css('background-color', '#23C74F')
			$('.content2, .content3, .content4').css('border-top', '100px solid #23C74F')
			$('.icon h2, .form a, .form span').css('color', '#23C74F')
			$('.green').toggleClass('green-clicked')
			$('.blue').removeClass('blue-clicked')
			$('.orange').removeClass('orange-clicked')
			$('.red').removeClass('red-clicked')
			flag = false;
		}
		else{
			$('#header').css('background-color', '#1d1616')
			$('.content2, .content3, .content4').css('border-top', '100px solid #1d1616')
			$('.icon h2, .form a, .form span').css('color', '#1d1616')
			$('.green').removeClass('green-clicked')

			flag = true;
		}
	})



	$('.blue').click(function(){

		if (flag == true){
			$('#header').css('background-color', '#0E76EC')
			$('.content2, .content3, .content4').css('border-top', '100px solid #0E76EC')
			$('.icon h2, .form a, .form span').css('color', '#0E76EC')
			$('.blue').toggleClass('blue-clicked')
			$('.green').removeClass('green-clicked')
			$('.orange').removeClass('orange-clicked')
			$('.red').removeClass('red-clicked')
			flag = false;
		}
		else{
			$('#header').css('background-color', '#1d1616')
			$('.content2, .content3, .content4').css('border-top', '100px solid #1d1616')
			$('.icon h2, .form a, .form span').css('color', '#1d1616')
			$('.blue').removeClass('blue-clicked')
			flag = true;
		}
	})



	$('.orange').click(function(){
		if (flag == true){
			$('#header').css('background-color', '#F9B32F ')
			$('.content2, .content3, .content4').css('border-top', '100px solid #F9B32F ')
			$('.icon h2, .form a, .form span').css('color', '#F9B32F ')
			$('.orange').toggleClass('orange-clicked')
			$('.green').removeClass('green-clicked')
			$('.blue').removeClass('blue-clicked')
			$('.red').removeClass('red-clicked')
			flag = false;
		}
		else{
			$('#header').css('background-color', '#1d1616')
			$('.content2, .content3, .content4').css('border-top', '100px solid #1d1616')
			$('.icon h2, .form a, .form span').css('color', '#1d1616')
			$('.orange').removeClass('orange-clicked')
			flag = true;
		}
	})



	$('.red').click(function(){
		if (flag == true){
			$('#header').css('background-color', '#C72723')
			$('.content2, .content3, .content4').css('border-top', '100px solid #C72723')
			$('.icon h2, .form a, .form span').css('color', '#C72723')
			$('.red').toggleClass('red-clicked')
			$('.green').removeClass('green-clicked')
			$('.orange').removeClass('orange-clicked')
			$('.blue').removeClass('blue-clicked')
			flag = false;
		}
		else{
			$('#header').css('background-color', '#1d1616')
			$('.content2, .content3, .content4').css('border-top', '100px solid #1d1616')
			$('.icon h2, .form a, .form span').css('color', '#1d1616')
			$('.red').removeClass('red-clicked')
			flag = true;
		}

	})

	//Вариант с добавлением классов
	/*$('.blue').on("click", function() {
    	$('.blue').toggleClass('blue-clicked')

    	//Возвращает цвет эллемента
    	if(this.style.backgroundColor)
          this.style.backgroundColor = ""
        else
           this.style.backgroundColor = "#0E76EC"
	})*/
	
})