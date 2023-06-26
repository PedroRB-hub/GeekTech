const ativaMenu = document.querySelector('.fa-bars')
const navMenu = document.querySelector('header .menu')

ativaMenu.addEventListener('click', () => {
    ativaMenu.classList.toggle('fa-x')
    navMenu.classList.toggle('ativado')
})

const toggleBtn = document.getElementById("toggle-mode");
const body = document.body;
const header = document.body.header;

toggleBtn.addEventListener("click", function () {
    body.classList.toggle("dark-mode")
    header.classList.toggle("dark-mode-header")
})