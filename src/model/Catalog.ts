import brandInterface from "./interfaces/brandInterface";
import catalogInterface from "./interfaces/catalogInterface";
import productInterface from "./interfaces/productInterface";

export default class Catalog implements catalogInterface{
    brandList: brandInterface[] = [];
    productList: productInterface[] = [];

    addBrand(brand: brandInterface) {
        this.brandList.push(brand)
    }

    getBrandList(): brandInterface[] {
        return this.brandList
    }

    addProduct(product: productInterface) {
        this.productList.push(product)
    }

    getProductList(): productInterface[] {
        return this.productList
    }

    findProductById(id: string): productInterface {
        return this.productList.find(product => 
            product.id == id
        )!
    }

}
