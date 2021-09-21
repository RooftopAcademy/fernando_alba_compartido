
function productItemView(product) {
    return `
    <div class="product-item">
        <a class="a product-item-img-box">
            <img class="product-item-img" src="${product.image}" alt="${product.name}">
        </a>
        <div class="product-item-body d-flex">
            <a class="a product-category" href="#">${product.category}</a>
            <h3 class="product-title"><a class="a" href="#">${product.name}</a></h3>
            <div class="product-price">
                <span>$${Math.trunc(product.price)}.<small>${(product.price - Math.floor(product.price).toFixed(2))}</small></span>
            </div>
            <button class="btn btn-primary add-to-card" type="button">
                <i class="fas fa-shopping-cart"></i>
                Add to Cart
            </button>
        </div>
    </div>
    `
}