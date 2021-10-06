import App from "../App";
import ProductsPage from "../components/ProductsPage";
import productInterface from "../model/interfaces/productInterface";
import AbstractView from "./AbstractView";
import productList from "./productList";

export default class ProductsView extends AbstractView {
    
    constructor(app: App, params: string[] | undefined) {
        super(app, params);
        this.setTitle('Products')
    }

    getHTMLElement(): HTMLElement {

        const divElement = document.createElement('div')
        divElement.innerHTML = ProductsPage()

        this.app.getStore().fetchProducts()
        const productList = this.app.getStore().getCatalog().getProductList()

        this.renderProductList(divElement, productList)
        this.setEventListener(divElement, this.app)
        
        return divElement
    }

    renderProductList(divElement: HTMLDivElement, products: productInterface[]) {
        Array.from(divElement.getElementsByClassName('js-product-list'))
            .forEach(list => 
                productList(products)
                    .forEach(item => list.innerHTML += item)
        )
    }

    setEventListener(divElement: HTMLDivElement, app: App) {
        Array.from(divElement.getElementsByClassName('ts-route')).forEach(element => {
            element.addEventListener('click', function(e) {
                e.preventDefault()
                app.navigateTo( (e.target as HTMLAnchorElement).pathname)
            })
        })
    }
}