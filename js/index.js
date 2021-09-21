
let store = new Store

store.fetchBrands()

renderBrandList()

function renderBrandList() {
    Array.from(document.getElementsByClassName('js-brand-list'))
        .forEach(list => 
            brandList(store.catalog.brandList)
                .forEach(item => list.innerHTML += item)
        )
}