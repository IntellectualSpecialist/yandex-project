/* eslint-disable */
const currentSlide = document.querySelector('.slider__current-slide');
const sliderSpecial = document.querySelector('.slider--special');
const sliderBase = document.querySelector('.slider--base');

if (document.documentElement.clientWidth < 1366) {
  const slider = sliderSpecial;
  const prevButton = slider.querySelector('.slider__arrow--prev');
  const nextButton = slider.querySelector('.slider__arrow--next');
  const slides = Array.from(slider.querySelectorAll('.slider__item'));
  const slideCount = slides.length;
  let slideIndex = -1;
  currentSlide.textContent = slideIndex + 1;

  prevButton.addEventListener('click', showPreviousSlide);
  nextButton.addEventListener('click', showNextSlide);

  function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
    currenSlide();
  }

  function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
    currenSlide();
  }

  function showAutoSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
    currenSlide();
    setInterval(showNextSlide, 4000);
  }

  function updateSlider() {
    slides.forEach((slide, index) => {
      if ((index === slideIndex)) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });
  }

  function currenSlide() {
    currentSlide.textContent = slideIndex + 1;
  }

  updateSlider();
  currenSlide();
  showPreviousSlide();
  showNextSlide();
  showAutoSlide();
}

if (document.documentElement.clientWidth < 1366) {
  const slider = sliderBase;
  const prevButton = slider.querySelector('.slider__arrow--prev');
  const nextButton = slider.querySelector('.slider__arrow--next');
  const slides = Array.from(slider.querySelectorAll('.slider__item'));
  const sliderToggles = Array.from(slider.querySelectorAll('.slider__toggle-button'));
  const slideCount = slides.length;
  let slideIndex = 0;
  currentSlide.textContent = slideIndex + 1;

  prevButton.addEventListener('click', showPreviousSlide);
  nextButton.addEventListener('click', showNextSlide);

  function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
    updateToggle();
    updateNextButton();
    updatePrevButton();
    currenSlide();
  }

  function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
    updateToggle();
    updatePrevButton();
    updateNextButton();
    currenSlide();
  }

  function updateSlider() {
    slides.forEach((slide, index) => {
      if (index === slideIndex) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });
  }

  function updateToggle() {
    sliderToggles.forEach((sliderToggle, index) => {
      if (index === slideIndex) {
        sliderToggle.classList.add("slider__toggle-button--current");
      } else {
        sliderToggle.classList.remove("slider__toggle-button--current");
      }
    });
  }

  for (let i = 0; i < slideCount; i++) {
    if (sliderToggles) {
      sliderToggles[i].addEventListener('click', showSlide);
    }

    function showSlide() {
      slideIndex = i;
      updateSlider();
      updateToggle();
      updatePrevButton();
      updateNextButton();
    }
  }

  function updatePrevButton() {
    if (slideIndex > 0) {
      prevButton.classList.remove('slider__arrow--disabled');
    } else {
      prevButton.classList.add('slider__arrow--disabled');
    }
  }

  function updateNextButton() {
    if (slideIndex === slideCount - 1) {
      nextButton.classList.add('slider__arrow--disabled');
    } else {
      nextButton.classList.remove('slider__arrow--disabled');
    }
  }

  function currenSlide() {
    currentSlide.textContent = slideIndex + 1;
  }

  updateSlider();
  updateToggle();
  updatePrevButton();
  updateNextButton();
  currenSlide();
}

if (document.documentElement.clientWidth >= 1366) {
  const slider = sliderSpecial;
  const prevButton = slider.querySelector('.slider__arrow--prev');
  const nextButton = slider.querySelector('.slider__arrow--next');
  const slides = Array.from(slider.querySelectorAll('.slider__item'));
  const slideCount = slides.length;
  let slideIndex = 0;
  currentSlide.textContent = slideIndex + 1;

  prevButton.addEventListener('click', showPreviousSlide);
  nextButton.addEventListener('click', showNextSlide);

  function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    if (slideIndex < 2) {
      slideIndex = 2;
    }
    updateSlider();
    currenSlide();
  }

  function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    if (slideIndex < 2) {
      slideIndex = 2;
    }
    updateSlider();
    currenSlide();
  }

  function showAutoSlide() {
    if (slideIndex < 2) {
      slideIndex = 2;
    }
    setInterval(showNextSlide, 4000);
  }

  function updateSlider() {
    slides.forEach((slide, index) => {
      if ((index <= slideIndex) && (index > slideIndex - 3)) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });
  }

  function currenSlide() {
    currentSlide.textContent = slideIndex + 1;
  }

  updateSlider();
  currenSlide();
  showPreviousSlide();
  showNextSlide();
  showAutoSlide();
}
