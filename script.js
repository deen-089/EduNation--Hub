const cancel = document.querySelector('.cancel').addEventListener('click', () => {
  menuNav.style.display = 'none'
})
const menuNav = document.querySelector('.nav-mobile');
const fabasIcon = document.querySelector('.fa-bars').addEventListener('click', () => {
  menuNav.style.display = 'block'
})
