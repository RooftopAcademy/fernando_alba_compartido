import productInterface from "../model/interfaces/productInterface";

export default function productCardComponent(product: productInterface) {
    return `
    <div class="product-item">
        <a class="a product-item-img-box ts-route" href="/products/${product.id}">
            <img class="product-item-img" src="${product.image}" alt="${product.name}">
        </a>
        <div class="product-item-body d-flex">
            <a class="a product-category" href="/products/${product.category}">${product.category}</a>
            <h3 class="product-title"><a class="a ts-route" href="/products/${product.id}">${product.name}</a></h3>
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