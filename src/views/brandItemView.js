
function brandItemView(brand) {
    return `
    <div class="card-brand">
        <a class="card-brand-item" href="#">
            <img class="img-brand" src="${brand.image}" alt="Brand">
        </a>
    </div>
    `
}