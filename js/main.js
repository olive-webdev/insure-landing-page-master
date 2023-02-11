const nav = document.getElementById('nav')
const links = document.querySelectorAll('header>nav>ul>li>a')

document.addEventListener('click', (e) => {
  if (e.target.localName === 'button') {
    nav.classList.toggle('off')
    nav.classList.toggle('on')
  }
  links.forEach((el) => {
    if (el === e.target) {
      nav.classList.toggle('off')
      nav.classList.toggle('on')
    }
  })
})
