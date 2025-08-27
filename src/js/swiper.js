let swiper = new Swiper('.swiper', {
    direction: 'horizontal',    
    slidesPerGroup: 1, 
    loop: true,
    autoplay: {
      delay: 3500,      
      disableOnInteraction: false,
    },
    breakpoints:{
      0: {
        slidesPerView: 1,
      },
      600:{
        slidesPerView: 2,
        spaceBetween: 20,
      },
      900:{
        slidesPerView: 3,     
        spaceBetween: 30,
      },
      1400:{
        slidesPerView: 4,     
        spaceBetween: 30,
      }
    },
    pagination: {
      el: '.swiper-pagination'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
  });