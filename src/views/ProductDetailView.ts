import App from "../App";
import ProductDetailPage from "../components/ProductDetailPage";
import AbstractView from "./AbstractView";

export default class ProductDetailView extends AbstractView {
    productId: string
    
    constructor(app: App, params: string[] | undefined) {
        super(app, params);
        this.setTitle('Product detail')
        this.productId = this.params![0]
    }

    getHTMLElement(): HTMLElement {

        const divElement = document.createElement('div')
        divElement.innerHTML = ProductDetailPage()

        const product = this.app.getStore().getCatalog().findProductById(this.productId)

        console.log(product);
        

        this.setEventListener(divElement, this.app)
        
        return divElement
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