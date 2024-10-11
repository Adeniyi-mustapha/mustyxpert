const hamburgerBtn = document.querySelector('#hamburger');
const closeBtn = document.querySelector('#closebar');
const navbar = document.querySelector('.right-nav');
const body = document.getElementsByTagName('body')[0];

hamburgerBtn.addEventListener('click', () => {
  navbar.classList.toggle('active')
  // body.style.overflow=hidden;
  
})

closeBtn.addEventListener('click', () => {
  navbar.classList.remove('active')
})