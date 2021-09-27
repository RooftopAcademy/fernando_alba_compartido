import productInterface from "../interfaces/productInterface"
import Product from "../Product"

export default class ProductFactory {
    static create(obj: { id: any; image: any; name: any; description: any; category: string; price: number }): productInterface {
        let product = new Product

        product.id = obj.id
        product.image = obj.image
        product.name = obj.name
        product.description = obj.description
        product.category = obj.category
        product.price = obj.price

        return product
    }
}