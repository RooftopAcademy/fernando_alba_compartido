import productInterface from "../model/interfaces/productInterface";
import Product from "../model/Product";
import footerComponent from "./footerComponent";
import headerComponent from "./headerComponent";
import pageTitleComponent from "./pageTitleComponent";
import productDetailComponent from "./productDetailComponent";

export default function ProductDetailPage(product: productInterface) {
    return `
        ${headerComponent()}

        <main class="d-flex main" id="main-container">
            ${pageTitleComponent(product.name)}
            
            ${productDetailComponent(product)}
            
        </main>

        ${footerComponent()}
    `
}