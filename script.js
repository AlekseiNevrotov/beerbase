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
  menuItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.remove('glitch');
      void item.offsetWidth;
      item.classList.add('glitch');
    }, index * 200);
  });
});
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
  return rect.top >= 0 && rect.bottom <= windowHeight;
}

function initSocialIconsSpin() {
  const icons = document.querySelectorAll('.socials a i');
  let spun = false;
  function onScroll() {
    if (spun) return;
    const anyVisible = Array.from(icons).some(icon => isElementInViewport(icon));
    if (anyVisible) {
      icons.forEach(icon => icon.classList.add('spin'));
      spun = true;
      window.removeEventListener('scroll', onScroll);
    }
  }
  window.addEventListener('scroll', onScroll);
  onScroll();
}
window.addEventListener('load', initSocialIconsSpin);