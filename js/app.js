// DOM Events
let toggle = document.getElementById("toggle-btn")
toggle.addEventListener("click", function() {
    let navbarGroup = this.parentElement.parentElement
    let navbarSearch = navbarGroup.querySelector("#navbar-search")
    let navbarMenu = navbarGroup.querySelector("#navbar-menu")
    let active = "active"
    navbarSearch.classList.contains(active) ? navbarSearch.classList.remove(active) : navbarSearch.classList.add(active)
    navbarMenu.classList.contains(active) ? navbarMenu.classList.remove(active) : navbarMenu.classList.add(active)
})