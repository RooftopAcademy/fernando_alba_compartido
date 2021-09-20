class Catalog {
    constructor() {
        this._productList = []
    }

    addProduct(product) {
        if (product instanceof Product) {
            this._productList.push(product)
            return
        }
        throw new Error('product debe ser del tipo Product')
    }

    findProductById(id) {
        return this._productList.find(product => {
            return product.id = id
        })
    }
}