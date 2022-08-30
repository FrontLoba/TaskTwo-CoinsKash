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



  