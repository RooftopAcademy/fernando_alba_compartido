import cartInterface from "./interfaces/cartInterface";
import productInterface from "./interfaces/productInterface";

export default class Cart implements cartInterface{
    products: productInterface[] = [];

    add(product: productInterface) {
        this.products.push(product)
    }

    getProducts(): productInterface[] {
        return this.products
    }
}
