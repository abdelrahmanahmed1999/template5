/*global $,alert ,console*/

$(function(){
    "use strict";

    //trigger niceScroll
    $('html').niceScroll({
        cursorcolor:"#ff4008",
        cursorborder: '1px solid #ff4008',    
    });

    //function to adjust header height

    $(window).on("load",function(){
        "use strict";
        $(".header").height($(this).height());
    });

    $(window).on("resize",function(){
        "use strict";
        $(".header").height($(this).height());
    });

    //function to adjust menu link

    $(".links .dropdown li").on("click",function(){
        "use strict";
        $("html,body").animate({
            scrollTop: $("."+$(this).attr("data-value")).offset().top+50
        },1000);
    });

    //function to scroll chevron

    $('.header .arrow i').on("click",function(){
        "use strict";
        $("html,body").animate({
            scrollTop: $(".feature").offset().top
        },1000);
    });

    //function to button hire us

    $('.header ul li:first-of-type').on("click",function(){
        "use strict";
        $("html,body").animate({
            scrollTop: $(".our-team").offset().top+50
        },1000);
    });

    //function to show our work

    $('.our-work button:first-of-type').on("click",function(){
        "use strict";
        $('.our-work .hidden').fadeIn(500);
        $(this).hide();
        function showanother(){
            "use strict";
            $(".our-work button:last-of-type").show();
        };
        setTimeout(showanother,200);
    });

    $('.our-work button:last-of-type').on("click",function(){
        "use strict";
        $('.our-work .hidden').hide();
        $(this).hide();
        function showanother(){
            "use strict";
            $(".our-work button:first-of-type").show();
        };
        setTimeout(showanother,200);
    });

    //function to check carousel or hide
    
    var chevronRight= $(".testimonial .fa-chevron-right"),
        chevronLeft=$(".testimonial .fa-chevron-left");
    function checkcarousel(){
        "use strict";
        ($(".testimonial .active").is(":last-child")) ? chevronRight.fadeOut() : chevronRight.fadeIn(); 
        ($(".testimonial .active").is(":first-child")) ? chevronLeft.fadeOut() : chevronLeft.fadeIn(); 
    };
    checkcarousel();

    //function to slider carousel

    $(".testimonial i").on("click",function(){
        "use strict";
        if($(this).hasClass("fa-chevron-right")){
            $(".testimonial .active").fadeOut(function(){
                $(this).removeClass("active").next().addClass("active").fadeIn();
                checkcarousel();
            });
        }
        else{
            $(".testimonial .active").fadeOut(function(){
                $(this).removeClass("active").prev().addClass("active").fadeIn();
                checkcarousel();
            });        
        }
    });
    
});