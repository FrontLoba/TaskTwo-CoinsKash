// JavaScript for the Mobile Menu List
const openBtn = document.getElementById('open-menu')
const menuList = document.getElementById('mobile-btn')
const closeBtn = document.getElementById('close-menu')

openBtn.addEventListener('click', () => {
  openBtn.classList.toggle('open-icon');
  closeBtn.classList.toggle('close-icon');
  menuList.classList.toggle('mobile-list')

  
})
closeBtn.addEventListener('click', () => {
    closeBtn.classList.toggle('close-icon');
    openBtn.classList.toggle('open-icon');
    menuList.classList.toggle('mobile-list')
})

// Java Script for the Caurosel section on Home page
const slidesContainer = document.getElementById('testimony-container');
const arrows = document.querySelectorAll('.arrow')
const slides = document.querySelectorAll('.slide');
const arrowLeft = document.querySelector('#arrow-left');
const arrowRight = document.querySelector('#arrow-right');

let slideIndex = 1;
showSlides(slideIndex);

function arrowIndicator(n) {
  showSlides(slideIndex +=n)
};

function viewedSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
let i;
let slides;
let arrows;
if (n > slides.length) {
  slideIndex = 1
}
if (n < 1) {
  slideIndex = slides.length
}
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = 'none';
}
slides[slideIndex - 1].style.display = 'block'

}



arrowLeft.addEventListener('click', arrowIndicator(-1));
arrowRight.addEventListener('click', arrowIndicator(1));









/*arrowLeft.addEventListener('click', () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft-= slideWidth;
});

arrowRight.addEventListener('click', () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});*/


 /*
  const togglePassword = document.querySelector("#togglePswd");
  const password = document.querySelector("#password");
  
  togglePassword.addEventListener("click", function () {
      // toggle the type attribute
      const type = password.getAttribute("type") === "password" ? "text" : "password";
      password.setAttribute("type", type);
      
      // toggle the icon
      type.classList.toggle("visible");
  });*/


  /*
  const phoneInputField = document.querySelector("#phone");
   const phoneInput = window.intlTelInput(phoneInputField, {
     utilsScript:
       "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
   });
  */



  