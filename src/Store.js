class Store {
    constructor() {
        this._user = new User
        this._catalog = new Catalog
        this._cart = new Cart
    }

    set user(user) {
        if (user instanceof User) {
            this._user = user
            return
        }
        throw new Error('user debe ser del tipo User')
    }
    get user() {
        return this._user
    }

    fetchBrands() {
    }

    fetchProducts() {
    }

    getCart() {
        return this._cart
    }
}