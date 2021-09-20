class Cart {
    constructor() {
        this._products = []
    }
    add(product) {
        if(product instanceof Product) {
            this._products.push(product)
            return
        }
        throw new Error('El parámetro 1 debe ser del tipo Product')
    }
}