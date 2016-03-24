// /**
//  * Main JS file for Casper behaviours
//  */
//
// (function(){
//             //console.log($('.parallax').length);
//             if($('.parallax').length != 0) {
//                 $('.parallax').waitForImages(true).done(function() {
//                     $(".se-pre-con").fadeOut("slow");// Loaded all images referenced in CSS.
//                     //console.log('???');
//                     // setTimeout(function(){
//                     //     TweenMax.to(".logo", 2, {'marginTop':'0px', 'opacity': 1, ease: Power4.easeOut});
//                     // }, 200);
//                 });
//             }
//             else{
//                 if($('.img').length != 0) {
//                     $('.img').waitForImages(true).done(function() {
//                         $(".se-pre-con").fadeOut("slow");// Loaded all images referenced in CSS.
//                         //console.log('!!!');
//                     });
//                 }
//                 else {
//                     $(window).on('load', function(){
//                         $(".se-pre-con").fadeOut("slow");// Loaded all images referenced in CSS.
//                     });
//                 }
//             }
//         })();
//
/* globals jQuery, document */
(function ($, undefined) {
    "use strict";

    var $document = $(document);

    $document.ready(function () {

        // var $postContent = $(".post-content");
        // $postContent.fitVids();
        //
        // $(".scroll-down").arctic_scroll();
        //
        // $(".menu-button, .nav-cover, .nav-close").on("click", function(e){
        //     e.preventDefault();
        //     $("body").toggleClass("nav-opened nav-closed");
        // });
        //
        // var range = 330;
        // // if($('.parallax').length != 0){
        // //   $(window).on('scroll', function() {
        // //     var st = $(this).scrollTop();
        // //       var offset = $('.parallax').offset().top;
        // //       var height = $('.parallax').outerHeight();
        // //       offset = offset + height / 1.1;
        // //       $('.parallax').css({
        // //         'opacity': (1 - ((st - offset + range) / (range)))
        // //       });
        // //   });
        // // };
            $("a[href='#header']").click(function() {
                // console.log("???");
                $("html, body").animate({ scrollTop: 0 }, 1000);
                return false;
            });
        // if($(window).width()>1200)
        //     $('.parallax').parallax("0%", 0.1);
        $('.angle-up').hover(function() {
            $(this).addClass('transition-moveup');
            //console.log("...");

        }, function() {
            $(this).removeClass('transition-moveup');
            //console.log("...!");
        });
    });
})(jQuery);
//     // Arctic Scroll by Paul Adam Davis
//     // https://github.com/PaulAdamDavis/Arctic-Scroll
//     $.fn.arctic_scroll = function (options) {
//
//         var defaults = {
//             elem: $(this),
//             speed: 500
//         },
//
//         allOptions = $.extend(defaults, options);
//
//         allOptions.elem.click(function (event) {
//             event.preventDefault();
//             var $this = $(this),
//                 $htmlBody = $('html, body'),
//                 offset = ($this.attr('data-offset')) ? $this.attr('data-offset') : false,
//                 position = ($this.attr('data-position')) ? $this.attr('data-position') : false,
//                 toMove;
//
//             if (offset) {
//                 toMove = parseInt(offset);
//                 $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top + toMove) }, allOptions.speed);
//             } else if (position) {
//                 toMove = parseInt(position);
//                 $htmlBody.stop(true, false).animate({scrollTop: toMove }, allOptions.speed);
//             } else {
//                 $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top) }, allOptions.speed);
//             }
//         });
//
//     };
// })(jQuery);
