import App from "./App"
import "./css/app.css"
import "./css/elements.css"
import "./css/index.css"
import "./css/product-list.css"
import "./css/product-detail.css"


let app = new App()

app.setContainer(document.getElementById('app') as HTMLElement)

document.addEventListener('DOMContentLoaded', () => {
    app.router()
})

window.addEventListener("popstate", () => {
    app.router()
})





// function setToggleClickListener(toggle: HTMLElement) {
//     toggle.addEventListener("click", function(e) {

//         let navbarGroup = toggle.parentElement!.parentElement!
//         let qsaList = navbarGroup.querySelectorAll("#navbar-search, #navbar-menu")

//         let active = "active"

//         qsaList.forEach(element => {
//             element.classList.contains(active) ? element.classList.remove(active) : element.classList.add(active)
//         })
//     })
// }
