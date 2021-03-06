/* nav-bar logo */
$(window).scroll(function() {
if ($(".navbar").offset().top > 50) {
    $('#custom-nav').addClass('affix');
    $(".navbar-fixed-top").addClass("top-nav-collapse");
    $('.navbar-brand img').attr('src','img/logo-black.jpg'); //change src
} else {
    $('#custom-nav').removeClass('affix');
    $(".navbar-fixed-top").removeClass("top-nav-collapse");
    $('.navbar-brand img').attr('src','img/logo-white.png')
}   
});


/* call owl carousel for tracks nav */
$(document).ready(function() {
             var owl = $('#tracks-nav');
              owl.owlCarousel({
                margin: 10,
                nav: true,
                loop: true,
                dots: false,
                navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fas fa-angle-right"></i>'],
                responsive: {
                  0: {
                    items: 1
                  },
                  600: {
                    items: 3
                  },
                  1000: {
                    items: 5
                  }
                }
              })
            });

/* call owl carousel for sponsor logos */
$(document).ready(function() {
             var owl = $('#sponsors');
              owl.owlCarousel({
                margin: 10,
                nav: false,
                loop: true,
                dots: false,
                autoplay: true,
                autoplayTimeout:5000,
                autoplayHoverPause:false,
                responsive: {
                  0: {
                    items: 1
                  },
                  600: {
                    items: 3
                  },
                  1000: {
                    items: 7
                  }
                }
              })
            });

/* remove active class on tracks nav */

$( '#tracks-nav li' ).on( 'click', function () {
  $( '#tracks-nav' ).find( 'li.active' ).removeClass( 'active' );
  $( this ).parent( 'li' ).addClass( 'active' );
});

/* add active class to active session */
 $('.session-content').click(function () {
   $( this ).parent().toggleClass( 'active-session' );
 });



