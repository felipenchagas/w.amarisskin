(function ($) {
  const wdtAdvancedThumbSliderWidgetHandler = function($scope, $) {

    const $thumb_slider_option = $scope.find('.wdt-advanced-thumb-carousel-holder');
    const $thumb_content_option = $thumb_slider_option.data('settings');
    const $swiperItem = $thumb_slider_option.find('.swiper');
    const $moduleclass = $swiperItem.data('wrapper-class');
    const $modulethumbId = $swiperItem.data('id');
    const $swiperThumbItem = $thumb_slider_option.find('.wdt-advanced-thumbnail-carousel');
    const $moduleThumbId = $swiperThumbItem.data('wrapper-advanced-thumb-class');
  
    const $slides_to_show	 	= ($thumb_content_option['slides_to_show'] !== undefined) ? parseInt($thumb_content_option['slides_to_show']) : 1;
    const $loop				  	  = ($thumb_content_option['loop'] !== undefined) ? ($thumb_content_option['loop'] == 'yes') : false;
    const $freemode				  = ($thumb_content_option['freemode'] !== undefined) ? ($thumb_content_option['freemode'] == 'yes') : false;
    const $slides_to_scroll = ($thumb_content_option['slides_to_scroll'] !== undefined) ? parseInt($thumb_content_option['slides_to_scroll']) : 1;
    const $arrows			  	  = ($thumb_content_option['arrows'] !== undefined) ? ($thumb_content_option['arrows'] == 'yes') : false;
    const $centered_slides	= ($thumb_content_option['centered_slides'] !== undefined) ? ($thumb_content_option['centered_slides'] == 'yes') : false;
    const $space_between	 	= ($thumb_content_option['space_between'] !== undefined) ? parseInt($thumb_content_option['space_between']) : 10;
  
    if($thumb_content_option === undefined) {
      return;
    }

    var swiperthumbnail = {
      initialSlide: 0,
      simulateTouch: true,
      // roundLengths: true,
      keyboardControl: true,
      paginationClickable: true,
      autoHeight: false,
      grabCursor: true,
      slideToClickedSlide: true,

      loop: $loop,
      spaceBetween: $space_between,
      slidesPerView: $slides_to_show,
      slidesPerGroup: $slides_to_scroll,
      freeMode: $freemode,
      watchSlidesProgress: true,
      centeredSlides: $centered_slides,
    }

    // Update breakpoints
    const $thumbresponsiveSettings = $thumb_content_option['responsive'];
    const $thumbresponsiveData = {};
    $.each($thumbresponsiveSettings, function (index, value) {
      $thumbresponsiveData[value.breakpoint] = {
        slidesPerView: value.toshow,
        slidesPerGroup: value.toscroll
      };
    });
    swiperthumbnail['breakpoints'] = $thumbresponsiveData;

    const swiperGallery = new Swiper('.'+$moduleThumbId, swiperthumbnail);

    var thumbswiper = {
      initialSlide: 0,
      simulateTouch: true,
      paginationClickable: true,
      loop: $loop,
      spaceBetween: 10,
      navigation: {
        prevEl: '.wdt-arrow-advanced-thumb-pagination-prev-'+$modulethumbId,
        nextEl: '.wdt-arrow-advanced-thumb-pagination-next-'+$modulethumbId,
      },
      thumbs: {
        swiper: swiperGallery,
      },
    }

    const swiperThumbGallery = new Swiper('.'+$moduleclass, thumbswiper);

  }

  $(window).on('elementor/frontend/init', function () {
      elementorFrontend.hooks.addAction('frontend/element_ready/wdt-thumb-slider.default', wdtAdvancedThumbSliderWidgetHandler);
  });

})(jQuery);