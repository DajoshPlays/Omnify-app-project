'use strict'

// variables definition

const menuButton = document.querySelector(".bars");
const mobileNav = document.querySelector(".mobile-nav")


menuButton.addEventListener('click', function(){
    mobileNav.classList.toggle('active')
    console.log();
})

document.addEventListener('click', function(event) {
    isClickInsideMenu = mobileNav.contains(event.target);
    isClickOnMenuButton = menuButton.contains(event.target);

    if (!isClickInsideMenu && !isClickOnMenuButton && mobileNav.classList.contains('active')) {
        mobileNav.classList.remove('active');
    }
})