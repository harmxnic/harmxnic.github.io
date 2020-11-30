const burger = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')
const menuItem = document.querySelectorAll('.menu_item')

burger.addEventListener('click', () => {
    burger.classList.toggle('hamburger_active')
    menu.classList.toggle('menu_active')
})

menuItem.forEach(item => {
    item.addEventListener('click', () => {
        burger.classList.toggle('hamburger_active')
        menu.classList.toggle('menu_active')
    })
})