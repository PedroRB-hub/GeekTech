const ativaMenu = document.querySelector('.fa-bars')
const navMenu = document.querySelector('header .menu')

ativaMenu.addEventListener('click', () => {
    ativaMenu.classList.toggle('fa-x')
    navMenu.classList.toggle('ativado')
})