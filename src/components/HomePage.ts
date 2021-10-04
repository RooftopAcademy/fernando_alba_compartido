import carrouselComponent from "./carrouselComponent";
import footerComponent from "./footerComponent";
import headerComponent from "./headerComponent";

export default function HomePage() {
    return `
        ${headerComponent()}

        <main class="d-flex main" id="main-container">
            ${carrouselComponent()}

            <div class="shop-by-brand">
                <h3 class="h3 text-dark text-align-center">Shop by brand</h3>
                <div class="d-flex card-brand-container js-brand-list">
                    <!-- render dynamically -->
                </div>
            </div>
        </main>

        ${footerComponent()}
    `
}