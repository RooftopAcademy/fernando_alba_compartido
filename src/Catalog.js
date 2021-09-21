class Catalog {
    constructor() {
        this._brandList = []
        this._productList = []
    }

    addBrand(brand) {
        if (brand instanceof Brand) {
            this._brandList.push(brand)
            return
        }
        throw new Error('brand debe ser del tipo Brand')
    }

    get brandList() {
        return this._brandList
    }

    addProduct(product) {
        if (product instanceof Product) {
            this._productList.push(product)
            return
        }
        throw new Error('product debe ser del tipo Product')
    }

    get productList() {
        return this._productList
    }

    findProductById(id) {
        return this._productList.find(product => 
            product.id == id
        )
    }
}