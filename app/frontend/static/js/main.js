

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
