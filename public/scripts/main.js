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