import productInterface from "../model/interfaces/productInterface";

export default function productItemView(product: productInterface) {
    return `
    <div class="product-item">
        <a class="a product-item-img-box ts-route" data-route="/product-detail" data-product-id="${product.id}">
            <img class="product-item-img" src="${product.image}" alt="${product.name}">
        </a>
        <div class="product-item-body d-flex">
            <a class="a product-category" href="">${product.category}</a>
            <h3 class="product-title"><a class="a ts-route" href="" data-route="/product-detail" data-product-id="${product.id}">${product.name}</a></h3>
            <div class="product-price">
                <span>$${product.price.toFixed(2)}</span>
            </div>
            <button class="btn btn-primary add-to-card ts-add-to-cart" type="button" data-product-id="${product.id}">
                <i class="fas fa-shopping-cart"></i>
                Add to Cart
            </button>
        </div>
    </div>
    `
}