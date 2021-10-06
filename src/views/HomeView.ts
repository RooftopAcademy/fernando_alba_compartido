import App from "../App";
import HomePage from "../components/HomePage";
import brandInterface from "../model/interfaces/brandInterface";
import AbstractView from "./AbstractView";
import brandList from "./brandList";

export default class HomeView extends AbstractView {

    constructor(app: App, params: string[] | undefined) {
        super(app, params);
        this.setTitle('Home')
    }

    getHTMLElement(): HTMLElement {

        const divElement = document.createElement('div')
        divElement.innerHTML = HomePage()

        this.app.getStore().fetchBrands()
        const brandList = this.app.getStore().getCatalog().getBrandList()

        this.renderBrandList(divElement, brandList)
        this.setEventListener(divElement, this.app)
        
        return divElement
    }

    renderBrandList(divElement: HTMLDivElement, brands: brandInterface[]) {
        Array.from(divElement.getElementsByClassName('js-brand-list'))
            .forEach(list => 
                brandList(brands)
                    .forEach(item => list.innerHTML += item)
        )
    }

    setEventListener(divElement: HTMLDivElement, app: App) {
        Array.from(divElement.getElementsByClassName('ts-route')).forEach(element => {
            element.addEventListener('click', function(e) {
                e.preventDefault()
                // console.log((e.target as HTMLAnchorElement).pathname);
                app.navigateTo( (e.target as HTMLAnchorElement).pathname)
            })
        })
    }
}