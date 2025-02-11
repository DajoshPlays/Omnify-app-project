'use strict'

// variable defining
const tabButtons = document.querySelectorAll('.tab-btn');

const tabContent = document.querySelectorAll('.content');

console.log(tabContent);
// functionality
tabButtons.forEach((tab, index) => {
    tab.addEventListener('click', (e)=>{
        tabButtons.forEach(tab => {tab.classList.remove('active')})
        tab.classList.add('active')

        tabContent.forEach(content=>content.classList.remove('active'))
        tabContent[index].classList.add('active')
        
    })
})

