import Swiper, { Pagination } from 'swiper';
import '../../node_modules/swiper/swiper.scss';
import '../../node_modules/swiper/modules/pagination/pagination.scss';
import '../scss/style.scss';

// buttons
const slideList = document.querySelectorAll('.swiper-wrapper');
const slideText = document.querySelector('.about__text--hidden');
const buttonsMore = document.querySelectorAll('.button');
const buttonText = document.querySelector('.about__button');

// buttonBrands.addEventListener('click', () => {
//   slideList.classList.toggle('hidden');
//   buttonBrands.classList.toggle('button--open');
//   buttonBrands.textContent = slideList.classList.contains('hidden') ? 'Скрыть' : 'Показать все';
// });

buttonsMore.forEach((button, index) =>{
  button.addEventListener('click', () => {
    slideList[index].classList.toggle('hidden');
    button.classList.toggle('button--open');
    button.textContent = slideList[index].classList.contains('hidden') ? 'Скрыть' : 'Показать все';
  });
})

buttonText.addEventListener('click', () => {
  slideText.classList.toggle('openText');
  buttonText.classList.toggle('buttonText--open');
  buttonText.textContent = slideText.classList.contains('openText') ? 'Скрыть' : 'Читать далее';
});

// popup sidebar
const mainBurger = document.querySelector('.upper-menu__link-burger');
const mainSidebar = document.querySelector('.sidebar');
const mainSidebarBg = document.querySelector('.sidebar-wrapper');

mainBurger.addEventListener('click', () => {
  mainSidebar.classList.toggle('sidebar--open');
  mainSidebarBg.classList.toggle('sidebarBg--open');
});

// poput cansel
const mainSideBarCancel = document.querySelector('.sidebar-upper-menu__link-cancel');

mainSideBarCancel.addEventListener('click', () => {
  mainSidebar.classList.toggle('sidebar--open');
  mainSidebarBg.classList.toggle('sidebarBg--open');
});

mainSidebarBg.addEventListener('click', (e) => {

    if (e.target.className === "sidebar-wrapper sidebarBg--open") {

      mainSidebar.classList.remove('sidebar--open');
      mainSidebarBg.classList.remove('sidebarBg--open');

    }
});

document.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    mainSidebar.classList.remove('sidebar--open');
    mainSidebarBg.classList.remove('sidebarBg--open');
  }
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
        width: 220,
      });
  }
}

swiperCard();

window.addEventListener("resize", () => {
  setTimeout(() => swiperCard(), 500);
});

window.addEventListener('load', function() {
  setTimeout(() => swiperCard(), 100);
});
