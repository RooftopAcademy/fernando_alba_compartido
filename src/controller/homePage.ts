import App from "../App"
import brandList from "../views/branList"
import homeView from "../views/homeView"

export default function homePage(app: App) {

    const divElement = document.createElement('div')
    divElement.innerHTML = homeView()

    app.getStore().fetchBrands()
    
    renderBrandList(divElement, app)
    homePageNavigationListener(divElement, app)

    return divElement
}



function renderBrandList(divElement: HTMLDivElement, app: App) {
    Array.from(divElement.getElementsByClassName('js-brand-list'))
        .forEach(list => 
            brandList(app.getStore().getCatalog().getBrandList())
                .forEach(item => list.innerHTML += item)
    )
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
