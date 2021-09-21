
let store = new Store

store.fetchProducts()

renderProductList()
addToCartEventListener()

function renderProductList() {
    Array.from(document.getElementsByClassName('js-product-list'))
        .forEach(list => 
            productList(store.catalog.productList)
                .forEach(item => list.innerHTML += item)
        )
}

function addToCartEventListener() {
    Array.from(document.querySelectorAll(".js-add-to-cart"))
        .forEach(button => {
            button.addEventListener('click', function() {
                let product = store.catalog.findProductById(this.dataset.productId)
                store.cart.add(product)
                console.log(store.cart);
            })
        })
}