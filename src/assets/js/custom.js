//window.$ = window.jQuery = require('jquery');
import $ from 'jquery';
import jQuery from 'jquery';
import bodyScrollLock from 'body-scroll-lock';
$.noConflict();

// jQuery(function () {
//     jQuery('.datepicker').datepicker();
// })

// Tooltip
// jQuery(function () {
//     jQuery('[data-toggle="tooltip"]').tooltip();
// })

jQuery('.slide-toggle').on('click', function(event){
    jQuery('.switcher').toggleClass('active');
});

//paste this code under head tag or in a seperate js file.
// Wait for window load
jQuery(window).on('load', function(){ 
    // Animate loader off screen
    jQuery('.se-pre-con').fadeOut("slow");
});


// // Fancy Box For Product Detail Page
// jQuery(document).ready(function() {
//     jQuery(".fancybox-button").fancybox({
//         openEffect  : 'none',
//         closeEffect : 'none',
//         prevEffect		: 'none',
//         nextEffect		: 'none',
//         closeBtn		: true,
//         margin      : [20, 60, 20, 60],
//         helpers		: {
//             title	: { type : 'inside' },
//             buttons	: {}
//         }
//     });
// });


jQuery(".swticher-rtl").click(function(){
    jQuery("body").toggleClass("bodyrtl");
    jQuery(".swticher-rtl").toggleClass("active");
    
});

jQuery(".swticher-boxed").click(function(){
    
    jQuery("html").toggleClass("boxed");
    jQuery(".swticher-boxed").toggleClass("active");
    
});


function notificationCart(){
    
    jQuery('#notificationCart').show();
    setTimeout(function(){
        jQuery('#notificationCart').hide('slow');
      }, 2000);
}
function notificationWishlist(){
    
    jQuery('#notificationWishlist').show();
    setTimeout(function(){
        jQuery('#notificationWishlist').hide('slow');
      }, 2000);
}
function notificationCompare(){
    
    jQuery('#notificationCompare').show();
    setTimeout(function(){
        jQuery('#notificationCompare').hide('slow');
      }, 2000);
}


// Color Scheme Change
jQuery(document).on("click","#switchColor a", function(){
    var cssValue = jQuery(this).attr("id");
    jQuery("#switchColor li").removeClass('active');
    jQuery(this).parent().addClass('active');
    
    if(cssValue == "default"){
        jQuery('link[rel=stylesheet][href="css/yellow.css"]').remove();
        jQuery('link[rel=stylesheet][href="css/blue.css"]').remove();
        jQuery('link[rel=stylesheet][href="css/green.css"]').remove();
        jQuery('link[rel=stylesheet][href="css/navy-blue.css"]').remove();
        jQuery('link[rel=stylesheet][href="css/red.css"]').remove();
        jQuery('link[rel=stylesheet][href="css/pink.css"]').remove();
    }
    else if(cssValue == "yellow"){
        jQuery('head').append('<link type="text/css" rel="stylesheet" href="css/yellow.css">');
        jQuery('link[rel=stylesheet][href="css/default.css"]').remove();
        jQuery('link[rel=stylesheet][href="css/blue.css"]').remove();
        jQuery('link[rel=stylesheet][href="css/green.css"]').remove();
        jQuery('link[rel=stylesheet][href="css/navy-blue.css"]').remove();
        jQuery('link[rel=stylesheet][href="css/red.css"]').remove();
        jQuery('link[rel=stylesheet][href="css/pink.css"]').remove();
    }
    else if(cssValue == "blue"){
        jQuery('head').append('<link type="text/css" rel="stylesheet" href="css/blue.css">');
        jQuery('link[rel=stylesheet][href="css/default.css"]').remove();
        jQuery('link[rel=stylesheet][href="css/yellow.css"]').remove();
        jQuery('link[rel=stylesheet][href="css/green.css"]').remove();
        jQuery('link[rel=stylesheet][href="css/navy-blue.css"]').remove();
        jQuery('link[rel=stylesheet][href="css/red.css"]').remove();
        jQuery('link[rel=stylesheet][href="css/pink.css"]').remove();
    }
    else if(cssValue == "green"){
        jQuery('head').append('<link type="text/css" rel="stylesheet" href="css/green.css">');
        jQuery('link[rel=stylesheet][href="css/default.css"]').remove();
        jQuery('link[rel=stylesheet][href="css/blue.css"]').remove();
        jQuery('link[rel=stylesheet][href="css/yellow.css"]').remove();
        jQuery('link[rel=stylesheet][href="css/navy-blue.css"]').remove();
        jQuery('link[rel=stylesheet][href="css/red.css"]').remove();
        jQuery('link[rel=stylesheet][href="css/pink.css"]').remove();
    }
    else if(cssValue == "navy-blue"){
        jQuery('head').append('<link type="text/css" rel="stylesheet" href="css/navy-blue.css">');
        jQuery('link[rel=stylesheet][href="css/default.css"]').remove();
        jQuery('link[rel=stylesheet][href="css/blue.css"]').remove();
        jQuery('link[rel=stylesheet][href="css/green.css"]').remove();
        jQuery('link[rel=stylesheet][href="css/yellow.css"]').remove();
        jQuery('link[rel=stylesheet][href="css/red.css"]').remove();
        jQuery('link[rel=stylesheet][href="css/pink.css"]').remove();
    }
    else if(cssValue == "red"){
        jQuery('head').append('<link type="text/css" rel="stylesheet" href="css/red.css">');
        jQuery('link[rel=stylesheet][href="css/default.css"]').remove();
        jQuery('link[rel=stylesheet][href="css/blue.css"]').remove();
        jQuery('link[rel=stylesheet][href="css/green.css"]').remove();
        jQuery('link[rel=stylesheet][href="css/navy-blue.css"]').remove();
        jQuery('link[rel=stylesheet][href="css/yellow.css"]').remove();
        jQuery('link[rel=stylesheet][href="css/pink.css"]').remove();
    }
    else if(cssValue == "pink"){
        jQuery('head').append('<link type="text/css" rel="stylesheet" href="css/pink.css">');
        jQuery('link[rel=stylesheet][href="css/default.css"]').remove();
        jQuery('link[rel=stylesheet][href="css/blue.css"]').remove();
        jQuery('link[rel=stylesheet][href="css/green.css"]').remove();
        jQuery('link[rel=stylesheet][href="css/navy-blue.css"]').remove();
        jQuery('link[rel=stylesheet][href="css/red.css"]').remove();
        jQuery('link[rel=stylesheet][href="css/yellow.css"]').remove();
    }
	return false;
});






//Display grid/list 3 Column
jQuery(document).ready(function () {

    jQuery('#list_4column').on('click', function(){	
        jQuery( '#swap .col-12' ).removeClass( 'griding' );
        jQuery( '#swap .col-12' ).removeClass( 'col-lg-3' );
        jQuery( '#swap .col-12' ).removeClass( 'col-md-4' );
        jQuery( '#swap .col-12' ).removeClass( 'col-sm-6' );
        jQuery( '#swap .col-12' ).addClass( 'listing' );
        jQuery( this ).addClass( 'active' );
        jQuery( '#grid' ).removeClass( 'active' );
    });
    jQuery('#grid_4column').on('click', function(){	
        jQuery( '#swap .col-12' ).removeClass( 'listing' );
        jQuery( '#swap .col-12' ).addClass( 'col-lg-3' );
        jQuery( '#swap .col-12' ).addClass( 'col-md-4' );
        jQuery( '#swap .col-12' ).addClass( 'col-sm-6' );
        
        jQuery( '#swap .col-12' ).addClass( 'griding' );
        jQuery( this ).addClass( 'active' );
        jQuery( '#list' ).removeClass( 'active' );
    });

    
});



//Display grid/list 3 Column
jQuery(document).ready(function () {

    jQuery('#list_3column').on('click', function(){	
        jQuery( '#swap .col-12' ).removeClass( 'griding' );
        jQuery( '#swap .col-12' ).removeClass( 'col-md-4' );
        jQuery( '#swap .col-12' ).removeClass( 'col-sm-6' );
        jQuery( '#swap .col-12' ).addClass( 'listing' );
        jQuery( this ).addClass( 'active' );
        jQuery( '#grid' ).removeClass( 'active' );
    });
    jQuery('#grid_3column').on('click', function(){	
        jQuery( '#swap .col-12' ).removeClass( 'listing' );
        jQuery( '#swap .col-12' ).addClass( 'col-md-4' );
        jQuery( '#swap .col-12' ).addClass( 'col-sm-6' );
        
        jQuery( '#swap .col-12' ).addClass( 'griding' );
        jQuery( this ).addClass( 'active' );
        jQuery( '#list' ).removeClass( 'active' );
    });

    
});

// Add To Cart Button Enable
jQuery(document).ready(function () {

    jQuery('.color-selection ul li a').on('click', function(){	
        jQuery('.color-selection ul li').removeClass( "active");
        jQuery(this).parent().addClass( "active");
    });
    jQuery('.size-selection ul li a').on('click', function(){	
        jQuery('.size-selection ul li').removeClass( "active");
        jQuery(this).parent().addClass( "active");
    }); 

});

jQuery('.cta').on('click', function(){	
    
    jQuery(this).removeClass( "active");

    jQuery(this).removeClass( "show");

    //jQuery(this).parents('.nav li a').eq(5).addClass( "active");
//jQuery(this).parents('.nav li a').addClass( "show");
});

jQuery('a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
   
    var hashValue = jQuery(e.target).attr('href');
    
    jQuery("#pills-shipping-tab").removeClass("active");
    jQuery("#pills-billing-tab").removeClass("active");
    jQuery("#pills-method-tab").removeClass("active");
    jQuery("#pills-order-tab").removeClass("active");
    jQuery(hashValue+"-tab").addClass("active");
    
   
    
  })

// jQuery(window).on('load',function(){
//     jQuery('#newsletterModal').modal('show');
// });

//sticky header

window.onscroll = function() {myFunction()};

var header = document.getElementById("stickyHeader");

function myFunction() {
  if (window.pageYOffset > 100) {
      
    header.classList.add("sticky-header");
  } else {
    header.classList.remove("sticky-header");
  }
}


// Flash Sale Counter
jQuery( document ).ready(function() {
    setInterval(function time(){
    var d = new Date();
      var days = 365 - d.getDay();
    var hours = 24 - d.getHours();
    var min = 60 - d.getMinutes();
    if((min + '').length == 1){
      min = '0' + min;
    }
    var sec = 60 - d.getSeconds();
    if((sec + '').length == 1){
          sec = '0' + sec;
    }
    jQuery('.countdown .days').html(days+"<small>Days</small>");
    jQuery('.countdown .hours').html(hours+"<small>Hour</small>");
    jQuery('.countdown .mintues').html(min+"<small>Min</small>");
    jQuery('.countdown .seconds').html(sec+"<small>Sec</small>");
  }, 1000); });

// Scroll to top

if (jQuery('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = jQuery(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                jQuery('#back-to-top').addClass('show');
            } else {
                jQuery('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    jQuery(window).on('scroll', function () {
        backToTop();
    });
    jQuery('#back-to-top').on('click', function (e) {
        e.preventDefault();
        jQuery('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}


// Mobile Menu
jQuery(document).ready(function () {
    const targetElement = document.getElementById("popup"); //only popup can scroll

    jQuery('.navigation-mobile-toggler').on('click', function () {
        
        jQuery('#navigation-mobile').toggleClass('navigation-active');
        jQuery('.mobile-overlay').addClass('active');

        //put this when popup opens, to stop body scrolling
        bodyScrollLock.disableBodyScroll(targetElement);
        jQuery('html').css('overflow', 'hidden');
        jQuery('body').css('overflow', 'hidden');
    });

    jQuery('.mobile-overlay').on('click', function () {
        jQuery('#navigation-mobile').removeClass('navigation-active');
        jQuery('.mobile-overlay').removeClass('active');

        //put this when close popup and show scrollbar in body
        bodyScrollLock.enableBodyScroll(targetElement);

        jQuery('html').css('overflow', 'auto');
        jQuery('body').css('overflow', 'auto');
    });
});


// Header 3 Searchbar
jQuery(document).ready(function(){
    jQuery('#dropdownSearch').on('click', function () {
        jQuery('#dropdown-searchbar').css('display', 'block');
    });

    jQuery('.close').on('click', function () {
        jQuery('#dropdown-searchbar').css('display', 'none');
    });
});


// Quantiy Counter

jQuery(document).ready(function(){
    var quantitiy=0;
    jQuery('.quantity-left-minus').click(function(e){
        
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt(jQuery('#quantity').val());
        
        // If is not undefined
            
        jQuery('#quantity').val(quantity + 1);

        // Increment
        
    });

    jQuery('.quantity-right-plus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt(jQuery('#quantity').val());
        
        // If is not undefined
        
        // Increment
        if(quantity>0){
            jQuery('#quantity').val(quantity - 1);
        }
    });
});


// Quantiy Counter Product
jQuery(document).ready(function(){
    var quantitiy=0;
    jQuery('.quantity-minus').click(function(e){
        
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        
       var p_id = jQuery(this).val();
        var quantity = parseInt(jQuery("#"+p_id).val());
        if (quantity != 0)
            jQuery("#"+p_id).val(quantity - 1);

        // Decrement
        
    });
    jQuery('.quantity-plus').click(function(e){
        
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        
        var p_id = jQuery(this).val();
        var quantity = parseInt(jQuery("#"+p_id).val());
        jQuery("#"+p_id).val(quantity + 1);

        // Increment
        
    });
});



 

//  // Wait for the DOM to be ready
//  jQuery(function() {

//     jQuery.validator.addMethod("valueNotEquals", function(value, element, arg){
//         return arg !== value;
//        }, "Value must not equal arg.");

//     // Initialize form validation on the general-form form.
//     // It has the name attribute "general-form"
//     jQuery("form[name='general-form']").validate({
//       // Specify validation rules

      

//       rules: {
//         // The key name on the left side is the name attribute
//         // of an input field. Validation rules are defined
//         // on the right side
//         fullname: "required",
//         firstname: "required",
//         lastname: "required",
//         address: "required",
        
//         SelectName: { valueNotEquals: "default" },

//         postcode: "required",

//         phone: "required",

//         email: {
//           required: true,
//           // Specify that email should be validated
//           // by the built-in "email" rule
//           email: true
//         },
//         password: {
//           required: true,
//           minlength: 5
//         }
//       },
//       // Specify validation error messages
//       messages: {
//         fullname: "Please enter your fullname",
//         firstname: "Please enter your firstname",
//         lastname: "Please enter your lastname",
//         address: "Please enter your complete address",

//         SelectName: { valueNotEquals: "Please select an Option!" },

//         postcode: "Please enter postal code",

//         phone: "Please enter your phone number",

//         password: {
//           required: "Please provide a password",
//           minlength: "Your password must be at least 5 characters long"
//         },
//         email: "Please enter a valid email address"
//       },
//       // Make sure the form is submitted to the destination defined
//       // in the "action" attribute of the form when valid
//       submitHandler: function(form) {
//         form.submit();
//       }
//     });
//   });

  // Wait for the DOM to be ready
//  jQuery(function() {

//     jQuery.validator.addMethod("valueNotEquals", function(value, element, arg){
//         return arg !== value;
//        }, "Value must not equal arg.");

//     // Initialize form validation on the login form.
//     // It has the name attribute "login"
//     jQuery("form[name='login']").validate({
//       // Specify validation rules

      

//       rules: {
//         // The key name on the left side is the name attribute
//         // of an input field. Validation rules are defined
//         // on the right side
        
//         email: {
//           required: true,
//           // Specify that email should be validated
//           // by the built-in "email" rule
//           email: true
//         },
//         password: {
//           required: true,
//           minlength: 5
//         }
//       },
//       // Specify validation error messages
//       messages: {
        
//         password: {
//           required: "Please provide a password",
//           minlength: "Your password must be at least 5 characters long"
//         },
//         email: "Please enter a valid email address"
//       },
//       // Make sure the form is submitted to the destination defined
//       // in the "action" attribute of the form when valid
//       submitHandler: function(form) {
//         form.submit();
//       }
//     });
//   });


  // Wait for the DOM to be ready
//  jQuery(function() {
//     // Initialize form validation on the contact form.
//     // It has the name attribute "contact"
//     jQuery("form[name='contact']").validate({
//       // Specify validation rules
//       rules: {
//         // The key name on the left side is the name attribute
//         // of an input field. Validation rules are defined
//         // on the right side
//         name: "required",
//         subject: "required",
//         email: {
//           required: true,
//           // Specify that email should be validated
//           // by the built-in "email" rule
//           email: true
//         },
//         msg: "required"
//       },
//       // Specify validation error messages
//       messages: {
//         name: "Please enter your name",
//         subject: "Please enter your subject",
//         email: "Please enter a valid email address",
//         msg: "Please enter your message",
//       },
//       // Make sure the form is submitted to the destination defined
//       // in the "action" attribute of the form when valid
//       submitHandler: function(form) {
//         jQuery.ajax({
//             url: "contact.php", 
//             type: "POST",             
//             data: jQuery(form).serialize(),
//             cache: false,             
//             processData: false,      
//             success: function(data) {
//                 jQuery("#alert-box").show();
//                 jQuery("#alert-msg").html(data);

                
//                 //setTimeout(function(){ jQuery("#alert-msg").show(); }, 2000);
                
                
//             }
//         });
        

//         return false;
//       }
//     });
//   });


// Product SLICK
// jQuery('.slider-for').slick({
//     slidesToShow: 1,
//     slidesToScroll:1,
//     arrows: false,
//     infinite: false,
//     draggable: false,
//     fade: true,
//     asNavFor: '.slider-nav'
// });
// jQuery('.slider-nav').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     asNavFor: '.slider-for',
//     centerMode: true,
//     centerPadding: '60px',
//     dots: false,
//     arrows: true,
//     focusOnSelect: true
// });


// Product vertical SLICK
// jQuery('.slider-for-vertical').slick({
//     slidesToShow: 1,
//     slidesToScroll:1,
//     arrows: false,
//     infinite: false,
//     draggable: false,
//     fade: true,
//     asNavFor: '.slider-nav-vertical'
// });
// jQuery('.slider-nav-vertical').slick({
//     dots: false,
//     arrows: true,
//     vertical: true,
//     asNavFor: '.slider-for-vertical',
//     slidesToShow: 3,
//     // centerMode: true,
//     slidesToScroll: 1,
//     verticalSwiping: true,
//     focusOnSelect: true
// });
  

// jQuery(function(){
//     // ZOOM
//     jQuery('.ex1').zoom();

// });

// var tpj=jQuery;		
// var revapi1077;
// tpj(document).ready(function() {
//     if(tpj("#rev_slider_1077_1").revolution == undefined){
//         revslider_showDoubleJqueryError("#rev_slider_1077_1");
//     }else{
//         revapi1077 = tpj("#rev_slider_1077_1").show().revolution({
//             sliderType:"standard",
//             jsFileLocation:"../revolution/js/",
//             //sliderLayout:"fullscreen",
//             dottedOverlay:"none",
//             delay:9000,
//             navigation: {
//                 keyboardNavigation:"off",
//                 keyboard_direction: "horizontal",
//                 mouseScrollNavigation:"off",
//                 mouseScrollReverse:"default",
//                 onHoverStop:"off",
//                 touch:{
//                     touchenabled:"on",
//                     swipe_threshold: 75,
//                     swipe_min_touches: 1,
//                     swipe_direction: "horizontal",
//                     drag_block_vertical: false
//                 }
//                 ,
//                 bullets: {
//                     enable:true,
//                     hide_onmobile:true,
//                     hide_under:960,
//                     style:"hermes",
//                     hide_onleave:false,
//                     direction:"horizontal",
//                     h_align:"center",
//                     v_align:"bottom",
//                     h_offset:0,
//                     v_offset:30,
//                     space:5,
//                     tmp:''
//                 }
//             },
//             responsiveLevels:[1240,1024,778,480],
//             visibilityLevels:[1240,1024,778,480],
//             gridwidth:[1280,1024,778,480],
//             gridheight:[482,380,380,240],
//             lazyType:"none",
//             parallax: {
//                 type:"mouse",
//                 origo:"slidercenter",
//                 speed:2000,
//                 levels:[2,3,4,5,6,7,12,16,10,50,46,47,48,49,50,55],
//                 type:"mouse",
//                 disable_onmobile:"on"
//             },
//             shadow:0,
//             spinner:"off",
//             stopLoop:"on",
//             stopAfterLoops:0,
//             stopAtSlide:0,
//             shuffle:"off",
//             autoHeight:"off",
//             fullScreenAutoWidth:"off",
//             fullScreenAlignForce:"off",
//             fullScreenOffsetContainer: "",
//             fullScreenOffset: "60px",
//             disableProgressBar:"on",
//             hideThumbsOnMobile:"off",
//             hideSliderAtLimit:0,
//             hideCaptionAtLimit:0,
//             hideAllCaptionAtLilmit:0,
//             debugMode:false,
//             fallbacks: {
//                 simplifyAll:"off",
//                 nextSlideOnWindowFocus:"off",
//                 disableFocusListener:false,
//             }
//         });
//         var newCall = new Object(),
//         cslide;

//         newCall.callback = function() { 
//         var proc = revapi1077.revgetparallaxproc(),
//         fade = 1+proc,
//         scale = 1+(Math.abs(proc)/10);

//        const punchgs= punchgs.TweenLite.set(revapi1077.find('.slotholder, .rs-background-video-layer'),{opacity:fade,scale:scale});		
//         }
//         newCall.inmodule = "parallax";
//         newCall.atposition = "start";

//         revapi1077.bind("revolution.slide.onloaded",function (e) {
//         revapi1077.revaddcallback(newCall);
//         });				
//     }
// });	/*ready*/



(function(jQuery){
    var tabCarousel = jQuery('.tab-carousel-js');
        if (tabCarousel.length) {
            tabCarousel.each(function(){
                var thisCarousel = jQuery(this),
                    item =  jQuery(this).data('item'),
                    itemmobile =  jQuery(this).data('itemmobile');
    
                
                thisCarousel.slick({
                    lazyLoad: 'progressive',
                    dots: true,
                    arrows: false,
                    infinite: true,
                    //rtl:true,
                    speed: 300,
                    slidesToShow: item || 4,
                    slidesToScroll: item || 4,
                    adaptiveHeight: true,
                        responsive: [{
                            breakpoint: 1025,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3
                            }
                        },
                        {
                            breakpoint: 791,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2
                            }
                        },
                    {
                        breakpoint: 650,
                        settings: {
                            slidesToShow: itemmobile || 1,
                            slidesToScroll: itemmobile || 1
                        }
                    }]
                });
            });
        };
    })(jQuery);
    
    (function(jQuery){
    var tabCarousel = jQuery('.product-carousel');
        if (tabCarousel.length) {
            tabCarousel.each(function(){
                var thisCarousel = jQuery(this),
                    item =  jQuery(this).data('item'),
                    itemmobile =  jQuery(this).data('itemmobile');
    
                
                thisCarousel.slick({
                    lazyLoad: 'progressive',
                    dots: false,
                    arrows: false,
                    infinite: true,
                    //rtl:true,
                    speed: 300,
                    slidesToShow: item || 4,
                    slidesToScroll: item || 4,
                    adaptiveHeight: true,
                        responsive: [{
                            breakpoint: 1025,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3
                            }
                        },
                        {
                            breakpoint: 791,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2
                            }
                        },
                    {
                        breakpoint: 650,
                        settings: {
                            slidesToShow: itemmobile || 2,
                            slidesToScroll: itemmobile || 1
                        }
                    }]
                });
            });
        };
    })(jQuery);    
    
    (function(jQuery){
        var tabCarousel = jQuery('.product-carousel2');
            if (tabCarousel.length) {
                tabCarousel.each(function(){
                    var thisCarousel = jQuery(this),
                        item =  jQuery(this).data('item'),
                        itemmobile =  jQuery(this).data('itemmobile');
        
                   
                    thisCarousel.slick({
                        lazyLoad: 'progressive',
                        dots: true,
                        arrows: false,
                        infinite: true,
                        //rtl:true,
                        speed: 300,
                        slidesToShow: item || 1,
                        slidesToScroll: item || 1,
                        adaptiveHeight: true,
                            responsive: [{
                                breakpoint: 1025,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                                }
                            },
                            {
                                breakpoint: 992,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2
                                }
                            },
                            {
                                breakpoint: 791,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2
                                }
                            },
                        {
                            breakpoint: 650,
                            settings: {
                                slidesToShow: itemmobile || 1,
                                slidesToScroll: itemmobile || 1
                            }
                        }]
                    });
                });
            };
        })(jQuery);         
            
    (function(jQuery){
    var tabCarouselContent = jQuery('#tabCarousel');
    
    jQuery('a[data-toggle="tab"]').length && jQuery('body').on('shown.bs.tab', 'a[data-toggle="tab"]', function (e){
        jQuery('.slick-slider').each(function() {
            jQuery(this).slick("getSlick").refresh();
        });
        
    });
    })(jQuery);
    
    
    // megadropdown
    
    (function(jQuery){
    var jsCarouselProducts = jQuery('.mega-dropdown-carousel-js');
    if (jsCarouselProducts.length) {
        jsCarouselProducts.each(function(){
            var slick = jQuery(this),
                    item =  jQuery(this).data('item'),
                    itemmobile =  jQuery(this).data('itemmobile');
    
            if(slick.item==2){
                slick.slick({
                    lazyLoad: 'progressive',
                    dots: false,
                    arrows: true,
                    infinite: true,
                    outline:false,
                    speed: 300,
                    slidesToShow: item,
                    slidesToScroll: item,
                    adaptiveHeight: true,
                        responsive: [{
                            breakpoint: 1240,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2
                            }
                        },
                        {
                            breakpoint: 1025,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2
                            }
                        },
                        {
                            breakpoint: 791,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }]
                });
            };
            slick.slick({
                lazyLoad: 'progressive',
                dots: false,
                arrows: true,
                
                infinite: true,
                speed: 300,
                slidesToShow: item || 2,
                slidesToScroll: item || 2,
                adaptiveHeight: true,
                    responsive: [{
                        breakpoint: 1025,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 791,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                {
                    breakpoint: 650,
                    settings: {
                        slidesToShow: itemmobile || 1,
                        slidesToScroll: itemmobile || 1
                    }
                }]
            });
        });
    };
    })(jQuery);
    
    
        // popular section
    
        (function(jQuery){
            var jsCarouselProducts = jQuery('.popular-carousel-js');
                if (jsCarouselProducts.length) {
                    jsCarouselProducts.each(function(){
                        var slick = jQuery(this),
                                item =  jQuery(this).data('item'),
                                itemmobile =  jQuery(this).data('itemmobile');
            
                        if(slick.item==2){
                            slick.slick({
                                lazyLoad: 'progressive',
                                dots: true,
                                arrows: false,
                                infinite: true,
                                outline:false,
                                speed: 300,
                                slidesToShow: item,
                                slidesToScroll: item,
                                adaptiveHeight: true,
                                    responsive: [{
                                        breakpoint: 1240,
                                        settings: {
                                            slidesToShow: 2,
                                            slidesToScroll: 2
                                        }
                                    },
                                    {
                                        breakpoint: 1025,
                                        settings: {
                                            slidesToShow: 2,
                                            slidesToScroll: 2
                                        }
                                    },
                                    {
                                        breakpoint: 791,
                                        settings: {
                                            slidesToShow: 1,
                                            slidesToScroll: 1
                                        }
                                    }]
                            });
                        };
                        slick.slick({
                            lazyLoad: 'progressive',
                            dots: true,
                            arrows: false,
                            infinite: true,
                            speed: 300,
                            slidesToShow: item || 2,
                            slidesToScroll: item || 2,
                            adaptiveHeight: true,
                                responsive: [{
                                    breakpoint: 1025,
                                    settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 2
                                    }
                                },
                                {
                                    breakpoint: 791,
                                    settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 2
                                    }
                                },
                            {
                                breakpoint: 650,
                                settings: {
                                    slidesToShow: itemmobile || 1,
                                    slidesToScroll: itemmobile || 1
                                }
                            }]
                        });
                    });
                };
            })(jQuery);
    
    
     
            (function(jQuery){
                var blogCarousel = jQuery('.blog-carousel-js');
                    if (blogCarousel.length) {
                        blogCarousel.each(function(){
                            var thisBlogCarousel = jQuery(this),
                                item =  jQuery(this).data('item'),
                                itemmobile =  jQuery(this).data('itemmobile');
                
                            
                            thisBlogCarousel.slick({
                                lazyLoad: 'progressive',
                                dots: true,
                                arrows: false,
                                infinite: true,
                                speed: 300,
                                slidesToShow: item || 3,
                                slidesToScroll: item || 3,
                                adaptiveHeight: true,
                                responsive: [{
                                    breakpoint: 1025,
                                    settings: {
                                        slidesToShow: 3,
                                        slidesToScroll: 3
                                    }
                                },
                                {
                                    breakpoint: 791,
                                    settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 2
                                    }
                                },
                                {
                                    breakpoint: 650,
                                    settings: {
                                        slidesToShow: itemmobile || 1,
                                        slidesToScroll: itemmobile || 1
                                    }
                                }]
                            });
                        });
                    };
                })(jQuery);
    
        
    
        (function(jQuery){
            var blogCarousel = jQuery('.pro-category-carousel-js-1');
                if (blogCarousel.length) {
                    blogCarousel.each(function(){
                        var thisBlogCarousel = jQuery(this),
                            item =  jQuery(this).data('item'),
                            itemmobile =  jQuery(this).data('itemmobile');
            
                        
                        thisBlogCarousel.slick({
                            lazyLoad: 'progressive',
                            dots: true,
                            arrows: false,
                            infinite: true,
                            speed: 300,
                            slidesToShow: item || 1,
                            slidesToScroll: item || 1,
                            adaptiveHeight: true,
                            responsive: [{
                                breakpoint: 1025,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                                }
                            },
                            {
                                breakpoint: 791,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                                }
                            },
                            {
                                breakpoint: 650,
                                settings: {
                                    slidesToShow: itemmobile || 1,
                                    slidesToScroll: itemmobile || 1
                                }
                            }]
                        });
                    });
                };
            })(jQuery);
    
            (function(jQuery){
                var blogCarousel = jQuery('.pro-category-carousel-js-2');
                    if (blogCarousel.length) {
                        blogCarousel.each(function(){
                            var thisBlogCarousel = jQuery(this),
                                item =  jQuery(this).data('item'),
                                itemmobile =  jQuery(this).data('itemmobile');
                
                            
                            thisBlogCarousel.slick({
                                lazyLoad: 'progressive',
                                dots: true,
                                arrows: false,
                                infinite: true,
                                speed: 300,
                                slidesToShow: item || 1,
                                slidesToScroll: item || 1,
                                adaptiveHeight: true,
                                responsive: [{
                                    breakpoint: 1025,
                                    settings: {
                                        slidesToShow: 1,
                                        slidesToScroll: 1
                                    }
                                },
                                {
                                    breakpoint: 791,
                                    settings: {
                                        slidesToShow: 1,
                                        slidesToScroll: 1
                                    }
                                },
                                {
                                    breakpoint: 650,
                                    settings: {
                                        slidesToShow: itemmobile || 1,
                                        slidesToScroll: itemmobile || 1
                                    }
                                }]
                            });
                        });
                    };
                })(jQuery);
    (function(jQuery){
                    var blogCarousel = jQuery('.pro-category-carousel-js-3');
                        if (blogCarousel.length) {
                            blogCarousel.each(function(){
                                var thisBlogCarousel = jQuery(this),
                                    item =  jQuery(this).data('item'),
                                    itemmobile =  jQuery(this).data('itemmobile');
                    
                                
                                thisBlogCarousel.slick({
                                    lazyLoad: 'progressive',
                                    dots: true,
                                    arrows: false,
                                    infinite: true,
                                    speed: 300,
                                    slidesToShow: item || 1,
                                    slidesToScroll: item || 1,
                                    adaptiveHeight: true,
                                    responsive: [{
                                        breakpoint: 1025,
                                        settings: {
                                            slidesToShow: 1,
                                            slidesToScroll: 1
                                        }
                                    },
                                    {
                                        breakpoint: 791,
                                        settings: {
                                            slidesToShow: 1,
                                            slidesToScroll: 1
                                        }
                                    },
                                    {
                                        breakpoint: 650,
                                        settings: {
                                            slidesToShow: itemmobile || 1,
                                            slidesToScroll: itemmobile || 1
                                        }
                                    }]
                                });
                            });
                        };
    })(jQuery);
    
        (function(jQuery){
            var tabCarousel = jQuery('.tab-category-carousel-js');
                if (tabCarousel.length) {
                    tabCarousel.each(function(){
    
                    var thisCarousel = jQuery(this),
                        item =  jQuery(this).data('item'),
                        itemmobile =  jQuery(this).data('itemmobile');
            
                        
                        thisCarousel.slick({
                            lazyLoad: 'progressive',
                            dots: true,
                            arrows: false,
                            infinite: true,
                            speed: 300,
                            slidesToShow: item || 4,
                            slidesToScroll: item || 4,
                            adaptiveHeight: true,
                                responsive: [{
                                        breakpoint: 1901,
                                        settings: {
                                            slidesToShow: 5,
                                            slidesToScroll: 5
                                        }
                                },
                                {
                                    breakpoint: 1501,
                                    settings: {
                                        slidesToShow: 4,
                                        slidesToScroll: 4
                                    }
                                },
                                {
                                    breakpoint: 1025,
                                    settings: {
                                        slidesToShow: 3,
                                        slidesToScroll: 3
                                    }
                                },
                                {
                                    breakpoint: 791,
                                    settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 2
                                    }
                                },
                                {
                                breakpoint: 650,
                                settings: {
                                    slidesToShow: itemmobile || 1,
                                    slidesToScroll: itemmobile || 1
                                }
                            }]
                        });
                    });
                };
            })(jQuery);
    
        (function(jQuery){
            var blogCarousel = jQuery('.testimonials-carousel-js');
                if (blogCarousel.length) {
                    blogCarousel.each(function(){
                        var thisBlogCarousel = jQuery(this),
                            item =  jQuery(this).data('item'),
                            itemmobile =  jQuery(this).data('itemmobile');
            
                        
                        thisBlogCarousel.slick({
                            autoplay: true,
                            autoplaySpeed: 5000,
                            fade: true,
                            lazyLoad: 'progressive',
                            dots: true,
                            arrows: false,
                            infinite: true,
                            speed: 300,
                            slidesToShow: item || 1,
                            slidesToScroll: item || 1,
                            adaptiveHeight: true,
                            responsive: [{
                                breakpoint: 1025,
                                settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 3
                                }
                            },
                            {
                                breakpoint: 791,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2
                                }
                            },
                            {
                                breakpoint: 650,
                                settings: {
                                    slidesToShow: itemmobile || 1,
                                    slidesToScroll: itemmobile || 1
                                }
                            }]
                        });
                    });
                };
            })(jQuery);
    
    
        (function(jQuery){
            var tabCarousel = jQuery('.brand-carousel-js');
                if (tabCarousel.length) {
                    tabCarousel.each(function(){
    
                    var thisCarousel = jQuery(this),
                        item =  jQuery(this).data('item'),
                        itemmobile =  jQuery(this).data('itemmobile');
            
                        
                        thisCarousel.slick({
                            lazyLoad: 'progressive',
                            dots: true,
                            arrows: false,
                            infinite: true,
                            speed: 300,
                            slidesToShow: item || 5,
                            slidesToScroll: item || 5,
                            adaptiveHeight: true,
                                responsive: [{
                                        breakpoint: 1901,
                                        settings: {
                                            slidesToShow: 6,
                                            slidesToScroll: 6
                                        }
                                },
                                {
                                    breakpoint: 1501,
                                    settings: {
                                        slidesToShow: 5,
                                        slidesToScroll: 5
                                    }
                                },
                                {
                                    breakpoint: 1025,
                                    settings: {
                                        slidesToShow: 4,
                                        slidesToScroll: 4
                                    }
                                },
                                {
                                    breakpoint: 791,
                                    settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 2
                                    }
                                },
                                {
                                breakpoint: 650,
                                settings: {
                                    slidesToShow: itemmobile || 1,
                                    slidesToScroll: itemmobile || 1
                                }
                            }]
                        });
                    });
                };
            })(jQuery);   
    
    
        (function(jQuery){
            var tabCarousel = jQuery('.aboutUs-carousel-js');
                if (tabCarousel.length) {
                    tabCarousel.each(function(){
                        var thisCarousel = jQuery(this),
                            item =  jQuery(this).data('item'),
                            itemmobile =  jQuery(this).data('itemmobile');
            
                        if(thisCarousel.item==5){
                            thisCarousel.slick({
                                lazyLoad: 'progressive',
                                dots: true,
                                arrows: false,
                                infinite: true,
                                speed: 300,
                                slidesToShow: item,
                                slidesToScroll: item,
                                adaptiveHeight: true,
                                    responsive: [{
                                        breakpoint: 1240,
                                        settings: {
                                            slidesToShow: 4,
                                            slidesToScroll: 4
                                        }
                                    },
                                    {
                                        breakpoint: 1025,
                                        settings: {
                                            slidesToShow: 3,
                                            slidesToScroll: 3
                                        }
                                    },
                                    {
                                        breakpoint: 791,
                                        settings: {
                                            slidesToShow: 2,
                                            slidesToScroll: 2
                                        }
                                    }]
                            });
                        };
                        thisCarousel.slick({
                            lazyLoad: 'progressive',
                            dots: true,
                            arrows: false,
                            infinite: true,
                            speed: 300,
                            slidesToShow: item || 4,
                            slidesToScroll: item || 4,
                            adaptiveHeight: true,
                                responsive: [{
                                    breakpoint: 1025,
                                    settings: {
                                        slidesToShow: 3,
                                        slidesToScroll: 3
                                    }
                                },
                                {
                                    breakpoint: 791,
                                    settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 2
                                    }
                                },
                            {
                                breakpoint: 650,
                                settings: {
                                    slidesToShow: itemmobile || 2,
                                    slidesToScroll: itemmobile || 1
                                }
                            }]
                        });
                    });
                };
            })(jQuery);

            