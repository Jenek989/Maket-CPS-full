import Swiper, { Pagination } from 'swiper';
import '../../node_modules/swiper/swiper.scss';
import '../../node_modules/swiper/modules/pagination/pagination.scss';
import '../scss/style.scss';


const slideList = document.querySelector('.swiper-wrapper');
const buttonBrands = document.querySelector('.brand-swiper__button');
const buttonText = document.querySelector('.about__button');


buttonBrands.addEventListener('click', () => {
  slideList.classList.toggle('hidden');
  buttonBrands.classList.toggle('button--open');
  buttonBrands.textContent = slideList.classList.contains('hidden') ? 'Скрыть' : 'Показать все';
});

buttonText.addEventListener('click', () => {
  slideList.classList.toggle('hiddenText');
  buttonText.classList.toggle('buttonText--open');
  buttonText.textContent = slideList.classList.contains('hidden') ? 'Скрыть' : 'Показать все';
});

let init = false;
const swiperCard = () => {
  if (window.innerWidth <= 767) {
    if (!init) {
      init = true;
      let swiper = new Swiper(".mySwiper", {
        modules: [Pagination],
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 16,
        width: 240,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
          init: true
      });
    }
  } else {
    init = false;
      let swiper = new Swiper(".mySwiper", {
        spaceBetween: 0,
        width: 240,
      });
  }
}

swiperCard();

// window.addEventListener("resize", () => {
//   setTimeout(() => swiperCard(), 500);
// });

window.addEventListener('load', function() {
  setTimeout(() => swiperCard(), 100);
});
