'use strict';

var accordionJQuery = function() {
    $('#accordion-vanillajs h3').on('click',function(e) {
            e.preventDefault();
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
    })
};

accordionJQuery();