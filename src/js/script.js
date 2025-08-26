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
  

function staggerAppear(elements, baseDelay, stepDelay) {
  elements.forEach((el, idx) => {
    setTimeout(() => {
      el.classList.add('appear');
    }, baseDelay + idx * stepDelay);
  });
}

const heroContent = document.querySelectorAll('.hero-content > *');
const productsHeroContent = document.querySelectorAll('.products-hero-content > *');

staggerAppear(heroContent, 2500, 800);
staggerAppear(productsHeroContent, 2000, 800);


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


const collection_container = document.getElementById('products-section')
const collection = [
  {
    name: 'navy slim polo',
    old_price: 1100.00 ,
    new_price : 599.00 ,
    img : 'collection5.webp'
  },
  {
    name: 'ment-green polo',
    old_price: 700.00 ,
    new_price : 299.00 ,
    img : 'collection6.webp'
  },
  {
    name: 'gray polo',
    old_price: 900.00 ,
    new_price : 499.00 ,
    img : 'collection7.jpg'
  },
  {
    name: 'long-slive gray polo',
    old_price: 900.00 ,
    new_price : 499.00 ,
    img : 'collection8.webp'
  },
  {
    name: 'long-slieve polo',
    old_price: 999.99 ,
    new_price : 599.00 ,
    img : 'collection12.jpg'
  },
  {
    name: 'long-slieve sweater',
    old_price: 899.99 ,
    new_price : 499.00 ,
    img : 'collection13.webp'
  },
  {
    name: 'long-slieve-coffe polo',
    old_price: 999.99 ,
    new_price : 599.00 ,
    img : 'collection12.jpg'
  },
]



