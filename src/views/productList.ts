import productInterface from "../model/interfaces/productInterface";
import productItemView from "./ProductItemView";

export default function productList(products: productInterface[]) {
    return products.map(product => productItemView(product))
}