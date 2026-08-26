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
  showSlide(currentIndex);
});
const faLink = document.createElement('link');
    faLink.rel = 'stylesheet';
    faLink.href = 'https://cloudflare.com';
    document.head.appendChild(faLink);
function hideLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;
  loader.classList.add('hidden');
  setTimeout(() => {
    loader.remove();
    const container = document.querySelector('.container');
    if (container) {
      container.classList.add('menu-animated');
    }
  }, 600);
}
window.addEventListener('load', () => {
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      hideLoader();
    });
  } else {
    hideLoader();
  }
});
setTimeout(hideLoader, 10000);
window.addEventListener('load', () => {
  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach(item => {
    item.style.animationPlayState = 'paused';
    void item.offsetWidth;
    item.style.animationPlayState = 'running';
  });
});