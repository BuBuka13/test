// (() => {
//   const swiper = new Swiper('.js-hero-slider', {
//     slidesPerView: 1,
//     loop: true,
//     pagination: {
//       el: '.js-hero-pagination',
//       clickable: true,
//     },

//     a11y: {
//       paginationBulletMessage: 'Перейти к слайду {{index}}'
//     }
//   });
// })();

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }

  // // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});




