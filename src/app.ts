import homePage from "./controller/homePage"
import productsPage from "./controller/productsPage"
import Store from "./model/Store"


export default class App {
    store: Store = new Store;
    mainContainer!: HTMLElement;
    // pages = {
    //     'file:///': homePage,
    //     'file:///products': productsPage,
    //     'file:///cart': cartPage,
    //     'file:///404': 'Oops!'
    // }

    getStore(): Store {
        return this.store
    }

    setMainContainer(mainContainer: HTMLElement) {
        this.mainContainer = mainContainer
    }

    navigate(page: string | null, id?: string | null) {
        switch (page) {
            case '/':
                this.mainContainer.replaceChildren(homePage(this))
                break
            case '/products': 
                this.mainContainer.replaceChildren(productsPage(this))
                break
            case `/product-detail`: 
                this.mainContainer.replaceChildren(`Detalle de producto ${id}`)
                break
            default: 
                this.mainContainer.innerHTML = 'Oops!'
                break
        }
    }
}
