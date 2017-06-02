jQuery('document').ready(function(){
	
    
    
    


    /*var cbpAnimatedHeader = (function() {

    var docElem = document.documentElement,
        header = document.querySelector( '#nav' ),
        didScroll = false,
       // height = showWidth("paragraph", $("#cont").height()),
        changeHeaderOn = $("#cont").innerHeight();
        
    function init() {
        window.addEventListener( 'scroll', function( event ) {
            if( !didScroll ) {
                didScroll = true;
                setTimeout( scrollPage, 0 );
            }
        }, false );
    }
    function scrollPage() {
        var sy = scrollY();
        if ( sy >= changeHeaderOn ) {
            
            $('#nav').css('background-color', '#0465C3')
        }
        else {
            
            $('#nav').css('background-color', '#23C74F')
        }
        
        didScroll = false;
    }
    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }

    init();

})();*/

    
    
    $('.header').scroolly([
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
                        
                        element.css('background-position', 'center '+$.scroolly.getTransitionFloatValue(0, 65, progress)+'%');
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
    $('#cont2 h2').scroolly([
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
                        'text-shadow': '0 0 30px #1d1616',
//                        'bottom': '60px',
                        'transform': 'translateY(1000px)',
                        'opacity': '.0'
                    }
                }
            ], $('#cont2'));

    $('#cont3>h2').scroolly([
                {
                    from: 'con-top',
                    to: 'con-bottom = top',
                    cssFrom:{
                        'text-shadow': '0 0 0px #1d1616',
//                        'bottom': '100px',
                        'transform': 'translateY(0px)',
                        'opacity': '.9'
                    },
                    cssTo:{
                        'text-shadow': '0 0 30px #1d1616',
//                        'bottom': '60px',
                        'transform': 'translateY(600px)',
                        'opacity': '.0'
                    }
                }
            ], $('#cont3'));

    $('.header h2').scroolly([
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
                        'text-shadow': '0 0 30px #1d1616',
//                        'bottom': '60px',
                        'transform': 'translateY(100px)',
                        'opacity': '.0'
                    }
                }
            ], $('.header'));

    
    $('#nav').scroolly([
                {
                    to: 'con-top',
                    css: {
                        
                        background: '#0465C3'
                    }
                },
                {
                    from: 'con-top',
                    css: {
                        
                        background: '#1d1616'
                        
                    }
                }
            ], $('#cont3'));
	 $('#nav').scroolly([
                {
                    to: 'con-top',
                    css: {
                        position: 'fixed',
                        top: '',
                        background: '#23C74F'
                        
                    }
                },
                {
                    from: 'con-top',
                    css: {
                        position: 'fixed',
                        top: '0',
                        background: '#0465C3'
                        
                        
                    }
                }
            ], $('#cont2'));

     $('.to-top').click(function(){
        $('html, body').animate({scrollTop: 0}, 1500);
    })

})