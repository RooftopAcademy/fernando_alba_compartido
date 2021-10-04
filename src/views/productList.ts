import productCardComponent from "../components/productCardComponent";
import productInterface from "../model/interfaces/productInterface";

export default function productList(products: productInterface[]) {
    return products.map(product => productCardComponent(product))
}