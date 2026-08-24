document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.banner-slider .slide');
  const prevBtn = document.querySelector('.banner-slider .prev');
  const nextBtn = document.querySelector('.banner-slider .next');
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });

  // Показать первый слайд сразу при загрузке
  showSlide(currentIndex);

  // Опционально: автопрокрутка слайдов (раскомментировать, если надо)
  /*
  setInterval(() => {
    nextBtn.click();
  }, 5000);
  */
});