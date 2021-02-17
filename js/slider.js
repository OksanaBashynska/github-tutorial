 $('.cd-testimonials-wrapper').flexslider({ selector: ".cd-testimonials > li",
  animation: "slide", controlNav: false, slideshow: false, smoothHeight: true,
  start: function(){ $('.cd-testimonials').children('li').css({ 'opacity': 1,
  'position': 'relative' }); } });
  $('.cd-testimonials-all-wrapper').children('ul').masonry({ itemSelector:
  '.cd-testimonials-item' });