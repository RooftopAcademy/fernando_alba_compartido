// DOM Events
let toggle = document.getElementById("toggle-btn")
toggle.addEventListener("click", function() {
    let navbarGroup = this.parentElement.parentElement
    let qsaList = navbarGroup.querySelectorAll("#navbar-search, #navbar-menu")

    let active = "active"

    qsaList.forEach(element => {
        element.classList.contains(active) ? element.classList.remove(active) : element.classList.add(active)
    })
})