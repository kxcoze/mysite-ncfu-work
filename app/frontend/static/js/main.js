

// isotope
$(window).on('load', function() {
  $('.portfolio-filter ul li').on('click', function() {
    $('.portfolio-filter ul li').removeClass('active');
    $(this).addClass('active');

    var data = $(this).attr('data-filter');
    $workGrid.isotope({
      filter: data
    });
  });

  if (document.getElementById('portfolio')) {
    var $workGrid = $('.portfolio-grid').isotope({
      itemSelector: '.all',
      percentPosition: true,
      masonry: {
        columnWidth: '.all'
      }
    });
  }
});

// owl-carousel
$(document).ready(function(){
  $('.testi_slider').owlCarousel({
    loop: true,
    margin: 30,
    items: 2,
    autoplay: true,
    smartSpeed: 2500,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      991: {
        items: 2
      }
    }
  });
});


// a sliding
// $('a[href^="#"]').bind('click.smoothscroll',function (e) {
//   e.preventDefault();
//   var target = this.hash,
//   $target = $(target);
//   $('html, body').stop().animate({
//     'scrollTop': $target.offset().top - 50
//   }, 500, 'swing', function () {
//     window.location.hash = target;
//   });
// });

$(document).ready(function(){
   $('#navbarNav').on("click", "a", function (e) {
       e.preventDefault();
       var id  = $(this).attr('href');
       var delta = 75;
       if (id == '#skills') {
         delta = 175;
       }
       var top = $(id).offset().top - delta;
       $('body,html').animate({scrollTop: top}, 300);
   });
});
