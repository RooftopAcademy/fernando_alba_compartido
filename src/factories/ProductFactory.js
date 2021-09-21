
class ProductFactory {
    static create(obj) {
        let product = new Product

        product.id = obj.id
        product.name = obj.name
        product.image = obj.image
        product.category = obj.category
        product.price = obj.price

        return product
    }
}