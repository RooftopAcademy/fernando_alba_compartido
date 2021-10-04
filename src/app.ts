import pathToRegex from "./helpers/pathToRegex";
import Store from "./model/Store"
import HomeView from "./views/HomeView";
import ProductDetailView from "./views/ProductDetailView";
import ProductsView from "./views/ProductsView";

export default class App {
    store: Store = new Store
    container!: HTMLElement

    getStore(): Store {
        return this.store
    }

    setContainer(container: HTMLElement) {
        this.container = container
    }

    navigateTo = (url: string) => {
        history.pushState(null, '', url)
        this.router()
    }

    router() {
        
        const routes = [
            { path: '/home', view: HomeView },
            { path: '/products', view:  ProductsView },
            { path: '/products/:id', view:  ProductDetailView },
            { path: '/404', view:  HomeView }
        ]

        const potentialMatches = routes.map(route => {
            return {
                route: route,
                result: location.pathname.match(pathToRegex(route.path))
            }
        })

        let match = potentialMatches.find(potentialMatch => potentialMatch.result != null )

        if (!match) {
            match = {
                route: routes[3],
                result: [location.pathname]
            }
        }

        const params = match.result?.slice(1)
        
        const view = new match.route.view(this, params)

        this.container.replaceChildren(view.getHTMLElement())
        
    }
}
