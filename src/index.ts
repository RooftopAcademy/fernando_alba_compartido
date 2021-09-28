import App from "./App"
import setNavbarNavigationListener from "./controller/navbar"
import "./css/app.css"
import "./css/elements.css"
import "./css/index.css"
import "./css/product-list.css"
import navbarView from "./views/navbarView"

let header = document.getElementById("ts-header")
renderPageBody(header!)

let mainContainer = document.getElementById('main-container')!
let app = new App()
app.setMainContainer(mainContainer)

setNavbarNavigationListener(app)

app.navigate('/')


function renderPageBody(header: HTMLElement) {

    header.innerHTML += navbarView()

    let toggle = header.querySelector('#toggle-btn') as HTMLElement
    setToggleClickListener(toggle)
}

function setToggleClickListener(toggle: HTMLElement) {
    toggle.addEventListener("click", function(e) {

        let navbarGroup = toggle.parentElement!.parentElement!
        let qsaList = navbarGroup.querySelectorAll("#navbar-search, #navbar-menu")

        let active = "active"

        qsaList.forEach(element => {
            element.classList.contains(active) ? element.classList.remove(active) : element.classList.add(active)
        })
    })
}
