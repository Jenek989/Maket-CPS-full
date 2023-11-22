import Swiper, { Pagination } from 'swiper';
import '../../node_modules/swiper/swiper.scss';
import '../../node_modules/swiper/modules/pagination/pagination.scss';
import '../scss/style.scss';

// buttons
const slideList = document.querySelectorAll('.swiper-wrapper');
const slideText = document.querySelector('.about__text--hidden');
const buttonsMore = document.querySelectorAll('.button');
const buttonText = document.querySelector('.about__button');

buttonsMore.forEach((button, index) => {
  button.addEventListener('click', () => {
    slideList[index].classList.toggle('hidden');
    button.classList.toggle('button--open');
    button.textContent = slideList[index].classList.contains('hidden')
      ? 'Скрыть'
      : 'Показать все';
  });
});

buttonText.addEventListener('click', () => {
  slideText.classList.toggle('openText');
  buttonText.classList.toggle('buttonText--open');
  buttonText.textContent = slideText.classList.contains('openText')
    ? 'Скрыть'
    : 'Читать далее';
});

// popup sidebar
const mainBurger = document.querySelector('.upper-menu__link-burger');
const mainSidebar = document.querySelector('.sidebar');
const mainSidebarBg = document.querySelector('.sidebar-wrapper');

mainBurger.addEventListener('click', () => {
  mainSidebar.classList.toggle('sidebar--open');
  mainSidebarBg.classList.toggle('sidebarBg--open');
  document.body.classList.toggle('lock');
});

// poput sidebar cansel
const mainSideBarCancel = document.querySelector(
  '.sidebar-upper-menu__link-cancel'
);

mainSideBarCancel.addEventListener('click', () => {
  mainSidebar.classList.toggle('sidebar--open');
  mainSidebarBg.classList.toggle('sidebarBg--open');
  document.body.classList.toggle('lock');
});

// popup sidebar off

mainSidebarBg.addEventListener('click', (e) => {
  if (e.target.className === 'sidebar-wrapper sidebarBg--open') {
    mainSidebar.classList.remove('sidebar--open');
    mainSidebarBg.classList.remove('sidebarBg--open');
    document.body.classList.remove('lock');
  }
});

// ESC off

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    mainSidebar.classList.remove('sidebar--open');
    mainSidebarBg.classList.remove('sidebarBg--open');
    document.body.classList.remove('lock');
  }
});

// popup phone message

const popUpButtons = document.querySelectorAll('.popup');
const popUpCall = document.querySelector('.popup-call');
const popUpMessage = document.querySelector('.popup-feedback');

popUpButtons.forEach((button, index) => {
  button.addEventListener('click', (e) => {
    if (index % 2 === 0) {
      document.body.classList.toggle('lock');
      popUpCall.classList.toggle('popup-call--visible');
    } else {
      document.body.classList.toggle('lock');
      popUpMessage.classList.toggle('popup-feedback--visible');
    }
  });
});

popUpCall.addEventListener('click', (e) => {
  if (e.target.className === 'popup-call popup-call--visible') {
    popUpCall.classList.remove('popup-call--visible');
    document.body.classList.remove('lock');
  }
});

popUpMessage.addEventListener('click', (e) => {
  if (e.target.className === 'popup-feedback popup-feedback--visible') {
    popUpMessage.classList.remove('popup-feedback--visible');
    document.body.classList.remove('lock');
  }
});

// popup cancel

const popupCancel = document.querySelectorAll('.button__cancel');

popupCancel.forEach((button, index) => {
  button.addEventListener('click', (e) => {
    popUpCall.classList.remove('popup-call--visible');
    document.body.classList.remove('lock');
    popUpMessage.classList.remove('popup-feedback--visible');
    document.body.classList.remove('lock');
  });
});

var swiperElement = document.querySelector('.mySwiper');
var swiper = null;

function checkScreenSize() {
  var screenSize = window.innerWidth;

  if (screenSize <= 767) {
    if (!swiper) {
      swiper = new Swiper('.mySwiper', {
        modules: [Pagination],
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 16,
        width: 240,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      });
    }
  } else {
    if (swiper) {
      swiper.forEach((item) => item.destroy(false, true));
      swiper = null;
    }
    swiperElement.removeAttribute('style');
  }
}

checkScreenSize();
window.addEventListener('resize', checkScreenSize);
