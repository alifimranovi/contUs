/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
navToggle.addEventListener('click', () =>{
   navMenu.classList.add('show-menu')
})

/* Menu hidden */
navClose.addEventListener('click', () =>{
   navMenu.classList.remove('show-menu')
})

/*=============== SEARCH ===============*/
const search = document.getElementById('search'),
      searchBtn = document.getElementById('search-btn'),
      searchClose = document.getElementById('search-close')

/* Search show */
searchBtn.addEventListener('click', () =>{
   search.classList.add('show-search')
})

/* Search hidden */
searchClose.addEventListener('click', () =>{
   search.classList.remove('show-search')
})

/*=============== LOGIN ===============*/
const login = document.getElementById('login'),
      loginBtn = document.getElementById('login-btn'),
      loginClose = document.getElementById('login-close')

/* Login show */
loginBtn.addEventListener('click', () =>{
   login.classList.add('show-login')
})

/* Login hidden */
loginClose.addEventListener('click', () =>{
   login.classList.remove('show-login')
})


function abtUs() {
   let aU = prompt("Want to know about: 1. Alif or 2. Ratul >! enter num");

   if (aU == "1"){
      window.location.href = "https://alifimranovi.vercel.app/";
   }else if (aU == "2"){
      window.location.href = "https://bio.link/ratulislamshihab/";
   }else{
      alert("You must enter 1 or 2");
   }
}
function servicesOur() {
   let conf = confirm("Check out our all services from Discord!");

   if (conf) {
      window.location.href = "https://discord.gg/ZHxWsk5q3g"
   }else{
      alert("User cancelled redirection");
   }
}