const burger_menu = document.getElementById('burger')
const nav = document.getElementById('nav-links')

function toggleMenu() {
    burger_menu.classList.toggle('burger_menu_toggle')
    nav.classList.toggle('nav_active')
}

burger_menu.addEventListener('click', toggleMenu)