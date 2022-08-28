// JavaScript for the Mobile Menu List

const openBtn = document.getElementById('open-menu');
const closeBtn = document.getElementById('close-menu');
const menuList = document.getElementById('mobile-btn');



openBtn.addEventListener('click', () => {

    menuList.classList.add('mobile-menu');
        // menuList.style.display = 'block';
        // closeBtn.style.display = 'block';
        // openBtn.style.display = 'none';
  })

closeBtn.addEventListener('click', () => {
        // menuList.style.display = 'none';
        // closeBtn.style.display = 'none';
        // openBtn.style.display = 'block';
        // menuList.className.add('open-icon')
})


// JavaScript for Caurosel 
// const scrollSlide = document.querySelector('testimony');
//     slideIndex = document.querySelector('t-holder');
//     slideDirect = document.querySelector('h-scroll');
// const i,




// openBtn.addEventListener('click', () => {
//         menuList.style.display = 'block';
//         closeBtn.style.display = 'block';
//         openBtn.style.display = 'none';
//     } );
//     openBtn.className.add('close-icon');
// }

// openMenu();

// closeBtn.addEventListener('click', () => {
//     menuList.classList.add('mobile-menu');
//     // openBtn.style.display = 'block'
// })