
let store = new Store

store.fetchBrands()

Array.from(document.getElementsByClassName('js-brand-list'))
    .forEach(list => {
        store.catalog.brandList.forEach(brand => {
            list.innerHTML += brandItemView(brand)
        })
    })