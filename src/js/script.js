fetch("../components/header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;
      
  const links = document.querySelectorAll('.nav-link') 
  path = window.location.pathname.split('/').pop()
  links.forEach((link)=>{
    link.classList.remove('active')
    if (link.getAttribute('href') === path)
      link.classList.add('active')
  })   
  })
  .catch(error => console.error("Error loading header:", error));


const heroContent = document.querySelectorAll('.hero-content > *')
console.log(heroContent)
heroContent.forEach((hc, idx) => {
  setTimeout(() =>{
      hc.classList.add('appear')
  }, idx * 900);
});



