const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const dots = document.querySelectorAll('.dot');

let index = 0;

function updateSlider() {
  slides.style.transform = `translateX(-${index * 400}px)`; 
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

document.getElementById('next').onclick = () => {
  index = (index + 1) % images.length;
  updateSlider();
};

document.getElementById('prev').onclick = () => {
  index = (index - 1 + images.length) % images.length;
  updateSlider();
};

// Click dots to navigate
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    index = i;
    updateSlider();
  });
});



document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const button = document.getElementByClassName('sendBtn');
  button.textContent = 'Sent Successfully';
});

const menuBtn = document.getElementById('menuBtn');
const sideMenu = document.getElementById('sideMenu');
const closeBtn = document.getElementById('closeBtn');

menuBtn.addEventListener('click', () => {
  sideMenu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  sideMenu.classList.remove('active');
});