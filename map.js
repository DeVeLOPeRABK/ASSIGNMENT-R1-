const navbtn = document.querySelector('.navbarger');
const closbtn = document.querySelector('.close');
const sidebar = document.querySelector('.sid_bar')
navbtn.addEventListener('click',() => {
    sidebar.classList.add(".active");
    
})