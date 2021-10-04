import footerComponent from "./footerComponent";
import headerComponent from "./headerComponent";

export default function ProductsPage() {
    return `
        ${headerComponent()}

        <main class="d-flex main" id="main-container">

            <div class="product-list d-flex js-product-list">
                <!-- Render dynamically -->
            </div>
            
        </main>

        ${footerComponent()}
    `
}