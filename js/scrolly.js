jQuery('document').ready(function(){
	
    $('.to-top').click(function(){
        $('html, body').animate({scrollTop: 0}, 1500);
    })
    $('.to-phot').click(function(){
        $('html, body').animate({scrollTop: 1100}, 1500);
    })
    $('.to-about').click(function(){
        $('html, body').animate({scrollTop: 2000}, 1500);
    })
    $('.to-inter').click(function(){
        $('html, body').animate({scrollTop: 2900}, 1500);
    })

	 $('#header').scroolly([
                {
                    to: 'con-top',
                    css: {
                        position: 'absolute',
                        bottom: ''
                        
                    }
                },
                {
                    from: 'con-top',
                    css: {
                        position: 'fixed',
                        top: '10'
                        
                        
                    }
                }
            ], $('#content'));

     $('#content').scroolly([
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
                        
                        element.css('background-position', 'center '+$.scroolly.getTransitionFloatValue(0, 80, progress)+'%');
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
     $('#content h2').scroolly([
                {
                    from: 'con-top',
                    to: 'con-bottom = top',
                    cssFrom:{
                        'text-shadow': '0 0 0px #1d1616',
//                        'bottom': '100px',
                        'transform': 'translateY(0px)',
                        'opacity': '1'
                    },
                    cssTo:{
                        
//                        'bottom': '60px',
                        'transform': 'translateY(800px)',
                        'opacity': '.1'
                    }
                }
            ], $('#content'));

    /*$('.content2>h2').scroolly([
                {
                    from: 'doc-top',
                    to: 'con-bottom = bottom',
                    cssFrom:{
                        'text-shadow': '0 0 0px #1d1616',
//                        'bottom': '100px',
                        'transform': 'translateY(250px)',
                        'opacity': '.0'
                    },
                    cssTo:{
                        
//                        'bottom': '60px',
                        'transform': 'translateY(0px)',
                        'opacity': '1'
                    }
                }
            ], $('.content2'));*/


     $('.div_light').click(function(){
        $('.content2').css('background', '#E9EAE6')
    })

    $('.div_gray').click(function(){
        $('.content2').css('background', '#808080')
    })

    $('.div_dark').click(function(){
        $('.content2').css('background', '#4D4D4D')
    })


    $('.content2>h2').scroolly([
                {
//                    from: 'top',
//                    to: 'doc-bottom'
                    cssFrom:{
                        
                    },
                    cssTo:{
                      
                    }
                },
                {
                    from: 'doc-top',
                    to: 'doc-top 16%',
                    cssFrom:{
                        'transform': 'translateX(0px)'
                    },
                    cssTo:{
                        'transform': 'translateX(400px)'
                    }
                },
                {
                    from: 'doc-top 16%',
                    to: 'doc-top 33%',
                    cssFrom:{
                        'transform': 'translateX(400px)'
                    },
                    cssTo:{
                        'transform': 'translateX(800px)'
                    }
                },
                {
                    from: 'doc-top 33%',
                    to: 'doc-top 50%',
                    cssFrom:{
                        'transform': 'translateX(800px)'
                    },
                    cssTo:{
                        'transform': 'translateX(1200px)'
                    }
                },
                {
                    from: 'doc-top 50%',
                    to: 'doc-top 66%',
                    cssFrom:{
                        'transform': 'translateX(1200px)'
                    },
                    cssTo:{
                        'transform': 'translateX(1600px)'
                    }
                },
                {
                    from: 'doc-top 66%',
                    to: 'doc-top 84%',
                    cssFrom:{
                        'transform': 'translateX(1600px)'
                    },
                    cssTo:{
                        'transform': 'translateX(1600px)'
                    }
                },
                {
                    from: 'doc-top 84%',
                    to: 'doc-bottom',
                    cssFrom:{
                        'transform': 'translateX(1600px)'
                    },
                    cssTo:{
                        'transform': 'translateX(1600px)'
                    }
                }
            ], $('body'));

    $('.content3>h2').scroolly([
                {
//                    from: 'top',
//                    to: 'doc-bottom'
                    cssFrom:{
                        
                    },
                    cssTo:{
                      
                    }
                },
                
                {
                    from: 'doc-top 16%',
                    to: 'doc-top 33%',
                    cssFrom:{
                        'transform': 'translateX(-400px)'
                    },
                    cssTo:{
                        'transform': 'translateX(-800px)'
                    }
                },
                {
                    from: 'doc-top 33%',
                    to: 'doc-top 50%',
                    cssFrom:{
                        'transform': 'translateX(-800px)'
                    },
                    cssTo:{
                        'transform': 'translateX(-1200px)'
                    }
                },
                {
                    from: 'doc-top 50%',
                    to: 'doc-top 66%',
                    cssFrom:{
                        'transform': 'translateX(-1200px)'
                    },
                    cssTo:{
                        'transform': 'translateX(-1600px)'
                    }
                },
                {
                    from: 'doc-top 66%',
                    to: 'doc-top 84%',
                    cssFrom:{
                        'transform': 'translateX(-1600px)'
                    },
                    cssTo:{
                        'transform': 'translateX(-1600px)'
                    }
                },
                {
                    from: 'doc-top 84%',
                    to: 'doc-bottom',
                    cssFrom:{
                        'transform': 'translateX(-1600px)'
                    },
                    cssTo:{
                        'transform': 'translateX(-1600px)'
                    }
                }
            ], $('body'));

    $('.content4>h2').scroolly([
                {
                    from: 'doc-top',
                    to: 'con-bottom = bottom',
                    cssFrom:{
                        'text-shadow': '0 0 0px #1d1616',
//                        'bottom': '100px',
                        'transform': 'translateY(250px)',
                        'opacity': '0'
                    },
                    cssTo:{
                        
//                        'bottom': '60px',
                        'transform': 'translateY(0px)',
                        'opacity': '1'
                    }
                }
            ], $('.content4'));

    var input = document.querySelector('#inp-color')
    var footer = document.querySelector('footer')
    var divcol = document.querySelector('body')

    input.addEventListener('change', function() {
    footer.style.setProperty('--footer-color', input.value)
    divcol.style.setProperty('--footer-color', input.value)
    $('body').css('background', input.value)
    })
    
    var flag = false;
    $(".form-opros").slideToggle({duration:0});
    $("#getdown").click(function(){
        $(".form-opros").slideToggle({duration:800})
        
        
        //$(this).toggleClass("active");
    });
    
    
    
    
})
