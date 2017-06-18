jQuery('document').ready(function(){

	/*var flag = true;
	setInterval(function () {
		if(flag == true){
		    $('.cont1 .icon').css('transform', 'scale(1.1)')
		    $('.cont1 .icon, .icon h1').css('box-shadow', '0 0 20px white')
		    //$('.cont1 div').css('opacity', '.9')
		    flag = false;
		}
		else{
		    $('.cont1 .icon').css('transform', 'scale(1)')
		    $('.cont1 .icon, .icon h1').css('box-shadow', 'none')
		    //$('.cont1 div').css('opacity', '.8')
		    flag = true;
		}
	}, 1000)*/
	

	$('.to-next').click(function(){
        $('html, body').animate({scrollTop: 1000}, 2000);
    })
    $('.to-next2').click(function(){
        $('html, body').animate({scrollTop: 2000}, 3000);
    })

    $('#back').scroolly([
                {
//                    from: 'doc-top',
                    to: 'el-bottom = vp-top',
                    cssFrom: {
//                        '-border-radius': '0px'
//                        'background-position': 'center 0px'
//                        'opacity': '1'
                    },
                    cssTo: {
//                        '-border-radius': '400px'
//                        'background-position': 'center 40%'
//                        'opacity': '.1'
                    },
                    onScroll: function(element, offset, length){
                        var progress = offset / length;
                        
                        element.css('background-position', 'center '+$.scroolly.getTransitionFloatValue(0, 100, progress)+'%');
                    }
                },
                {
                    from: 'el-center = vp-top',
                    to: 'el-bottom = vp-top',
                    cssFrom: {
//                        'background-position': 'center 0px',
//                        'opacity': '1'
                    },
                    cssTo: {
//                        'background-position': 'center 200px',
//                        'opacity': '.1'
                    }
                }                
            ]);

	$('.galaxy-phone').scroolly([
                {
                    from: 'doc-top',
                    to: 'con-bottom = bottom',
                    cssFrom:{
                        //'text-shadow': '0 0 0px #1d1616',
//                        'bottom': '100px',
                        'transform': 'translateY(350px)'
                        //'opacity': '0'
                    },
                    cssTo:{
                        
//                        'bottom': '60px',
                        'transform': 'translateY(0px)'
                        //'opacity': '1'
                    }
                }
            ], $('.cont2'));
	$('.galaxy-s8').scroolly([
                {
                    from: 'doc-top',
                    to: 'con-bottom = bottom',
                    cssFrom:{
                        //'text-shadow': '0 0 0px #1d1616',
//                        'bottom': '100px',
                        'transform': 'translateY(850px)'
                        //'opacity': '0'
                    },
                    cssTo:{
                        
//                        'bottom': '60px',
                        'transform': 'translateY(0px)'
                        //'opacity': '1'
                    }
                }
            ], $('.cont3'));

})