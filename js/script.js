$(function() {
              $('.menuspham a').bind('click', function(event) {
                var $anchor = $(this);
                
//                if you want to use one of the easing effects:
                $('html, body').stop().animate({
                    scrollLeft: $($anchor.attr('href')).offset().left
                }, 1500,'easeInOutExpo');
                
                $('html, body').stop().animate({
                  scrollLeft: $($anchor.attr('href')).offset().left
                }, 800);
                event.preventDefault();
              });
            });


$(function() {
              $('.menuspham2 a').bind('click', function(event) {
                var $anchor = $(this);
                
                
                $('html, body').stop().animate({
                    scrollLeft: $($anchor.attr('href')).offset().left
                }, 1500,'easeInOutExpo');
                 
                $('html, body').stop().animate({
                  scrollLeft: $($anchor.attr('href')).offset().left
                }, 800);
                event.preventDefault();
              });
            });


$(function() {
              $('.menuspham3 a').bind('click', function(event) {
                var $anchor = $(this);
                
              
                $('html, body').stop().animate({
                    scrollLeft: $($anchor.attr('href')).offset().left
                }, 1500,'easeInOutExpo');
                 
                $('html, body').stop().animate({
                  scrollLeft: $($anchor.attr('href')).offset().left
                }, 800);
                event.preventDefault();
              });
            });