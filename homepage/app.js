'use strict'

// variables definition

const menuButton = document.querySelector(".bars");


menuButton.addEventListener('click', function(){
    menuButton.classList.add('active')
})

console.log(menuButton);