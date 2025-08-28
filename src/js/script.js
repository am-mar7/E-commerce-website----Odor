// Fetching header and footer 
fetch("../components/header.html").then(response => response.text()).then(data => {
    document.querySelector(".fetch-header").innerHTML = data

    // any js code  related to header will be written here 
    const navParts = document.querySelectorAll('.navpart')
    const navtext = document.querySelectorAll('.nav-item > *')
    const navbar = document.querySelector('.navbar-expand-md')
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        navParts[0].classList.add('hidden')
        navParts[1].classList.add('bg-blur')
        navParts[1].classList.add('fixed-top')
        navbar.classList.add('navbar-dark')
        navtext.forEach((text) => {
          text.classList.add('text-light')
        })
        navParts[1].classList.remove('border-bottom')
      }
      else {
        navParts[0].classList.remove('hidden')
        navbar.classList.remove('navbar-dark')
        navParts[1].classList.remove('fixed-top')
        navParts[1].classList.remove('bg-blur')
        navtext.forEach((text) => {
          text.classList.remove('text-light')
        })
        navParts[1].classList.add('border-bottom')
      }
    })

    const links = document.querySelectorAll('.nav-link')
    path = window.location.pathname.split('/').pop()
    links.forEach((link) => {
      link.classList.remove('active')
      if (link.getAttribute('href') === path)
        link.classList.add('active')
    })
    try{
      currentUser = JSON.parse(localStorage.getItem('currentUser'))
    }catch{
      currentUser = null
    }
    console.log(currentUser)
    if(currentUser){
      document.getElementById('loginBtn').classList.add('hidden')
      document.getElementById('signUpBtn').classList.add('hidden')
      document.getElementById('logOutBtn').classList.remove('hidden')
    }
    else{
      document.getElementById('loginBtn').classList.remove('hidden')
      document.getElementById('signUpBtn').classList.remove('hidden')
      document.getElementById('logOutBtn').classList.add('hidden')      
    }
    document.getElementById('logOutBtn').addEventListener('click' , logOut)
  })
  .catch(error => console.error("Error loading header:", error));

fetch("../components/footer.html").then(response => response.text()).then(data => {
  document.querySelector('footer').innerHTML = data
})
// vars 

const shirts = [
  {
    name: 'Casual Pleated Shirt',
    old_price: 1100.00,
    new_price: 599.00,
    url: 'shirts/Casual Pleated Short Sleeve Shirt.webp'
  },
  {
    name: 'Casual Waffle Shirt',
    old_price: 1400.00,
    new_price: 850.00,
    url: 'shirts/Casual Waffle Short Sleeve Shirt.webp'
  },
  {
    name: 'Cotton Henley Shirt',
    old_price: 1100.00,
    new_price: 650.00,
    url: 'shirts/Cotton Short Sleeve Henley Shirt.webp'
  },
  {
    name: 'Short Sleeve Henley Shirt',
    old_price: 900.00,
    new_price: 490.00,
    url: 'shirts/Short Sleeve Henley Shirt.webp'
  },
  {
    name: 'cotton shirt',
    old_price: 900.00,
    new_price: 499.00,
    url: 'shirts/cotton shirt.webp'
  },
]
const t_shirts = [
  {
    name: 'basic t-shirt',
    old_price: 700.00,
    new_price: 250.00,
    url: 't-shirts/basic t-shirt.jpg'
  },
  {
    name: 'long-sleeve black t-shirt',
    old_price: 999.99,
    new_price: 599.00,
    url: 't-shirts/long-sleeve black t-shirt.jpg'
  },
  {
    name: 'over-size t-shirt',
    old_price: 1200.00,
    new_price: 750.00,
    url: 't-shirts/over-size t-shirt.jpg'
  },
  {
    name: 'smart casual t-shirt',
    old_price: 1500.00,
    new_price: 799.00,
    url: 't-shirts/smart casual t-shirt.jpg'
  },
]
const polos = [
  {
    name: 'basic polo',
    old_price: 900.00,
    new_price: 499.00,
    url: 'polos/basic polo.jpg',
  },
  {
    name: 'Basic Short-sleeved polo',
    old_price: 700.00,
    new_price: 299.00,
    url: 'polos/Basic Short-sleeved Button-down polo.webp',
  },
  {
    name: 'Short Sleeve Polo',
    old_price: 900.00,
    new_price: 499.00,
    url: 'polos/Short Sleeve Polo with Arm Pocket.webp',
  },
  {
    name: 'long sleeve buttonless polo',
    old_price: 800.00,
    new_price: 399.00,
    url: 'polos/long sleeve buttonless polo.jpg',
  },
  {
    name: 'long sleeve cashmeer polo',
    old_price: 999.00,
    new_price: 499.00,
    url: 'polos/long sleeve cashmeer polo.jpg',
  },
  {
    name: 'long sleeve velvet polo',
    old_price: 1200.00,
    new_price: 699.00,
    url: 'polos/long sleeve velvet polo.jpg',
  },
  {
    name: 'long sleeve trico polo',
    old_price: 600.00,
    new_price: 299.00,
    url: 'polos/long sleeve trico polo.webp',
  },
  {
    name: 'oversize polo',
    old_price: 800.00,
    new_price: 399.00,
    url: 'polos/oversize polo.webp',
  },
  {
    name: 'smart casual polo',
    old_price: 900.00,
    new_price: 499.00,
    url: 'polos/smart casual polo.jpg',
  },

]
const products = [
  {
    index: 0,
    data: polos,
  },
  {
    index: 0,
    data: shirts,
  },
  {
    index: 0,
    data: t_shirts,
  },
]
const blogs = [
  {
    title :'A Day in Odor - Styled by Hussein Nassar',
    content: 'Watch how Hussein Nassar turns a regular day into a fashion statement with Odor. From effortless morning fits to refined evening looks.',
    url :'../assets/videos/Hussein Nasser.mp4'
  },
  {
    title :'Style Challenge with Odor',
    content: "Can you create 3 looks from one brand? They took on the challenge using Odor's latest collection. Clean lines, perfect fits, and style that works from day to night.",
    url :'../assets/videos/style with odor.mp4'
  },
  {
    title :'First Impressions: Is Odor Worth It?',
    content: 'Omar Ashraf gives an honest review after trying Odor for the first time. Fit, fabric, comfort, and design—see what makes Odor a go-to brand',
    url :'../assets/videos/irst impressions.mp4'
  },
  {
    title :'Behind the Shoot—Odor Collection BTS',
    content: 'Go behind the scenes of Odor’s latest campaign shoot with Menna El Sonny. Styling, premium details, and how pieces come to life.',
    url :'../assets/videos/Dress like a pro.mp4'
  },
  {
    title :'Dress Like a Pro with Odor',
    content: 'Muhamed Adel shares tips on how to elevate your everyday wardrobe with just a few pieces from Odor.',
    url :'../assets/videos/Behind the school.mp4'
  }, 
  {
    title :"What's New at Odor? Try-On Haul!",
    content: 'Watch how Hussein Nassar turns a regular day into a fashion statement with Odor. From effortless morning fits to refined evening looks.',
    url :"../assets/videos/what's a new.mp4"
  },
]
const rowObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    // only animate our intended columns
    const cols = entry.target.querySelectorAll('.col-animate');

    cols.forEach((col, i) => {
      setTimeout(() => col.classList.add('appear'), i * 150); // 150ms between cols
    });

    obs.unobserve(entry.target); // run once per row
  });
}, { threshold: 0.15 });
const base_collections_url = '../assets/images/collection/'
const rows = Math.ceil((shirts.length + t_shirts.length + polos.length) / 4), cols = 4
const heroContent = document.querySelectorAll('.hero-content > *');
const productsHeroContent = document.querySelectorAll('.products-hero-content > *');
const collection_container = document.getElementById('products-section')
const swiperCardsContainer = document.getElementById('swiper-cards-container')
const swiperCardsNUmber = 6
const blogsContainer = document.getElementById('blogs-section')
const blogRows = Math.ceil(blogs.length / 2)
// functions
function staggerAppear(elements, baseDelay, stepDelay) {
  elements.forEach((el, idx) => {
    setTimeout(() => {
      el.classList.add('appear');
    }, baseDelay + idx * stepDelay);
  });
}
function reset_products_indeices(){
  for(let it = 0 ; it < products.length ; it++)
    products[it].index = 0
}
function makeCard(productUrl , productName , productOld_price , productNew_price){
  return`
  <div class="card border-0  m-0 h-100">
      <div class="card-img h-100 m-0">
        <img src="${base_collections_url}${productUrl}" alt="">
        <div class="card-img-overlay d-flex flex-column justify-content-end p-0">
          <div class="overlay-content bg-orange-overlay text-black text-center ">
              <button class="add-in-cart bg-transparent p-1 p-lg-2">Quick Add</button>
          </div>
        </div>
      </div>
      <div class="card-body  d-flex flex-column bg-light">
          <h5 class="card-title text-center">${productName}</h5>
          <p class="card-text d-flex justify-content-center gap-3">
              <span style="text-decoration: line-through;">${productOld_price} LE</span>
              <span class="text-orange">${productNew_price} LE</span>
          </p>
      </div>
  </div>
  `
}
function makeBlogCard(title , url , content){
  return `
  <article class="card h-100 shadow-sm">
        <div class="ratio ratio-16x9 position-relative embed-cover">
          <iframe
            src="${url}"
            title="${title}"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            loading="lazy"
            class="border-0">
          </iframe>
        </div>
        <div class="card-body d-flex flex-column">
          <h1 class="card-title fs-5 mb-2">${title}</h1>
          <p class="card-text text-muted mb-0">${content}</p>           
        </div>
      </article>
  `
}
function makeSwiperCard(productUrl , productName , productOld_price , productNew_price){
  return`
  <div class="card m-0">
  <img class="card-img m-0" src="${base_collections_url}${productUrl}" alt="">
  <div class="card-img-overlay d-flex flex-column justify-content-end p-0">
      <div class="overlay-content bg-orange-overlay text-black text-center ">
          <button class="add-in-cart bg-transparent p-1 p-1 p-lg-2">Quick Add</button>
      </div>
  </div>
  </div>

  <div class="card-content d-flex flex-column align-items-center p-3">
    <h2 class="text-black fs-4">${productName}</h2>
    <div class="d-flex gap-3">
        <span style="text-decoration: line-through;">${productOld_price} LE</span>
        <span class="text-orange">${productNew_price} LE</span>
    </div>
  </div>
  `
}
function fillSwiper(){
  let products_idx = 0
  reset_products_indeices()
  for (let i = 0; i < swiperCardsNUmber ; i++) {
    const swiperCard = document.createElement('div')
    swiperCard.className = 'swiper-slide'
    let product = undefined
    while (!product) {
      if (products[0].index >= polos.length && products[1].index >= shirts.length && products[2].index >= t_shirts.length)
        break
      const curr_catagory = products[products_idx]
      product = curr_catagory.data[curr_catagory.index]
      curr_catagory.index += 1
      products_idx = (products_idx + 1) % products.length
    }
    if (!product)
      break
    swiperCard.innerHTML = makeSwiperCard(product.url , product.name , product.old_price , product.new_price) 
    swiperCardsContainer.appendChild(swiperCard)
  }  
}
function fillProductsPage(){
  let products_idx = 0
  reset_products_indeices()

  for (let i = 0; i < rows; i++) {
    const row = document.createElement('div')
    row.className = 'row pt-5 gy-5 w-100 d-flex justify-content-evenly' 

    for (let j = 0; j < cols; j++) {
      const col = document.createElement('div')
      col.className = 'col-8 col-sm-5 col-lg-3 col-xl-3 col-xxl-2 col-animate'
      let product = undefined

      while (!product) {
        if (products[0].index >= polos.length && products[1].index >= shirts.length && products[2].index >= t_shirts.length)
          break
        const curr_catagory = products[products_idx]
        product = curr_catagory.data[curr_catagory.index]
        curr_catagory.index += 1
        products_idx = (products_idx + 1) % products.length
      }

      if (!product) break
      col.innerHTML = makeCard(product.url , product.name , product.old_price , product.new_price)
      row.appendChild(col)
    }

    collection_container.appendChild(row)
    rowObserver.observe(row)
  }
}
function fillBlogsPage(){
  index = 0
  for (let i = 0; i < blogRows ; i++) {
    const row = document.createElement('div')
    row.className = 'row pt-5 gy-5 d-flex justify-content-evenly'
    for (let j = 0; j < 2; j++) {
      const col = document.createElement('div')
      col.className = 'col-8 col-lg-6 col-xxl-5'
      let product = blogs[index]
      index += 1
      console.log(product.url)
      if (!product)
        break
      col.innerHTML = makeBlogCard(product.title , product.url, product.content)
      row.appendChild(col)
    }
    blogsContainer.appendChild(row)
  }
}
function logOut () {
  localStorage.removeItem('currentUser')
  location.reload()
  // console.log(1)
}

if (window.location.pathname.includes('home.html')){
  staggerAppear(heroContent, 1000, 800);
  fillSwiper()
}
if (window.location.pathname.includes('products.html')){
  staggerAppear(productsHeroContent, 1000, 800);
  fillProductsPage()
}
if (window.location.pathname.includes('blog.html')){
  fillBlogsPage()
}












