'use strict'

const menuButton = document.querySelector(".bars");
const mobileNav = document.querySelector(".mobile-nav");
const imageHovers = document.querySelectorAll(".image-text");
const searchInput = document.querySelector('#search-input')
const  searchButton = document.querySelector('.s-icon')

// Toggle menu function
function toggleMenu(event) {
    // Prevent the click from immediately closing the menu
    event.stopPropagation();
    mobileNav.classList.toggle('active');
}

// Close menu function
function closeMenu() {
    mobileNav.classList.remove('active');
}

// Open/close menu when clicking the menu button
menuButton.addEventListener('click', toggleMenu);

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const isMenuOpen = mobileNav.classList.contains('active');
    const isClickInsideMenu = mobileNav.contains(event.target);
    const isClickOnMenuButton = menuButton.contains(event.target);

    // If menu is open and click is outside both menu and button, close it
    if (isMenuOpen && !isClickInsideMenu && !isClickOnMenuButton) {
        closeMenu();
    }
});

// Optional: Prevent clicks inside the menu from closing it
mobileNav.addEventListener('click', function(event) {
    event.stopPropagation();
});


imageHovers.forEach((imageHover) => {
    // Get the .absolute within this .image-text
    const absoluteImage = imageHover.querySelector('.absolute'); 

    imageHover.addEventListener('mouseover', function() {
        absoluteImage.classList.add('active2'); 
    });

    imageHover.addEventListener('mouseout', function() {
        absoluteImage.classList.remove('active2'); 
    });
});



// search input functionality
searchButton.addEventListener('click', function(){
    searchInput.classList.toggle('active')
})