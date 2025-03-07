'use strict'

// variables definition

const menuButton = document.querySelector(".bars");
const mobileNav = document.querySelector(".mobile-nav")
const searchInput = document.querySelector('#search-input')
const  searchButton = document.querySelector('.search')


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


// search input functionality
searchButton.addEventListener('click', function(){
    searchInput.classList.toggle('active')
})