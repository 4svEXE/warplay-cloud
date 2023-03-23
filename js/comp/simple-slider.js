// slider
let sliderVisible = true
let sliderImgID = 0
// CONFIG //////////////
let sliderDuration = 20
////////////////////////

if (qs('#preloader')) { qs('#preloader').onload = mainSlider() }

function mainSlider() {
  qs('.slider-img').classList.remove('preloader')
  qs('.first-screen-slider').style.transition = sliderDuration + 's'

  activeSlider()
}

function activeSlider() {
  let firstScreenSlider = setInterval(() => {
    if (sliderVisible) {
      dbToggle('.first-screen-slider', 'slider-zoom', (sliderDuration * 1000) /2)
      if (sliderImgID > 3) sliderImgID = 0
      qs('.slider-img').style.background = `url('img/slider/${sliderImgID++}.jpg')`
      qs('.slider-img').style.backgroundSize = 'cover'
    }
  }, sliderDuration * 1000)
}

// Получаем нужный элемент
var element = qs('.first-screen');

var Visible = function (target) {
  // Все позиции элемента
  var targetPosition = {
    top: window.pageYOffset + target.getBoundingClientRect().top,
    left: window.pageXOffset + target.getBoundingClientRect().left,
    right: window.pageXOffset + target.getBoundingClientRect().right,
    bottom: window.pageYOffset + target.getBoundingClientRect().bottom
  },
  // Получаем позиции окна
  windowPosition = {
    top: window.pageYOffset,
    left: window.pageXOffset,
    right: window.pageXOffset + document.documentElement.clientWidth,
    bottom: window.pageYOffset + document.documentElement.clientHeight
  };

  if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
    targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
    targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
    targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
      // Если элемент полностью видно, то запускаем следующий код
      if (!sliderVisible) {
        sliderVisible = true
      }
    } else {
      // Если элемент не видно, то запускаем этот код
      sliderVisible = false
    };
  };

  // Запускаем функцию при прокрутке страницы
  window.addEventListener('scroll', function() {
    if (element) Visible(element);
  });
