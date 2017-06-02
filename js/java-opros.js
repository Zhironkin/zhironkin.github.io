jQuery('document').ready(function(){
	var input = document.querySelector('#inp-color')
	var footer = document.querySelector('footer')
	var divcol = document.querySelector('body')

	input.addEventListener('change', function() {
	footer.style.setProperty('--footer-color', input.value)
	divcol.style.setProperty('--footer-color', input.value)
	$('body').css('background', input.value)
	})

	$('.div_light').click(function(){
		$('body').css('background', '#E9EAE6')
	})

	$('.div_gray').click(function(){
		$('body').css('background', '#808080')
	})

	$('.div_dark').click(function(){
		$('body').css('background', '#4D4D4D')
	})

	$('.getCol').click(function(){
		$('body').css('background', input.value)
	})


	//кнопка
	$(window).scroll(function() {
	if($(this).scrollTop() != 0) {
		$('#toTop').fadeIn();
	} else {
		$('#toTop').fadeOut();
	}
	});
		
	
	var flag = false;
	$(".form-opros").slideToggle({duration:0});
	$("#getdown").click(function(){
        $(".form-opros").slideToggle({duration:800});
        $('.geta').css('color','#FFC242')
        
        //$(this).toggleClass("active");
    });
	
	
	$('#getdown').hover(function(){
		$('.geta').css('color','#1EBE71')
	})
	

	var downForm = document.querySelector('#getdown')
	footer.style.setProperty('color', input.value)
	
	



	/*$("#div-opros").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });*/


	 /*$(".getColor").find("div").hover(function() {
            $(this).toggleClass("color");
        }, function() {
            $(this).toggleClass("color");
        });*/

    /*$(document).ready(function(){
	    $('.div_light').click(function(){
	        if(this.style.backgroundColor)
	          	this.style.backgroundColor = "";
	        else
		        $('.div_light').css('background', 'white');
		    	$('body').css('background', 'white');
		        $('.div_light').removeClass();
	    })
	});

	$(document).ready(function(){
	    $('.div_gray').click(function(){
	        if(this.style.backgroundColor)
	          	this.style.backgroundColor = "";
	        else
	        	$('.div_light').css('background', '#ccc');
		        $('body').css('background', '#ccc');
		        $('.div_light').removeClass();
	    })
	});

	$(document).ready(function(){
	    $('.div_dark').click(function(){
	        if(this.style.backgroundColor)
	          	this.style.backgroundColor = "";
	        else
		        $('body').css('background', 'rgba(0,0,0,0.7)');
		    	$('.div_dark').css('background', 'rgba(0,0,0,0.7)');
		        $('.div_dark').removeClass();
	    })
	});*/


	/*var elem = document.getElementById("body");
      div_light.onclick = function () {
        if(this.style.backgroundColor)
          this.style.backgroundColor = "";
        else
           this.style.backgroundColor = "blue";
      }*/

	/*document.body.style.backgroundColor = prompt('background color?', 'green');*/
})