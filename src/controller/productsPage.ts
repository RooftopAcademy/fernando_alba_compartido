import App from "../App"
import productList from "../views/productList"
import productsView from "../views/productsView"
import addToCartEventListener from "./addToCart"

export default function productsPage(app: App) {

    const divElement = document.createElement('div')
    divElement.innerHTML = productsView()

    app.getStore().fetchProducts()
    
    renderProductList(divElement, app)
    productsPageNavigationListener(divElement, app)
    addToCartEventListener(divElement, app)

    return divElement
}

function renderProductList(divElement: HTMLDivElement, app: App) {
    Array.from(divElement.getElementsByClassName('js-product-list'))
        .forEach(list => 
            productList(app.getStore().getCatalog().getProductList())
                .forEach(item => list.innerHTML += item)
    )
}

function productsPageNavigationListener(divElement: HTMLDivElement, app: App) {
    Array.from(divElement.getElementsByClassName('ts-route')).forEach(element => {
        element.addEventListener('click', function(e) {
            e.preventDefault()

            let route = (e.target as HTMLElement).getAttribute("data-route")
            let productId = (e.target as HTMLElement).getAttribute("data-product-id")
            
            app.navigate(route, productId)
        })
    })
}