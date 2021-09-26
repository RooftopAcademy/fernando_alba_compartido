import homePage from "./controller/homePage"
import productsPage from "./controller/productsPage"
import setNavigationListener from "./controller/navigation"


export default class App {
    mainContainer: HTMLElement
    // pages = {
    //     'file:///': homePage,
    //     'file:///products': productsPage,
    //     'file:///cart': cartPage,
    //     'file:///404': 'Oops!'
    // }

    constructor(mainContainer: HTMLElement) {
        this.mainContainer = mainContainer
    }

    navigate(page: string | null) {
        switch (page) {
            case '/':
                this.mainContainer.replaceChildren(homePage())
                setNavigationListener(this)
                break
            case '/products': 
                this.mainContainer.replaceChildren(productsPage())
                setNavigationListener(this)
                break
            default: 
                this.mainContainer.innerHTML = 'Oops!'
                break
        }
    }
}
