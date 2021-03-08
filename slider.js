 var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 2,
      slidesPerView: 4,
      freeMode: false,
      watchSlidesVisibility: false,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 2,
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
      thumbs: {
        swiper: galleryThumbs
      }
    });