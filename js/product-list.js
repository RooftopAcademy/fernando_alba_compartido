
let store = new Store

store.fetchProducts()

renderProductList()

function renderProductList() {
    Array.from(document.getElementsByClassName('js-product-list'))
        .forEach(list => 
            productList(store.catalog.productList)
                .forEach(item => list.innerHTML += item)
        )
}