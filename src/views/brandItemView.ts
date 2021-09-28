import brandInterface from "../model/interfaces/brandInterface";

export default function brandItemView(brand: brandInterface) {
    return `
    <div class="card-brand">
        <a class="card-brand-item ts-route" href="" data-route="/products">
            <img class="img-brand" src="${brand.image}" alt="${brand.name}">
        </a>
    </div>
    `
}