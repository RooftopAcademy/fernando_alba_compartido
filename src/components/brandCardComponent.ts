import brandInterface from "../model/interfaces/brandInterface";

export default function brandCardComponent(brand: brandInterface) {
    return `
    <div class="card-brand">
        <a class="card-brand-item ts-route" href="/products">
            <img class="img-brand" src="${brand.image}" alt="${brand.name}">
        </a>
    </div>
    `
}