$(document).ready(function() {

  function headRoom() {
    var header = new Headroom(document.querySelector("#header"), {
      tolerance: {
        up: 8,
        down: 5
      },
      offset: 120,
    });
    header.init();
  }
  headRoom();

  function googleMap() {
    $('#map_canvas1').addClass('scrolloff');
    $('#canvas1').on('click', function() {
      $('#map_canvas1').removeClass('scrolloff');
    });
    $("#map_canvas1").mouseleave(function() {
      $('#map_canvas1').addClass('scrolloff');
    });
  }
  googleMap();

  function scrollSmooth() {
    $('.smoothScroll').click(function() {
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
      }, 2000);
      return false;
    });
    $('.bouncing-arrow').click(function() {
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
      }, 2000);
      return false;
    });
  }
  // scrollSmooth();
  
  function viewPortHeight() {
    var getWindowWidth = $(window).width();
    var getWindowHeight = $(window).height();
    var videoInfoHeight = $(".video-info").height();
    var bannerInfoHeight = $(".banner-info").height();
    var videoHeight = $(".video-part").height();
    var balHeight = getWindowHeight - bannerInfoHeight;
    var balHeightVideo = videoHeight - videoInfoHeight;
    var topPosition = videoHeight - getWindowHeight;
    var balHeightSm = getWindowHeight - videoInfoHeight;
    if (getWindowWidth > 991) {
      var paddingBetweenVideo = (balHeightVideo) / 2;
      var paddingBetween = (balHeight - 120) / 2;
      $(".video-bg").css({
        "height": getWindowHeight - 120
      });
      $(".banner").css({
        "height": getWindowHeight - 120
      });
      $(".banner-info").css({
        "padding-top": paddingBetween,
        "padding-bottom": paddingBetween
      });
      $(".video-info").css({
        "padding-top": paddingBetweenVideo,
        "padding-bottom": paddingBetweenVideo
      });
      $(".about-video").css({
        "height": "auto"
      });
    } else if (getWindowWidth > 581) {
      var paddingBetweenVideo = (balHeightSm - 105) / 2;
      var paddingBetween = (balHeight - 105) / 2;
      $(".about-video").css({
        "height": getWindowHeight - 105
      });
      $(".video-bg").css({
        "height": getWindowHeight - 105
      });
      $(".banner").css({
        "height": getWindowHeight - 105
      });
      $(".banner-info").css({
        "padding-top": paddingBetween,
        "padding-bottom": paddingBetween
      });
      $(".video-info").css({
        "padding-top": paddingBetweenVideo,
        "padding-bottom": paddingBetweenVideo
      });
    } else {
      var paddingBetweenVideo = (balHeightSm - 105) / 2;
      var paddingBetween = (balHeight - 87) / 2;
      $(".about-video").css({
        "height": getWindowHeight - 87
      });
      $(".video-bg").css({
        "height": getWindowHeight - 87
      });
      $(".banner").css({
        "height": getWindowHeight - 87
      });
      $(".banner-info").css({
        "padding-top": paddingBetween,
        "padding-bottom": paddingBetween
      });
      $(".video-info").css({
        "padding-top": paddingBetweenVideo,
        "padding-bottom": paddingBetweenVideo
      });
    }
  }
  viewPortHeight();

  function iDangerous() {
    var getWindowWidth = $(window).width();
    var getWindowHeight = $(window).height();
    if (getWindowWidth > 580) {
      var swiper = new Swiper('.swiper-container', {
        slidesPerView: 5,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 20,
        simulateTouch: false
      });
    } else if (getWindowWidth > 480) {
      var swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 20,
        simulateTouch: false
      });
    } else {
      var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 20,
        simulateTouch: false
      });
    }
  }
  iDangerous();

  function iDangerousTwo() {
    var swiper = new Swiper('.swiper-container-two', {
      slidesPerView: 2,
      nextButton: '.swiper-button-next-two',
      prevButton: '.swiper-button-prev-two',
      spaceBetween: 20,
      simulateTouch: false
    });
  }
  iDangerousTwo();

  function iDangerousTestimonial() {
    var swiper = new Swiper('.swiper-container-testimonial', {
      pagination: '.swiper-pagination',
      nextButton: '.swiper-button-next-testimonial',
      prevButton: '.swiper-button-prev-testimonial',
      slidesPerView: 1,
      simulateTouch: false,
      paginationClickable: true,
      spaceBetween: 30,
      loop: true
    });
  }
  iDangerousTestimonial();

  function textTyped() {
    $(".change-text").typed({
      strings: ["Audiences", "Branding", "User Experiences", "Sales", "Campaigns"],
      loop: true,
      backDelay: 2000,
      cursorChar: "",
      typeSpeed: 100
    });
  }
  textTyped();

  function matchHeight() {
    $('.parent').each(function() {
      $(this).find('.child').matchHeight({
        byRow: true,
      });
    });
  }
  matchHeight();

  function alterHeight() {
    var getWindowWidth = $(window).width();
    $(".alternative-section").each(function() {
      var getAlterHeight = $(this).height();
      var getId = $(this).attr("id");
      if (getWindowWidth > 991) {
        $("#" + getId + " .alternative-picture").css({
          "height": getAlterHeight
        });
      } else {
        $(".alternative-picture").css({
          "height": "280px"
        });
      }
    });
  }
  alterHeight();

  function serviceHeight() {
    var getWindowWidth = $(window).width();
    $(".service-section-row").each(function() {
      var getAlterHeight = $(this).height();
      var getId = $(this).attr("id");
      if (getWindowWidth > 991) {
        $("#" + getId + " .measure").css({
          "height": getAlterHeight
        });
      } else {
        $(".measure").css({
          "height": "auto"
        });
      }
    });
  }
  serviceHeight();

  function academyAffix() {
    console.log("academy fired");
    var stickyElement   = '.academy-img',   // the element you want to make sticky
  bottomElement   = '.strategy-pricing'; // the bottom element where you want the sticky element to stop (usually the footer)

// make sure the element exists on the page before trying to initalize
if($( stickyElement ).length){
  $( stickyElement ).each(function(){

    // let's save some messy code in clean variables
    // when should we start affixing? (the amount of pixels to the top from the element)
    var fromTop = $( this ).offset().top-50,
      // where is the bottom of the element?
      fromBottom = $( document ).height()-($( this ).offset().top + $( this ).outerHeight()),
      // where should we stop? (the amount of pixels from the top where the bottom element is)
      // also add the outer height mismatch to the height of the element to account for padding and borders
      stopOn = $( document ).height()-( $( bottomElement ).offset().top)+($( this ).outerHeight() - $( this ).height());

    // if the element doesn't need to get sticky, then skip it so it won't mess up your layout
    if( (fromBottom-stopOn) > 200 ){
      // let's put a sticky width on the element and assign it to the top
      $( this ).css('width', $( this ).width()).css('top', 0).css('position', '');
      // assign the affix to the element
      $( this ).affix({
        offset: {
          // make it stick where the top pixel of the element is
          top: fromTop - 0,
          // make it stop where the top pixel of the bottom element is
          bottom: stopOn
        }
      // when the affix get's called then make sure the position is the default (fixed) and it's at the top
    }).on('affix.bs.affix', function(){ $( this ).css('top', '50px').css('position', ''); });
    }
    // trigger the scroll event so it always activates
    $( window ).trigger('scroll');
  });
}

  }
  academyAffix();


  function strategyAffix() {


    var stickyElement   = '.strategy-img',   // the element you want to make sticky
  bottomElement   = '.execution-pricing'; // the bottom element where you want the sticky element to stop (usually the footer)

// make sure the element exists on the page before trying to initalize
if($( stickyElement ).length){
  $( stickyElement ).each(function(){

    // let's save some messy code in clean variables
    // when should we start affixing? (the amount of pixels to the top from the element)
    var fromTop = $( this ).offset().top-50,
      // where is the bottom of the element?
      fromBottom = $( document ).height()-($( this ).offset().top + $( this ).outerHeight()),
      // where should we stop? (the amount of pixels from the top where the bottom element is)
      // also add the outer height mismatch to the height of the element to account for padding and borders
      stopOn = $( document ).height()-( $( bottomElement ).offset().top)+($( this ).outerHeight() - $( this ).height());

    // if the element doesn't need to get sticky, then skip it so it won't mess up your layout
    if( (fromBottom-stopOn) > 200 ){
      // let's put a sticky width on the element and assign it to the top
      $( this ).css('width', $( this ).width()).css('top', 0).css('position', '');
      // assign the affix to the element
      $( this ).affix({
        offset: {
          // make it stick where the top pixel of the element is
          top: fromTop - 0,
          // make it stop where the top pixel of the bottom element is
          bottom: stopOn
        }
      // when the affix get's called then make sure the position is the default (fixed) and it's at the top
    }).on('affix.bs.affix', function(){ $( this ).css('top', '50px').css('position', ''); });
    }
    // trigger the scroll event so it always activates
    $( window ).trigger('scroll');
  });
}

  }
  strategyAffix();


  function randomImage() {
    function randOrd() {
      return (Math.round(Math.random()) - 0.5);
    }
    var klasses = ['social-bg-1', 'social-bg-2', 'social-bg-3', 'social-bg-4'];
    klasses.sort(randOrd);
    $('#social').each(function(i, val) {
      $(this).addClass(klasses[i]);
    });
  }
  randomImage();

  // resize
  $(window).resize(function() {
    alterHeight();
    serviceHeight();
    viewPortHeight();
    iDangerous();
    iDangerousTwo();
    strategyAffix();
      academyAffix();
  });
});
