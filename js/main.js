(function ($) {
    "use strict";
    /*===================stcky menu===================*/
            function stickyMenu(){
                $(window).on('scroll', function(){
                    var x = $(this).scrollTop();

                    if(x > 100){
                        $('.mainnav').addClass('isActive');
                    }else{
                        $('.mainnav').removeClass('isActive');
                    }
                });
            }
            stickyMenu();
            /*=========================SCROLLSSPY START=================*/
             $('body').scrollspy({ target: '.navbar-ex1-collapse' });

/*======================Home ResponsiveSlider===========*/

        $(".header-bg-slider").responsiveSlides({
                speed: 1000,
                timeout:5000,
            });       

            $('.header-image').owlCarousel({
                loop: true,
                items: 1,
                autoplay: true,
                autoplayTimeout: 4000,
                smartSpeed: 500,
                center: true,
            });

    /*-- =============Gallery slider start here=======*/
    $('.gallery').owlCarousel({
        loop: true,
                margin: 10,
                responsiveClass: true,
                dots: true,
                autoplay: true,
                autoplayTimeout: 4000,
                smartSpeed: 500,
                center: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 3
                    },
                    1000: {
                        items: 5
                    }
                }

    });   
    /*==============================review slider===========================*/

            $('.reviewer-block').owlCarousel({
                loop: true,
                items: 1,
                autoplay: true,
                autoplayTimeout: 4000,
                smartSpeed: 500,
                center: true,
            });
            
  
       

              
     
     jQuery(window).on('load', function(){ 
       

           /* ====================contact ================*/
           $('textarea,input').on('blur',function(){
            $(this).next().css("opacity","0");    
            });

            $('textarea,input').on('focus',function(){
             $(this).next().css("opacity","1");  

            });




        /*============preloader ==================*/
            $('.loader').fadeOut(1000);

        
    });


}(jQuery)); 