jQuery('document').ready(function(){

	$('.gonext a').click(function(){
        $('html, body').animate({scrollTop: 950}, 1500);
    })


	/*	ТОВАР №1	*/
	$('.cont-left-elk1')
		.mouseenter(function() {
			$('.elk1').addClass('cont-elk-fix')
			$('.cont-center-elk1').addClass('inner-cont-center-fix')
  			})
		.mouseleave(function() {	    
	  		});
	$('.elk1')
		.mouseenter(function() {		
  			})
		.mouseleave(function() {
	    	$('.elk1').removeClass('cont-elk-fix')
	    	$('.cont-center-elk1').removeClass('inner-cont-center-fix')
	  		});


	/*	ТОВАР №2	*/
	$('.cont-left-elk2')
		.mouseenter(function() {
			$('.elk2').addClass('cont-elk-fix')
			$('.cont-center-elk2').addClass('inner-cont-center-fix')
  			})
		.mouseleave(function() {	    
	  		});
	$('.elk2')
		.mouseenter(function() {		
  			})
		.mouseleave(function() {
	    	$('.elk2').removeClass('cont-elk-fix')
	    	$('.cont-center-elk2').removeClass('inner-cont-center-fix')
	  		});	
	  

	/*	ТОВАР №3	*/
	$('.cont-left-elk3')
		.mouseenter(function() {
			$('.elk3').addClass('cont-elk-fix')
			$('.cont-center-elk3').addClass('inner-cont-center-fix')
  			})
		.mouseleave(function() {	    
	  		});
	$('.elk3')
		.mouseenter(function() {		
  			})
		.mouseleave(function() {
	    	$('.elk3').removeClass('cont-elk-fix')
	    	$('.cont-center-elk3').removeClass('inner-cont-center-fix')
	  		});


	/*	ТОВАР №4	*/
	$('.cont-left-elk4')
		.mouseenter(function() {
			$('.elk4').addClass('cont-elk-fix')
			$('.cont-center-elk4').addClass('inner-cont-center-fix')
  			})
		.mouseleave(function() {	    
	  		});
	$('.elk4')
		.mouseenter(function() {		
  			})
		.mouseleave(function() {
	    	$('.elk4').removeClass('cont-elk-fix')
	    	$('.cont-center-elk4').removeClass('inner-cont-center-fix')
	  		});


	/*	ТОВАР №5	*/
	$('.cont-left-elk5')
		.mouseenter(function() {
			$('.elk5').addClass('cont-elk-fix')
			$('.cont-center-elk5').addClass('inner-cont-center-fix')
  			})
		.mouseleave(function() {	    
	  		});
	$('.elk5')
		.mouseenter(function() {		
  			})
		.mouseleave(function() {
	    	$('.elk5').removeClass('cont-elk-fix')
	    	$('.cont-center-elk5').removeClass('inner-cont-center-fix')
	  		});


	/*	ТОВАР №6	*/
	$('.cont-left-elk6')
		.mouseenter(function() {
			$('.elk6').addClass('cont-elk-fix')
			$('.cont-center-elk6').addClass('inner-cont-center-fix')
  			})
		.mouseleave(function() {	    
	  		});
	$('.elk6')
		.mouseenter(function() {		
  			})
		.mouseleave(function() {
	    	$('.elk6').removeClass('cont-elk-fix')
	    	$('.cont-center-elk6').removeClass('inner-cont-center-fix')
	  		});

	//*		ЦЕННИК		*//
	$('.src1').addClass('spanfix');
	$('.src2').addClass('spanfix');
	$('.src3').addClass('spanfix');
	$('.src4').addClass('spanfix');
	$('.src5').addClass('spanfix');
	$('.src6').addClass('spanfix');

	/*	№1	*/
	$('.st1c1').click(function(){
		$('.st1').html('1490p');
		$('.sr1').html('0,6м');
		$(this).addClass('spanfix');
		$('.st1c2').removeClass('spanfix');
		$('.st1c3').removeClass('spanfix');
		$('.st1c4').removeClass('spanfix');
	})
	$('.st1c2').click(function(){
		$('.st1').html('1990p');
		$('.sr1').html('0,8м');
		$(this).addClass('spanfix');
		$('.src1').removeClass('spanfix');		
		$('.st1c3').removeClass('spanfix');
		$('.st1c4').removeClass('spanfix');
	})
	$('.st1c3').click(function(){
		$('.st1').html('3500p');
		$('.sr1').html('1м');
		$(this).addClass('spanfix');
		$('.src1').removeClass('spanfix');
		$('.st1c2').removeClass('spanfix');
		$('.st1c4').removeClass('spanfix');
	})
	$('.st1c4').click(function(){
		$('.st1').html('4490p');
		$('.sr1').html('1,25м');
		$(this).addClass('spanfix');
		$('.src1').removeClass('spanfix');
		$('.st1c2').removeClass('spanfix');
		$('.st1c3').removeClass('spanfix');
	})
	
	/*	№2	*/
	$('.st2c1').click(function(){
		$('.st2').html('1990p');
		$('.sr2').html('0,8м');
		$(this).addClass('spanfix');
		$('.st2c2').removeClass('spanfix');
		$('.st2c3').removeClass('spanfix');
	})
	$('.st2c2').click(function(){
		$('.st2').html('3500p');
		$('.sr2').html('1м');
		$('.src2').removeClass('spanfix');
		$(this).addClass('spanfix');
		$('.st2c3').removeClass('spanfix');
	})

	/*	№3	*/
	$('.st3c1').click(function(){
		$('.st3').html('1990p');
		$('.sr3').html('0,6м');
		$(this).addClass('spanfix');
		$('.st3c2').removeClass('spanfix');
		$('.st3c3').removeClass('spanfix');
		$('.st3c4').removeClass('spanfix');
	})
	$('.st3c2').click(function(){
		$('.st3').html('2490p');
		$('.sr3').html('0,8м');
		$(this).addClass('spanfix');
		$('.src3').removeClass('spanfix');		
		$('.st3c3').removeClass('spanfix');
		$('.st3c4').removeClass('spanfix');
	})
	$('.st3c3').click(function(){
		$('.st3').html('3990p');
		$('.sr3').html('1м');
		$(this).addClass('spanfix');
		$('.src3').removeClass('spanfix');
		$('.st3c2').removeClass('spanfix');
		$('.st3c4').removeClass('spanfix');
	})
	$('.st3c4').click(function(){
		$('.st3').html('4990p');
		$('.sr3').html('1,25м');
		$(this).addClass('spanfix');
		$('.src3').removeClass('spanfix');
		$('.st3c2').removeClass('spanfix');
		$('.st3c3').removeClass('spanfix');
	})

	/* №4 */
	$('.st4c1').click(function(){
		$('.st4').html('2190p');
		$('.sr4').html('0,6м');
		$(this).addClass('spanfix');
		$('.st4c2').removeClass('spanfix');
		$('.st4c3').removeClass('spanfix');
		$('.st4c4').removeClass('spanfix');
	})
	$('.st4c2').click(function(){
		$('.st4').html('3500p');
		$('.sr4').html('0,8м');
		$(this).addClass('spanfix');
		$('.src4').removeClass('spanfix');		
		$('.st4c3').removeClass('spanfix');
		$('.st4c4').removeClass('spanfix');
	})
	$('.st4c3').click(function(){
		$('.st4').html('4990p');
		$('.sr4').html('1м');
		$(this).addClass('spanfix');
		$('.src4').removeClass('spanfix');
		$('.st4c2').removeClass('spanfix');
		$('.st4c4').removeClass('spanfix');
	})
	$('.st4c4').click(function(){
		$('.st4').html('6000p');
		$('.sr4').html('1,25м');
		$(this).addClass('spanfix');
		$('.src4').removeClass('spanfix');
		$('.st4c2').removeClass('spanfix');
		$('.st4c3').removeClass('spanfix');
	})

	/*	№5	*/
	$('.st5c1').click(function(){
		$('.st5').html('3500p');
		$('.sr5').html('0,8м');
		$(this).addClass('spanfix');
		$('.st5c2').removeClass('spanfix');
		$('.st5c3').removeClass('spanfix');
	})
	$('.st5c2').click(function(){
		$('.st5').html('4990p');
		$('.sr5').html('1м');
		$('.src5').removeClass('spanfix');
		$(this).addClass('spanfix');
		$('.st5c3').removeClass('spanfix');
	})


	//*		ZOOM	*//
	$('.el1').click(function() {
		$('.imz1').addClass('imgzoom-fix')
	})
	$('.el2').click(function() {
		$('.imz2').addClass('imgzoom-fix')
	})
	$('.el3').click(function() {
		$('.imz3').addClass('imgzoom-fix')
	})
	$('.el5').click(function() {
		$('.imz5').addClass('imgzoom-fix')
	})
	$('.el6').click(function() {
		$('.imz6').addClass('imgzoom-fix')
	})
	$('.el7').click(function() {
		$('.imz7').addClass('imgzoom-fix')
	})
	$('.exitimg').click(function() {
		$('.imgzoom').removeClass('imgzoom-fix')
	})
})

