// Fetching header and footer 
let currentUser = null , cartItems = LoadCartItems() 
fetch("../components/header.html").then(response => response.text()).then(data => {
    document.querySelector(".fetch-header").innerHTML = data

    const navParts = document.querySelectorAll('.navpart'),navtext = document.querySelectorAll('.nav-item > *')
    , navbar = document.querySelector('.navbar-expand-md')
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
    }catch{}
    if(currentUser){
      document.getElementById('loginBtn').classList.add('hidden')
      document.getElementById('signUpBtn').classList.add('hidden')
      document.getElementById('logOutBtn').classList.remove('hidden')
      // document.getElementById('welcome-msg').textContent = `welcome ${currentUser.email.split('@')[0]}`
    }
    else{
      document.getElementById('loginBtn').classList.remove('hidden')
      document.getElementById('signUpBtn').classList.remove('hidden')
      document.getElementById('logOutBtn').classList.add('hidden') 
      document.getElementById('welcome-msg').textContent = ''     
    }
    document.getElementById('logOutBtn').addEventListener('click' , logOut)
    fillCartwithItems()
    const cartList = document.getElementById('cartItemsList') , checkoutBtn = document.getElementById('checkoutBtn')
    , clearCartBtn = document.getElementById('clearCartBtn') , cartSubtotal = document.getElementById('cartSubtotal') 
    cartList.addEventListener("click", removeItemFromCart);
    clearCartBtn.addEventListener('click' , clearAllCart)
    checkoutBtn.addEventListener('click' , checkout)
    total = cartItems.reduce((sum, { new_price, amount }) => sum + (new_price * amount), 0)
    cartSubtotal.textContent = total.toFixed(2)
})
  .catch(error => console.error("Error loading header:", error));

fetch("../components/footer.html").then(response => response.text()).then(data => {
  document.querySelector('footer').innerHTML = data
  const btn = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 200) {
      btn.style.display = "flex";
    } else {
      btn.style.display = "none";
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})
// vars 

const shirts = [
  {
    id:'1',
    name: 'Casual Pleated Shirt',
    old_price: 1100.00,
    new_price: 599.00,
    url: 'shirts/Casual Pleated Short Sleeve Shirt.webp'
  },
  {
    id:'2',
    name: 'Casual Waffle Shirt',
    old_price: 1400.00,
    new_price: 850.00,
    url: 'shirts/Casual Waffle Short Sleeve Shirt.webp'
  },
  {
    id : '3',
    name: 'Cotton Henley Shirt',
    old_price: 1100.00,
    new_price: 650.00,
    url: 'shirts/Cotton Short Sleeve Henley Shirt.webp'
  },
  {
    id: '4',
    name: 'Short Sleeve Henley Shirt',
    old_price: 900.00,
    new_price: 490.00,
    url: 'shirts/Short Sleeve Henley Shirt.webp'
  },
  {
    id : '5',
    name: 'cotton shirt',
    old_price: 900.00,
    new_price: 499.00,
    url: 'shirts/cotton shirt.webp'
  },
]
const t_shirts = [
  {
    id:`${shirts.length+1}`,
    name: 'basic t-shirt',
    old_price: 700.00,
    new_price: 250.00,
    url: 't-shirts/basic t-shirt.jpg'
  },
  {
    id:`${shirts.length+2}`,
    name: 'long-sleeve black t-shirt',
    old_price: 999.99,
    new_price: 599.00,
    url: 't-shirts/long-sleeve black t-shirt.jpg'
  },
  {
    id:`${shirts.length+3}`,
    name: 'over-size t-shirt',
    old_price: 1200.00,
    new_price: 750.00,
    url: 't-shirts/over-size t-shirt.jpg'
  },
  {
    id:`${shirts.length+4}`,
    name: 'smart casual t-shirt',
    old_price: 1500.00,
    new_price: 799.00,
    url: 't-shirts/smart casual t-shirt.jpg'
  },
]
const polos = [
  {
    id:`${shirts.length+1+t_shirts.length}`,
    name: 'basic polo',
    old_price: 900.00,
    new_price: 499.00,
    url: 'polos/basic polo.jpg',
  },
  {
    id:`${shirts.length+2+t_shirts.length}`,
    name: 'Basic Short-sleeved polo',
    old_price: 700.00,
    new_price: 299.00,
    url: 'polos/Basic Short-sleeved Button-down polo.webp',
  },
  {
    id:`${shirts.length+3+t_shirts.length}`,
    name: 'Short Sleeve Polo',
    old_price: 900.00,
    new_price: 499.00,
    url: 'polos/Short Sleeve Polo with Arm Pocket.webp',
  },
  {
    id:`${shirts.length+4+t_shirts.length}`,
    name: 'long sleeve buttonless polo',
    old_price: 800.00,
    new_price: 399.00,
    url: 'polos/long sleeve buttonless polo.jpg',
  },
  {
    id:`${shirts.length+5+t_shirts.length}`,
    name: 'long sleeve cashmeer polo',
    old_price: 999.00,
    new_price: 499.00,
    url: 'polos/long sleeve cashmeer polo.jpg',
  },
  {
    id:`${shirts.length+6+t_shirts.length}`,
    name: 'long sleeve velvet polo',
    old_price: 1200.00,
    new_price: 699.00,
    url: 'polos/long sleeve velvet polo.jpg',
  },
  {
    id:`${shirts.length+7+t_shirts.length}`,
    name: 'long sleeve trico polo',
    old_price: 600.00,
    new_price: 299.00,
    url: 'polos/long sleeve trico polo.webp',
  },
  {
    id:`${shirts.length+8+t_shirts.length}`,
    name: 'oversize polo',
    old_price: 800.00,
    new_price: 399.00,
    url: 'polos/oversize polo.webp',
  },
  {
    id:`${shirts.length+9+t_shirts.length}`,
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
, rows = Math.ceil((shirts.length + t_shirts.length + polos.length) / 4), cols = 4
, heroContent = document.querySelectorAll('.hero-content > *')
, productsHeroContent = document.querySelectorAll('.products-hero-content > *')
, collection_container = document.getElementById('products-section')
, swiperCardsContainer = document.getElementById('swiper-cards-container')
, swiperCardsNUmber = 6
, blogsContainer = document.getElementById('blogs-section')
, blogRows = Math.ceil(blogs.length / 2)
, CartElemnets = []

// functions
// making cards 
function makeCard(productUrl , productName , productOld_price , productNew_price , product_id){
  return`
  <div data-id='${product_id}' class="card border-0 m-0 h-100">
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
function makeBlogCard(title, url, content){
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
  `;
}
function makeSwiperCard(productUrl , productName , productOld_price , productNew_price , product_id){
  return`
  <div data-id="${product_id}" class="card m-0">
  <img class="card-img m-0" src="${base_collections_url}${productUrl}" alt="">
  <div class="card-img-overlay d-flex flex-column justify-content-end p-0">
      <div class="overlay-content bg-orange-overlay text-black text-center ">
          <button class="add-in-cart bg-transparent p-1 p-1 p-lg-2">Quick Add</button>
      </div>
  </div>
  </div>

  <div class="card-content d-flex flex-column align-items-center p-3">
    <h2 class="text-black height-fit-content fs-6">${productName}</h2>
    <div class="d-flex gap-3">
        <span style="text-decoration: line-through;">${productOld_price} LE</span>
        <span class="text-orange">${productNew_price} LE</span>
    </div>
  </div>
  `
}
// cart 
function checkout () { 
  if(!currentUser){
    Swal.fire({
      icon: "error",
      title: "checkout faild",
      text: "You must have account first",
      footer: '<a href="../pages/signup.html">Go create accout</a>'
    });
    return
  }  
  if(cartItems.length == 0){
    Swal.fire({
      icon: "error",
      title: "checkout faild",
      text: "there is nothing in your cart",
      footer: '<a href="../pages/products.html">Go shopping first</a>'
    });
    return
  }
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-primary ",
      cancelButton: "btn btn-secondary me-5"
    },
    buttonsStyling: false
  });
  
  // Checkout confirmation
  swalWithBootstrapButtons.fire({
    title: "Confirm Checkout?",
    text: "Do you want to place your order now?",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Yes, checkout",
    cancelButtonText: "not now",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      // Success notification
      swalWithBootstrapButtons.fire({
        title: "Order Placed!",
        text: "Your order has been successfully placed.",
        icon: "success"
      });
      clearCart()
      // TODO: perform actual checkout logic here
      // e.g., clear cartItems, update localStorage, call API 
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      // Cancel notification
      swalWithBootstrapButtons.fire({
        title: "Checkout Cancelled",
        text: "You can continue shopping.",
        icon: "info"
      });
    }
  });
 }
 function clearCart(){
  CartElemnets.forEach(cart => cart.remove())
  CartElemnets.length = 0;   // clear array references
  cartItems = []
  updateCartItems(cartItems)  
  document.getElementById('cartSubtotal').textContent = '0'
}

function clearAllCart(){
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger me-5"
    },
    buttonsStyling: false
  });
  swalWithBootstrapButtons.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "No, cancel!",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
      clearCart()
    } else if (
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire({
        title: "Cancelled",
        text: "Your imaginary file is safe :)",
        icon: "error"
      });
    }
  });
}
function removeItemFromCart(e) {
  if (!e.target.classList.contains("remove-from-cart")) return;

  const itemCard = e.target.closest(".cart-card");
  if (!itemCard) return;

  // read identifying attributes
  const cardId = itemCard.getAttribute("data-id") || itemCard.id || null;
  const cardColor = (itemCard.getAttribute("data-color") || "").toString();
  const cardSize = (itemCard.getAttribute("data-size") || "").toString();

  // find the matching cart item index
  let idx = cartItems.findIndex(it => {
    const itColor = (it.color || "").toString();
    const itSize = (it.size || "").toString();
    return String(it.id) === String(cardId) &&
           itColor.toLowerCase() === cardColor.toLowerCase() &&
           itSize.toLowerCase() === cardSize.toLowerCase();
  });

  // fallback: try matching by data-key (if present)
  if (idx === -1) {
    const cardKey = itemCard.getAttribute("data-key") || `${cardId}__${cardColor}__${cardSize}`;
    idx = cartItems.findIndex(it => {
      const itKey = `${it.id}__${String(it.color || "").toLowerCase()}__${String(it.size || "").toLowerCase()}`;
      return itKey === cardKey;
    });
  }

  // final fallback: match by product name (legacy)
  if (idx === -1) {
    const name = itemCard.querySelector("h6") ? itemCard.querySelector("h6").textContent.trim() : null;
    if (name) idx = cartItems.findIndex(it => it.name === name);
  }

  if (idx === -1) {
    Swal.fire({ title: "Item not found", text: "This item wasn't found in the cart data.", icon: "error" });
    return;
  }

  const cartItem = cartItems[idx];
  const amount = Number(cartItem.amount || 1);
  const price = Number(cartItem.new_price || cartItem.price || 0);

  // helper to recompute subtotal from cartItems (safer)
  function recomputeSubtotal() {
    const subtotalEl = document.getElementById('cartSubtotal');
    const total = cartItems.reduce((sum, it) => {
      const p = Number(it.new_price || it.price || 0);
      const a = Number(it.amount || 1);
      return sum + p * a;
    }, 0);
    subtotalEl.textContent = total.toFixed(2);
  }

  // Prepare sweetalert mixin with bootstrap classes
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-warning x-2 mt-3", // Remove one
      denyButton: "btn btn-danger mx-2 mt-3",     // Remove all
      cancelButton: "btn btn-secondary mx-2 mt-3",
    },
    buttonsStyling: false
  });

  // Build dialog html (preview)
  const html = `
    <div style="display:flex;gap:12px;align-items:center;">
      <img src="${base_collections_url}${cartItem.url || ''}" alt="${cartItem.name || ''}"
           style="width:72px;height:72px;object-fit:cover;border-radius:8px;border:1px solid rgba(0,0,0,0.06)" />
      <div style="font-size:14px;">
        <strong style="display:block;margin-bottom:6px">${cartItem.name || ''}</strong>
        <div style="color:#666;font-size:13px;margin-bottom:6px;">
          Color: <span style="text-transform:capitalize">${cartItem.color || '-'}</span>
          &nbsp;•&nbsp;
          Size: <span style="text-transform:uppercase">${cartItem.size || '-'}</span>
        </div>
        <div style="font-size:13px;color:#333;">
          Price: <strong>${(price).toFixed(2)} EGP</strong>
          &nbsp;•&nbsp;
          Quantity: <strong>${amount}</strong>
        </div>
      </div>
    </div>
    <style>
      /* small extra spacing for the swal content */
      .swal2-html-container { text-align: left; padding-top: 8px; }
    </style>
  `;

  // If amount > 1 we show "Remove one" (confirm) + "Remove all" (deny) + Cancel.
  // If amount === 1 we show "Remove" (confirm) + Cancel only (no deny/remove-all).
  const swalOptions = {
    title: amount > 1 ? "Remove item?" : "Remove item?",
    html,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: amount > 1 ? "Remove one" : "Remove",
    cancelButtonText: "Cancel",
    reverseButtons: true
  };

  if (amount > 1) {
    swalOptions.showDenyButton = true;
    swalOptions.denyButtonText = "Remove all";
  }

  swalWithBootstrapButtons.fire(swalOptions).then(result => {
    if (result.isConfirmed) {
      // remove one unit
      cartItems[idx].amount = Math.max(0, Number(cartItems[idx].amount || 1) - 1);

      // update DOM amount display (if exists)
      const amountEl = itemCard.querySelector('.cart-amount');
      if (amountEl) {
        amountEl.textContent = cartItems[idx].amount;
      } else {
        // fallback: update any paragraph containing "Amount:"
        const pList = itemCard.querySelectorAll('.cart-info p');
        pList.forEach(p => {
          if (/Amount:/i.test(p.textContent)) p.textContent = `Amount: ${cartItems[idx].amount}`;
        });
      }

      // if quantity becomes 0 -> remove completely
      if (cartItems[idx].amount === 0) {
        cartItems.splice(idx, 1);
        itemCard.remove();
      }

      recomputeSubtotal();
      updateCartItems(cartItems);

      swalWithBootstrapButtons.fire({ title: "Updated", text: "One unit removed from cart.", icon: "success" });

    } else if (result.isDenied) {
      // Remove all units of this item
      cartItems.splice(idx, 1);
      itemCard.remove();

      recomputeSubtotal();
      updateCartItems(cartItems);

      swalWithBootstrapButtons.fire({ title: "Deleted!", text: "All units of this item have been removed.", icon: "success" });

    } else if (result.dismiss === Swal.DismissReason.cancel) {
      // Cancelled - do nothing
      swalWithBootstrapButtons.fire({ title: "Cancelled", text: "Your item is safe.", icon: "info" });
    }
  });
}
function fillCartwithItems(){
  cartItems.forEach((product) =>{
    const cartCard = document.createElement('div')
    const cartList = document.getElementById('cartItemsList')
    const dataKey = `${product.id}__${String(product.color).toLowerCase()}__${String(product.size).toLowerCase()}`;
    cartCard.dataset.key = dataKey
    cartCard.className = 'cart-card w-100'
    cartCard.innerHTML = `
      <img src="${base_collections_url}${product.url}" class="cart-img" alt="${product.name}">
      <div class="cart-info">
          <h6>${product.name}</h6>
          <p>${Number(product.new_price).toFixed(2)} EGP</p>
          <p>
            Color: <span class="color-dot"
              style="display:inline-block;width:12px;height:12px;border-radius:50%;
              background:${product.color};margin-right:6px;vertical-align:middle;
              border:1px solid rgba(0,0,0,0.12)">
            </span>${product.color}
          </p>
          <p>Amount: <span class="cart-amount">${product.amount}</span></p>
          <p>Size: ${product.size}</p>
      </div>
      <button class="remove-from-cart btn btn-danger fs-small btn-sm">remove</button>
    `
    cartList.appendChild(cartCard)  
    CartElemnets.push(cartCard)
  })
}

function LoadCartItems (){
  try{
    return JSON.parse(localStorage.getItem('cartItems')) || []
  }
  catch{
    return []
  }
}
function updateCartItems(cartItems){
  localStorage.setItem('cartItems' , JSON.stringify(cartItems))
}
function addInCart(event) {
  const btn = event.target;
  const card = btn.closest('.card');
  const cartList = document.getElementById('cartItemsList');
  const id = card.getAttribute('data-id');
  const allProducts = [...shirts, ...t_shirts, ...polos];
  const product = allProducts.find(p => p.id === id);

  // Require login
  if (!currentUser) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You must be login first",
      footer: '<a href="../pages/login.html">Go Login</a>',
      showConfirmButton: false,
      allowOutsideClick: true,
      allowEscapeKey: true
    });
    return; // stop here
  }

  // Show modal
  Swal.fire({
    title: "Choose product details",
    html: `
      <div class="swal-product">
        <img id="swal-product-img" src="${base_collections_url}${product.url}" alt="${product.name}" />
        <div class="swal-product-info">
          <strong id="swal-product-name">${product.name}</strong>
          <div id="swal-product-price">${Number(product.new_price).toFixed(2)} EGP</div>
        </div>
      </div>

      <div class="swal-row">
        <label class="swal-label">Color</label>
        <div id="colorOptions" class="color-options">
          <label class="color-swatch" title="Green">
            <input type="radio" name="color" value="green" />
            <span class="swatch-circle" style="background:green"></span>
            <span class="swatch-name">Green</span>
          </label>
          <label class="color-swatch" title="Black">
            <input type="radio" name="color" value="black" />
            <span class="swatch-circle" style="background:black"></span>
            <span class="swatch-name">Black</span>
          </label>
          <label class="color-swatch" title="Blue">
            <input type="radio" name="color" value="blue" />
            <span class="swatch-circle" style="background:blue"></span>
            <span class="swatch-name">Blue</span>
          </label>
          <label class="color-swatch" title="White">
            <input type="radio" name="color" value="white" />
            <span class="swatch-circle" style="background:white; border:1px solid #ccc"></span>
            <span class="swatch-name">White</span>
          </label>
          <label class="color-swatch" title="Purple">
            <input type="radio" name="color" value="purple" />
            <span class="swatch-circle" style="background:purple"></span>
            <span class="swatch-name">Purple</span>
          </label>
          <label class="color-swatch" title="Gray">
            <input type="radio" name="color" value="gray" />
            <span class="swatch-circle" style="background:gray"></span>
            <span class="swatch-name">Gray</span>
          </label>
        </div>
      </div>

      <div class="swal-row">
        <label class="swal-label">Amount</label>
        <input id="amountInput" type="number" class="swal2-input" min="1" value="1" />
      </div>

      <div class="swal-row">
        <label class="swal-label">Size</label>
        <select id="sizeSelect" class="swal2-input">
          <option value="Xsmall">XS</option>
          <option value="small">S</option>
          <option value="medium" selected>M</option>
          <option value="large">L</option>
          <option value="Xlarge">XL</option>
        </select>
      </div>

      <div class="swal-row preview-total">
        <strong>Preview total:</strong>
        <span id="previewTotal">${Number(product.new_price).toFixed(2)} EGP</span>
      </div>

      <style>
        .swal-product { display:flex; gap:12px; align-items:center; margin-bottom:10px; }
        #swal-product-img { width:64px; height:64px; object-fit:cover; border-radius:6px; }
        .swal-product-info { font-size:13px; }
        .swal-product-info strong { display:block; margin-bottom:4px; }
        .swal-row { margin:8px 0; }
        .swal-label { display:block; font-size:13px; margin-bottom:6px; color:#444; }
        .color-options { display:flex; gap:8px; flex-wrap:wrap; }
        .color-swatch { cursor:pointer; display:flex; align-items:center; gap:6px; padding:6px 8px; border-radius:8px; border:1px solid transparent; transition: all .15s; user-select:none; }
        .color-swatch input { display:none; }
        .swatch-circle { width:20px; height:20px; border-radius:50%; display:inline-block; box-shadow: 0 0 0 2px rgba(0,0,0,0.04) inset; }
        .swatch-name { font-size:12px; text-transform:capitalize; color:#222; }
        .color-swatch.selected { border-color:#007bff; background: rgba(0,123,255,0.06); }
        .preview-total { margin-top:12px; font-size:14px; }
        .swal2-input, #sizeSelect { box-sizing:border-box; width:100%; margin:0; }
      </style>
    `,
    focusConfirm: false,
    showCancelButton: true,
    confirmButtonText: "Add to cart",
    didOpen: () => {
      // default color = black
      const defaultColor = document.querySelector('input[name="color"][value="black"]');
      if (defaultColor) {
        defaultColor.checked = true;
        defaultColor.closest('.color-swatch').classList.add('selected');
      }

      const amountInput = document.getElementById('amountInput');
      const previewTotal = document.getElementById('previewTotal');
      const price = Number(product.new_price) || 0;

      function updatePreview() {
        const amt = Math.max(1, parseInt(amountInput.value, 10) || 1);
        previewTotal.textContent = (price * amt).toFixed(2) + ' EGP';
      }

      document.getElementById('colorOptions').querySelectorAll('.color-swatch').forEach(label => {
        label.addEventListener('click', () => {
          const input = label.querySelector('input[type="radio"]');
          if (input) input.checked = true;
          document.querySelectorAll('.color-swatch').forEach(l => l.classList.remove('selected'));
          label.classList.add('selected');
        });
      });

      amountInput.addEventListener('input', updatePreview);
      updatePreview();
    },
    preConfirm: () => {
      const checkedColor = document.querySelector('input[name="color"]:checked');
      const color = checkedColor ? checkedColor.value : null;
      const amount = Math.max(1, parseInt(document.getElementById('amountInput').value, 10) || 1);
      const size = document.getElementById('sizeSelect').value;

      if (!color) {
        Swal.showValidationMessage("Please pick a color.");
        return false;
      }
      if (!size) {
        Swal.showValidationMessage("Please pick a size.");
        return false;
      }

      return { color, amount, size };
    }
  }).then((result) => {
    if (!result.isConfirmed) return;

    const { color, amount, size } = result.value;
    const price = Number(product.new_price) || 0;

    // make a cart item object (clone so original product not mutated)
    const productForCart = Object.assign({}, product, {
      color,
      amount: Number(amount),
      size
    });

    // create a unique key for matching: id|color|size (use lowercase color/size to normalize)
    const key = `${productForCart.id}__${String(productForCart.color).toLowerCase()}__${String(productForCart.size).toLowerCase()}`;

    // try to find existing item in cartItems with same key
    let existingIndex = -1;
    for (let i = 0; i < cartItems.length; i++) {
      const it = cartItems[i];
      const itKey = `${it.id}__${String(it.color || '').toLowerCase()}__${String(it.size || '').toLowerCase()}`;
      if (itKey === key) {
        existingIndex = i;
        break;
      }
    }
    // console.log(existingIndex)
    const subtotalEl = document.getElementById('cartSubtotal');
    const prevSubtotal = parseFloat(subtotalEl.textContent) || 0;
    const addedAmountValue = (price * Number(productForCart.amount || 1));

    if (existingIndex !== -1) {
      // update existing item quantity
      cartItems[existingIndex].amount = Number(cartItems[existingIndex].amount || 0) + Number(productForCart.amount);
      // console.log(cartItems[existingIndex])
      // update DOM card: find matching card by data-key attribute
      const dataKey = key;
      const existingCard = cartList.querySelector(`.cart-card[data-key="${dataKey}"]`);
      console.log(existingCard)
      if (existingCard) {
        // update amount text inside the card (assumes there is an element with class .cart-amount)
        const amountEl = existingCard.querySelector('.cart-amount');
        if (amountEl) {
          amountEl.textContent = cartItems[existingIndex].amount;
        } else {
          // fallback: try to replace the "Amount: X" paragraph
          const pList = existingCard.querySelectorAll('.cart-info p');
          pList.forEach(p => {
            if (/Amount:/i.test(p.textContent)) {
              p.textContent = `Amount: ${cartItems[existingIndex].amount}`;
            }
          });
        }
      }

      // update subtotal by adding only the newly added items' total
      subtotalEl.textContent = (prevSubtotal + addedAmountValue).toFixed(2);

      // persist
      updateCartItems(cartItems);
    } else {
      // create new cart card with data-key attribute
      const cartCard = document.createElement('div');
      cartCard.className = 'cart-card w-100';
      // set attributes for later easy lookup
      cartCard.id = productForCart.id;
      cartCard.setAttribute('data-key', key);
      cartCard.setAttribute('data-id', productForCart.id);
      cartCard.setAttribute('data-color', productForCart.color);
      cartCard.setAttribute('data-size', productForCart.size);

      cartCard.innerHTML = `
        <img src="${base_collections_url}${productForCart.url}" class="cart-img" alt="${productForCart.name}">
        <div class="cart-info">
          <h6>${productForCart.name}</h6>
          <p>${Number(productForCart.new_price).toFixed(2)} EGP</p>
          <p>Color: <span class="color-dot" style="display:inline-block;width:12px;height:12px;border-radius:50%;background:${productForCart.color};margin-right:6px;vertical-align:middle;border:1px solid rgba(0,0,0,0.12)"></span>${productForCart.color}</p>
          <p>Amount: <span class="cart-amount">${productForCart.amount}</span></p>
          <p>Size: ${productForCart.size}</p>
        </div>
        <button class="remove-from-cart btn btn-danger fs-small btn-sm">remove</button>
      `;
      cartList.appendChild(cartCard);
      CartElemnets.push(cartCard);

      // push to cartItems and persist
      cartItems.push(productForCart);
      updateCartItems(cartItems);
      subtotalEl.textContent = (prevSubtotal + addedAmountValue).toFixed(2);
    }
  });
}


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
function fillSwiper(){
  let products_idx = 0
  reset_products_indeices()
  for (let i = 0; i < swiperCardsNUmber ; i++) {
    const swiperCard = document.createElement('div')
    swiperCard.className = 'swiper-slide mb-4'
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
    swiperCard.innerHTML = makeSwiperCard(product.url , product.name , product.old_price , product.new_price ,product.id) 
    swiperCardsContainer.appendChild(swiperCard)
  }  
}
function fillProductsPage(){
  let products_idx = 0
  reset_products_indeices()

  for (let i = 0; i < rows; i++) {
    const row = document.createElement('div')
    row.className = 'row-lg d-flex flex-colmun flex-wrap pt-5 gy-5 w-100 d-flex justify-content-evenly' 

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
      col.innerHTML = makeCard(product.url , product.name , product.old_price , product.new_price , product.id)
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
  localStorage.removeItem('cartItems')
  location.reload()
}


if (window.location.pathname.includes('home.html')){
  staggerAppear(heroContent, 1000, 800);
  fillSwiper()
  const addInCartBtns = document.querySelectorAll('.add-in-cart')
  addInCartBtns.forEach((btn) =>{
    btn.addEventListener('click',addInCart)
  })
}
if (window.location.pathname.includes('products.html')){
  staggerAppear(productsHeroContent, 1000, 800);
  fillProductsPage()
  const addInCartBtns = document.querySelectorAll('.add-in-cart')
  addInCartBtns.forEach((btn) =>{
    btn.addEventListener('click',addInCart)
  })
}
if (window.location.pathname.includes('blog.html')){
  fillBlogsPage()
}













