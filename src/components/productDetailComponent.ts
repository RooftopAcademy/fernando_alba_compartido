import productInterface from "../model/interfaces/productInterface";

export default function productDetailComponent(product: productInterface) {
    return `
        <div class="product-container">
            <div class="d-flex product-card">
                <div class="product-gallery">
                    <img class="product-gallery-img" src="${product.image}" alt="${product.name}"></img>
                </div>

                <div class="product-detail">
                    <a class="a product-category product-detail-category" href="/products/${product.category}">${product.category}</a>

                    <div class="product-detail-price">
                        <span>$${product.price.toFixed(2)}</span>
                    </div>

                    <div class="product-detail-size">
                        <div class="d-flex product-detail-size-header">
                            <label class="product-detail-size-form-label" >Size:</label>
                            <a class="a size-nav-link" href="#size-chart">Size guide </a>
                        </div>
                        <select class="product-detail-form-select size">
                            <option value="">Select size</option>
                            <option value="xs">XS</option>
                            <option value="s">S</option>
                            <option value="m">M</option>
                            <option value="l">L</option>
                            <option value="xl">XL</option>
                      </select>
                    </div>

                    <div class="d-flex product-detail-add-to-cart">
                        <select class="product-detail-form-select quantity">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>

                        <button class="btn btn-primary product-detail-add-to-cart-button ts-add-to-cart" type="button" data-product-id="${product.id}">
                            <i class="fas fa-shopping-cart"></i>
                            Add to Cart
                        </button>
                    </div>

                    <div class="product-detail-info">
                        <h3 class="product-detail-info-title text-dark">Product info</h3>
                        <p class="product-detail-info-body">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate</p>
                    </div>
                </div>
            </div>
        </div>
    `

}