fetch("../components/header.html")
  .then(response => response.text())
  .then(data => {
    document.querySelector(".fetch-header").innerHTML = data

    // any js code  related to header will be written here 
  const navParts = document.querySelectorAll('.navpart')
  const navtext =  document.querySelectorAll('.nav-item > *')
  const navbar = document.querySelector('.navbar-expand-md')
  const cartIcon = document.querySelector('.nav-item svg')
  window.addEventListener('scroll' , ()=>{
    if(window.scrollY > 80){
      navParts[0].classList.add('hidden')
      navParts[1].classList.add('bg-blur')
      navParts[1].classList.add('fixed-top')
      navbar.classList.add('navbar-dark')
      navtext.forEach((text)=>{
        text.classList.add('text-light')
      })
      cartIcon.style.fill = '#f8f8f8'
      navParts[1].classList.remove('border-bottom')
    }
    else{
      navParts[0].classList.remove('hidden')
      navbar.classList.remove('navbar-dark')
      navParts[1].classList.remove('fixed-top')
      navParts[1].classList.remove('bg-blur')
      navtext.forEach((text)=>{
        text.classList.remove('text-light')
      })
      navParts[1].classList.add('border-bottom')
      cartIcon.style.fill = 'orangered'
    }
  })

  const links = document.querySelectorAll('.nav-link') 
  path = window.location.pathname.split('/').pop()
  links.forEach((link)=>{
    link.classList.remove('active')
    if (link.getAttribute('href') === path)
      link.classList.add('active')
  })   
  })
  .catch(error => console.error("Error loading header:", error));

fetch("../components/footer.html").then(response => response.text()).then(data =>{
  document.querySelector('footer').innerHTML = data
})
  

const heroContent = document.querySelectorAll('.hero-content > *')
heroContent.forEach((hc, idx) => {
  setTimeout(() =>{
      hc.classList.add('appear')
  },2500 +  idx * 800);
})

let swiper = new Swiper('.swiper', {
  direction: 'horizontal',    
  slidesPerGroup: 1, 
  loop: true,
  autoplay: {
    delay: 3500,      
    disableOnInteraction: false,
  },
  breakpoints:{
    0: {
      slidesPerView: 1,
    },
    600:{
      slidesPerView: 2,
      spaceBetween: 20,
    },
    900:{
      slidesPerView: 3,     
      spaceBetween: 30,
    },
    1400:{
      slidesPerView: 4,     
      spaceBetween: 30,
    }
  },
  pagination: {
    el: '.swiper-pagination'
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
});




