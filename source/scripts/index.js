// /* в этот файл добавляет скрипты*/
// const sliders = Array.from(document.querySelectorAll('.slider'));
// for (let slider of sliders) {
//   const prevButton = slider.querySelector('.slider__arrow--prev');
//   const nextButton = slider.querySelector('.slider__arrow--next');
//   const slides = Array.from(slider.querySelectorAll('.slider__item'));
//   const slideCount = slides.length;
//   let slideIndex = 0;

//   // Устанавливаем обработчики событий для кнопок
//   prevButton.addEventListener('click', showPreviousSlide);
//   nextButton.addEventListener('click', showNextSlide);

//   // Функция для показа предыдущего слайда
//   function showPreviousSlide() {
//     slideIndex = (slideIndex - 1 + slideCount) % slideCount;
//     updateSlider();
//   }

//   // Функция для показа следующего слайда
//   function showNextSlide() {
//     slideIndex = (slideIndex + 1) % slideCount;
//     updateSlider();
//   }

//   // Функция для обновления отображения слайдера
//   function updateSlider() {
//     slides.forEach((slide, index) => {
//       if (index === slideIndex) {
//         slide.style.display = 'block';
//       } else {
//         slide.style.display = 'none';
//       }
//     });
//   }

//   // Инициализация слайдера
//   updateSlider();
// }
