import navbarComponent from "./navbarComponent";
import topbarComponent from "./topbarComponent";

export default function headerComponent() {
    return `
        <header class="d-flex header" id="ts-header">
            ${topbarComponent()}

            ${navbarComponent()}
        </header>
    `
}