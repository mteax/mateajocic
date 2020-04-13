$(function () {
            var headerElem = $('header');
            var logo = $('#logo');
            var navMenu = $('#nav-menu');

            // SLIDER ZA USLUGE
           $('#usluge-slider').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                prevArrow: '<a href="#" class="slick-arrow slick-prev">Nazad</a>',
                nextArrow: '<a href="#" class="slick-arrow slick-next">Više</a>'
           });
           
           // STILIZOVANJE HEADERA, KADA JE NA VRHU SIVE JE BOJE, KADA SKROLUJEM - BELE
           $(document).scroll(() => {
               let scrollTop = $(document).scrollTop();

               if (scrollTop > 0) {
                   navMenu.addClass('is-sticky');
                   logo.css('color', '#000');
                   headerElem.css('background', '#fff');
               } else {
                   navMenu.removeClass('is-sticky');
                   logo.css('color', '#fff');
                   headerElem.css('background', 'transparent');
               }
           });

           $(document).trigger('scroll');
        });