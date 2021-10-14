
export default function pageTitleComponent(title: string) {
    return `
    <div class="page-title-overlap">
        <div class="page-title-container">
            <h3 class="page-title-text text-light">${title}</h3>
        </div>
        </div>
    `
}