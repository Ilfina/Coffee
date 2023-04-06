//--Change background header
const scrollHeader = () => {
  const header = document.getElementById('header');
  //when the scroll is greater than 50 viewport height,add the scroll-header class to the header tag
  this.scrollY >= 50 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

//--Scroll Up
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up');

  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

//--Scroll Active Link
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']');

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link')
    }else{
      sectionsClass.classList.remove('active-link')
    }
  });
}
window.addEventListener('scroll', scrollActive);

//--Scroll Reveal
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: true,
})

sr.reveal (`.home-data, .products-data, .steps-content, .footer-container`)
sr.reveal (`.home-image`, {origin: 'bottom'})
sr.reveal (`.products-card`, {interval: 100})
sr.reveal (`.about-container img, .testimonial-container img`, {origin: 'right'})
sr.reveal (`.about-data, .testimonial-data`, {origin: 'left'})