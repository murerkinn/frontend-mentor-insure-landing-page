const toggler = document.getElementById('toggle')
const menu = document.getElementById('menu')

toggler.addEventListener('click', () => {
  menu.classList.toggle('active')
})

var tl = gsap.timeline();

tl.from('.hero-left', {
  y: '-20%',
  opacity: 0,
  duration: 2,
  ease: Power4.easeOut
})

tl.from('.bg-pattern-intro-right', {
  opacity: 0,
  x: 50,
  stagger: .3,
  ease: Power4.easeOut,
  duration: 2
}, "-=1.5")

tl.from('.bg-pattern-intro-left', {
  opacity: 0,
  x: -50,
  stagger: .3,
  ease: Power4.easeOut,
  duration: 2
}, "-=1.5")

tl.from('.hero-right', {
  opacity: 0,
  y: 30,
  stagger: .3,
  ease: Power4.easeOut,
  duration: 2
}, "-=1.7")
