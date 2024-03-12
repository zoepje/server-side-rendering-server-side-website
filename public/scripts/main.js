// let initialDate = document.querySelector('.date')
// let initialDate = '2024-12-30 19:00:00'

// string replace 
// let formattedDate = new Date(initialDate).toLocaleDateString('nl-NL', {
//   day: '2-digit',
//   month: 'short',
//   hour12: false

// })
// console.log(formattedDate)


const menuBtn = document.querySelector('.menu-button'),
      // closeBtn = document.querySelector('.close-button'),
      nav = document.querySelector('nav'),
      header = document.querySelector('header');

// Functie uitklappen menu
function toggleMenu(){
  header.classList.toggle("nav-open");
}

// als je klikt op dit element dan voer deze funtie uit.
menuBtn.addEventListener("click", toggleMenu);