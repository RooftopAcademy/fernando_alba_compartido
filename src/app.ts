import homePage from "./homePage"
import productsPage from "./productsPage"


export default class App {
    container: HTMLElement
    // pages = {
    //     'file:///': homePage,
    //     'file:///products': productsPage,
    //     'file:///cart': cartPage,
    //     'file:///404': 'Oops!'
    // }

    constructor(container: HTMLElement) {
        this.container = container
    }

    navigate(page: string | null) {
        switch (page) {
            case '/': 
                this.container.innerHTML = homePage()
                break
            case '/products': 
                this.container.innerHTML = productsPage()
                break
            default: 
                this.container.innerHTML = 'Oops!'
                break
        }
    }
}
