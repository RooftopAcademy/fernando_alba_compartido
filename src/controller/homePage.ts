import App from "../App"
import Store from "../model/Store"
import homeView from "../views/homeView"

export default function homePage(app: App) {

    const divElement = document.createElement('div')
    divElement.innerHTML = homeView()

    homePageNavigationListener(divElement, app)
    return divElement
}



function homePageNavigationListener(divElement: HTMLDivElement, app: App) {
    Array.from(divElement.getElementsByClassName('ts-route')).forEach(element => {
        element.addEventListener('click', function(e) {
            e.preventDefault()
            console.log((e.target as HTMLElement).getAttribute("data-route"))
            app.navigate((e.target as HTMLElement).getAttribute("data-route"))
        })
    })
}
